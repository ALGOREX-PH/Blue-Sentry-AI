import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { checkForNavigation } from '../utils/chatNavigation';

const genAI = new GoogleGenerativeAI("AIzaSyBQ7AHGAho_F0toPhNttjzEaop4iHIZ1UI");

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function useChat() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! I\'m Blue Sentry AI\'s assistant. How can I help you learn about our oil spill detection technology?'
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (content: string) => {
    try {
      setIsLoading(true);
      
      // Check for navigation triggers
      const shouldNavigate = checkForNavigation(content, navigate);
      
      // Add user message
      const userMessage: Message = { role: 'user', content };
      setMessages(prev => [...prev, userMessage]);

      // If navigation occurred, add a helpful response
      if (shouldNavigate) {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: "I've redirected you to the relevant page. Let me know if you need any specific information!"
        }]);
        setIsLoading(false);
        return;
      }

      // Get Gemini response
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      
      const prompt = `You are Blue Sentry AI's helpful assistant. You specialize in explaining our oil spill detection technology, which uses satellite imagery and AI to detect and monitor oil spills in oceans. Keep responses concise and friendly. Current conversation context: ${JSON.stringify(messages)}. User message: ${content}`;
      
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const botMessage = response.text();

      // Add bot response
      setMessages(prev => [...prev, { role: 'assistant', content: botMessage }]);
    } catch (error) {
      console.error('Error getting chat response:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'I apologize, but I encountered an error. Please try again.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return { messages, sendMessage, isLoading };
}