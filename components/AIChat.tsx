import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2, Sparkles } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Hi there! I'm Wedoxa Bot. I can tell you about Haqqani, Ahshaan, or our project Lagan. How can I help?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      // Prepare history for Gemini
      // Mapping internal ChatMessage structure to GoogleGenAI history format
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const responseText = await sendMessageToGemini(history, userMsg.text);

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error("Chat error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-wedoxa-600 hover:bg-wedoxa-500 text-white rounded-full p-4 shadow-lg hover:shadow-wedoxa-500/40 transition-all duration-300 hover:scale-110 flex items-center gap-2 group"
        >
          <MessageSquare className="h-6 w-6" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-medium">
            Ask AI
          </span>
        </button>
      )}

      {isOpen && (
        <div className="glass-panel w-80 sm:w-96 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-700 animate-in fade-in slide-in-from-bottom-10 duration-300">
          {/* Header */}
          <div className="bg-wedoxa-900/80 p-4 flex items-center justify-between border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <div className="bg-wedoxa-500/20 p-1.5 rounded-lg">
                <Sparkles className="h-4 w-4 text-wedoxa-400" />
              </div>
              <div>
                <h3 className="text-white font-medium text-sm">Wedoxa Assistant</h3>
                <p className="text-xs text-green-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                  Online
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[400px] min-h-[300px] bg-gray-900/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-wedoxa-600 text-white rounded-tr-none'
                      : 'bg-gray-800 text-gray-200 border border-gray-700 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-800 border border-gray-700 rounded-2xl rounded-tl-none px-4 py-3">
                  <Loader2 className="h-4 w-4 animate-spin text-wedoxa-500" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-gray-800/80 border-t border-gray-700">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="relative"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Lagan or the team..."
                className="w-full bg-gray-900/50 text-white placeholder-gray-500 border border-gray-700 rounded-full py-2.5 pl-4 pr-12 focus:outline-none focus:border-wedoxa-500 focus:ring-1 focus:ring-wedoxa-500 transition-all text-sm"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="absolute right-1.5 top-1.5 bg-wedoxa-600 text-white p-1.5 rounded-full hover:bg-wedoxa-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChat;
