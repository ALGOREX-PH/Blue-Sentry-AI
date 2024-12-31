import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Loader2 } from 'lucide-react';
import { useChat } from '../../hooks/useChat';
import { ChatMessage } from './ChatMessage';

interface ChatWindowProps {
  onClose: () => void;
}

export function ChatWindow({ onClose }: ChatWindowProps) {
  const [message, setMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { messages, sendMessage, isLoading } = useChat();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isLoading) return;
    
    await sendMessage(message);
    setMessage('');
  };

  return (
    <div className="bg-deep-900 rounded-lg overflow-hidden border border-aqua/20">
      {/* Header */}
      <div className="bg-gradient-to-r from-marine to-purple p-4 flex items-center justify-between relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-shine opacity-30 animate-slide-right" />
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-3 h-3 rounded-full bg-aqua animate-ping absolute" />
            <div className="w-3 h-3 rounded-full bg-aqua relative" />
          </div>
          <h3 className="text-lg font-semibold text-white">Blue Sentry AI Assistant</h3>
        </div>
        <button
          onClick={onClose}
          className="text-white/80 hover:text-white hover:scale-110 transition-all duration-200"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-deep-900 to-marine/30">
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 bg-deep-900/95 border-t border-aqua/10 backdrop-blur-sm">
        <div className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask about our oil spill detection..."
            className="flex-1 bg-deep-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-aqua/50 border border-aqua/20 placeholder-blue-300/50"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !message.trim()}
            className="bg-gradient-to-r from-aqua to-blue-400 text-deep-900 rounded-lg px-4 py-2 hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
          </button>
        </div>
      </form>
    </div>
  );
}