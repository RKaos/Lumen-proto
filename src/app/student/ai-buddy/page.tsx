"use client";

import { useState, useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import SubNav from '@/components/SubNav';

type Message = {
  id: number;
  sender: 'user' | 'ai';
  text: string;
  time: string;
};

export default function AiBuddyPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  const suggestions = [
    "Help me understand quadratic equations",
    "Explain Newton's laws of motion",
    "What are the types of chemical bonds?",
    "How can I improve my study habits?"
  ];

  // Auto-scroll to bottom of chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    // 1. Add User Message
    const userMessage: Message = {
      id: Date.now(),
      sender: 'user',
      text: text,
      time: timestamp
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // 2. Simulate AI Response after a delay
    setTimeout(() => {
      const aiResponseText = getMockResponse(text);
      const aiMessage: Message = {
        id: Date.now() + 1,
        sender: 'ai',
        text: aiResponseText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  const getMockResponse = (inputText: string): string => {
    const lower = inputText.toLowerCase();
    if (lower.includes('quadratic')) {
      return "Quadratic equations are formulas of the form ax² + bx + c = 0. The key to solving them is using the Quadratic Formula: x = (-b ± √(b² - 4ac)) / 2a. Would you like an example with numbers?";
    }
    if (lower.includes('newton')) {
      return "Newton's Laws of Motion are 3 laws: \n1. Inertia (Things stay at rest/motion unless acted on)\n2. F = ma (Force equals mass times acceleration)\n3. Action/Reaction (For every action there is an equal & opposite reaction). Which one should we do a problem for?";
    }
    if (lower.includes('chemical bonds')) {
      return "There are three primary types of chemical bonds: \n1. **Ionic**: Electron transfer (like Salt Na+ Cl-)\n2. **Covalent**: Sharing electrons (like Water H2O)\n3. **Metallic**: Shared sea of electrons. Do you need help with electronegativity ranges?";
    }
    if (lower.includes('study habits')) {
      return "Great study habits are built on focus and consistency:\n- **Pomodoro Technique**: 25m studying, 5m break.\n- **Active Recall**: Test yourself rather than just reading.\n- **Spaced Repetition**: Review items over expanding intervals. Which one sounds easiest to start today?";
    }
    return "That's a great question! I am your student assistant here to help with Homework revisions or summary tips. What specifically on that topic can I breakdown for you?";
  };

  return (
    <div className="dashboard-layout">
      <Navbar />
      <SubNav />

      <main className="main-content">
        <div className="dashboard-container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '1400px', width: '90%', flex: 1 }}>
          <div className="ai-page-container">

            {/* Empty State / Welcome */}
            {messages.length === 0 ? (
              <div className="ai-welcome-view">
                <div className="ai-icon-circle">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="10" rx="2"></rect>
                    <circle cx="12" cy="5" r="2"></circle>
                    <path d="M12 7v4"></path>
                    <line x1="8" y1="16" x2="8" y2="16"></line>
                    <line x1="16" y1="16" x2="16" y2="16"></line>
                  </svg>
                </div>
                <h2 className="ai-title">AI Learning Buddy</h2>
                <p className="ai-subtitle">Ask me anything about your subjects, homework, or study techniques!</p>

                <div className="ai-suggestion-grid">
                  {suggestions.map((suggestion, index) => (
                    <div 
                      key={index} 
                      className="ai-suggestion-card"
                      onClick={() => handleSendMessage(suggestion)}
                    >
                      {suggestion}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* Chat Log View */
              <div className="chat-history-container">
                {messages.map((message) => (
                  <div key={message.id} className={`chat-bubble ${message.sender}`}>
                    <div style={{ whiteSpace: 'pre-wrap' }}>{message.text}</div>
                  </div>
                ))}
                <div ref={chatEndRef} />
              </div>
            )}

            {/* Bottom Input Area */}
            <div className="chat-input-wrapper">
              <div className="chat-input-bar">
                <input 
                  type="text" 
                  className="chat-input" 
                  placeholder="Ask me anything..." 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                />
                <button className="send-btn" onClick={() => handleSendMessage(inputValue)}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
