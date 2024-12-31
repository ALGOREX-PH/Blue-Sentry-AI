import React from 'react';
import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  message: {
    role: 'user' | 'assistant';
    content: string;
  };
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isBot = message.role === 'assistant';

  return (
    <div className={`flex gap-3 ${isBot ? 'items-start' : 'items-start flex-row-reverse'}`}>
      <div className={`
        w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 relative
        ${isBot ? 'bg-gradient-to-br from-aqua/30 to-purple/30' : 'bg-gradient-to-br from-blue-400/30 to-purple/30'}
        border ${isBot ? 'border-aqua/20' : 'border-blue-400/20'}
        before:absolute before:inset-0 before:rounded-full before:bg-gradient-shine before:opacity-0 before:hover:opacity-30 before:transition-opacity
      `}>
        <div className="absolute inset-0 rounded-full animate-pulse opacity-20" />
        {isBot ? (
          <Bot className="w-5 h-5 text-aqua" />
        ) : (
          <User className="w-5 h-5 text-blue-400" />
        )}
      </div>
      <div className={`
        max-w-[80%] rounded-lg px-4 py-2 relative overflow-hidden group transition-all duration-300
        ${isBot ? 'bg-gradient-to-br from-marine/30 to-purple/20' : 'bg-gradient-to-br from-blue-400/10 to-purple/10'}
        border ${isBot ? 'border-aqua/10' : 'border-blue-400/10'}
        hover:border-opacity-30
      `}>
        <div className="absolute inset-0 bg-gradient-shine opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
        <p className="text-sm text-white">{message.content}</p>
      </div>
    </div>
  );
}