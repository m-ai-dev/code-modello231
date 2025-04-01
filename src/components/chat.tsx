"use client";
import {useState, useEffect, useRef} from 'react';
import {postMessage} from '../lib/api.js';
import SmartTextarea from "../components/smart-textarea";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  isLoading?: boolean;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '0',
      text: 'Ciao, sono virtually, il tuo assistente virtuale!\nPuoi chiedermi qualsiasi informazione riguardante il tuo Modello 231.',
      isUser: false
    }
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const askQuestion = async (question: string) => {
    // Add user message
    setMessages(prev => [
      ...prev,
      {id: Date.now().toString(), text: question, isUser: true},
      {id: (Date.now() + 1).toString(), text: '', isUser: false, isLoading: true}
    ]);

    setIsSubmitting(true);

    try {
      const data = await postMessage(question);

      // Update the loading message with actual response
      setMessages(prev => prev.map(msg =>
        msg.isLoading
          ? {...msg, text: data.answer, isLoading: false}
          : msg
      ));
    } catch (error) {
      console.error('Error:', error);
      // Update the loading message with error
      setMessages(prev => prev.map(msg =>
        msg.isLoading
          ? {...msg, text: 'Si è verificato un errore. Riprova più tardi.', isLoading: false}
          : msg
      ));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col relative w-full" style={{height: 'calc(100vh - 200px)'}}>
      <div
        ref={chatContainerRef}
        className="flex-1 max-h-[90%] space-y-4 overflow-y-auto branded-scrollbar"
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={`max-w-[80%] w-fit px-5 py-3 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-2xl ${
              message.isUser
                ? 'ml-auto bg-gray-100 dark:text-gray-900 rounded-tl-2xl rounded-tr-[.2rem]'
                : 'mr-auto bg-blue-100 dark:text-gray-900 rounded-tl-[.2rem] rounded-tr-2xl'
            }`}
          >
            <p className="text-sm whitespace-pre-line">{message.text}</p>
            {message.isLoading && (
              <div className="mt-2 flex space-x-1">
                <div className="size-1 rounded-full bg-gray-600 animate-bounce"></div>
                <div className="size-1 rounded-full bg-gray-600 animate-bounce"
                     style={{animationDelay: '0.2s'}}></div>
                <div className="size-1 rounded-full bg-gray-600 animate-bounce"
                     style={{animationDelay: '0.4s'}}></div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex absolute w-full bottom-0">
        <SmartTextarea onSubmit={askQuestion} isSubmitting={isSubmitting}/>
      </div>
    </div>
  );
}