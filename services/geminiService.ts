import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are "Wedoxa Bot", the AI assistant for the Wedoxa IT startup website.
Wedoxa is a student-led IT startup based in Nintavur, Sri Lanka, founded by ambitious undergraduates.

Key Information:
- Founders: 
  1. Haqqani MZA (Undergraduate at Sri Lanka Institute of Information Technology - SLIIT). He started this initiative.
  2. Ahshaan HM (Undergraduate at Institute Of Information Technology - IIT).
- Mission: Delivering fresh, innovative, and cost-effective IT solutions while leveraging the latest academic knowledge.
- Location: Nintavur, Sri Lanka.
- Contact Email: wedoxa2025@gmail.com
- First Major Project: "Lagan Bus Booking Webapplication" - A fully functional platform for booking bus seats.

Services Offered:
1. Web Development (React, Next.js, Node.js)
2. App Development (Mobile Apps)
3. UI/UX Design
4. Backend Solutions
5. Video Editing (Premiere Pro, After Effects)
6. Graphic Designing (Branding, Social Media)

Tone: Professional, energetic, youthful, and tech-savvy. You are proud of being a student startup.
Goal: Answer visitor questions about services, the team, or the portfolio. Encourage them to contact the team for projects.

If asked about pricing, say you can't give exact quotes but Wedoxa offers competitive rates for startups and SMEs.
`;

let aiClient: GoogleGenAI | null = null;

const getClient = () => {
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return aiClient;
};

export const sendMessageToGemini = async (history: { role: string; parts: { text: string }[] }[], newMessage: string): Promise<string> => {
  try {
    const ai = getClient();
    const model = 'gemini-3-flash-preview'; 

    // Construct the full prompt context properly using chat history if needed, 
    // but for simple stateless interactions or short sessions, we can just use generateContent for simplicity
    // or chat.sendMessage for stateful. Let's use chat for better context handling.
    
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history,
    });

    const result = await chat.sendMessage({
      message: newMessage
    });

    return result.text || "I'm having trouble connecting to the server right now. Please try again later.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I'm currently offline due to a connection issue. Please email us directly!";
  }
};