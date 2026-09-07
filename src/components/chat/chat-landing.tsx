'use client';

import { motion } from 'framer-motion';
import { Award, Code, Mail, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import React from 'react';

interface ChatLandingProps {
  submitQuery: (query: string) => void;
}

const ChatLanding: React.FC<ChatLandingProps> = ({
  submitQuery,
}) => {
  // Suggested questions that the user can click on
  const suggestedQuestions = [
    {
      icon: <MessageSquare className="h-4 w-4" />,
      text: 'Who are you?',
    },
    {
      icon: <Code className="h-4 w-4" />,
      text: 'What projects have you worked on?',
    },
    {
      icon: <Award className="h-4 w-4" />,
      text: 'What are your skills?',
    },
    {
      icon: <Mail className="h-4 w-4" />,
      text: 'How can I contact you?',
    },
  ];

  // Animation variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      className="flex w-full flex-col items-center px-4 py-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex flex-wrap gap-2 justify-center">
        {suggestedQuestions.map(({ icon, text }, index) => (
          <motion.button
            key={index}
            variants={itemVariants}
            onClick={() => submitQuery(text)}
            className="flex items-center gap-2 rounded-xl border border-neutral-200 bg-white/80 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-neutral-100 transition-colors backdrop-blur-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {icon}
            <span>{text}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default ChatLanding;
