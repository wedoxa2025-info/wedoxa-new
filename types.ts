export interface TeamMember {
  id: string;
  name: string;
  role: string;
  university: string;
  imageUrl: string;
  bio: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link?: string;
  demoUrl?: string;
  status: 'Completed' | 'In Progress';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}