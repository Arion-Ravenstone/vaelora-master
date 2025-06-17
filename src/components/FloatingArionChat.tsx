
// FloatingArionChat.tsx
import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FloatingArionChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <Card className="w-96 h-[550px] shadow-2xl rounded-2xl overflow-hidden">
          <CardContent className="p-0 h-full">
            <iframe
              src="/arion-chat"
              title="Talk to Arion"
              className="w-full h-full border-none"
              allow="clipboard-write"
            ></iframe>
          </CardContent>
        </Card>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-purple-800 hover:bg-purple-700 text-white p-4 rounded-full shadow-lg transition-all flex items-center justify-center"
        aria-label="Toggle Arion Chat"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};

export default FloatingArionChat;
