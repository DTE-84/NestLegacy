import React, { useState, useEffect, useRef } from 'react';
import './NovaAssistant.css';

const NovaAssistant = ({ onLeadCapture }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [userRole, setUserRole] = useState(null); // 'inheritor', 'cpa', 'cfp'
  const [step, setStep] = useState('initial');
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'nova',
      text: "Systems online. I am Nova, your Advanced Financial AI Consultant. To begin our diagnostic session, please specify if you are an individual navigating a wealth event or a financial professional evaluating our acquisition infrastructure.",
      timestamp: new Date().toISOString(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  // Listen for the global trigger from the focus section
  useEffect(() => {
    const handleTrigger = () => setIsOpen(true);
    window.addEventListener('open-nova-assistant', handleTrigger);
    return () => window.removeEventListener('open-nova-assistant', handleTrigger);
  }, []);

  const addMessage = (type, text) => {
    setMessages((prev) => [...prev, {
      id: Date.now(),
      type,
      text,
      timestamp: new Date().toISOString(),
    }]);
  };

  const processResponse = (input) => {
    const lowerInput = input.toLowerCase();
    setIsTyping(true);

    setTimeout(() => {
      let response = "";

      if (step === 'initial') {
        if (lowerInput.includes('inheritor') || lowerInput.includes('guidance') || lowerInput.includes('money') || lowerInput.includes('individual')) {
          setUserRole('inheritor');
          setStep('qualifying_inheritor');
          response = "Understood. Strategic wealth management requires absolute data integrity. Have you utilized our longevity projection tool, or shall I initiate a tax-exposure analysis for your specific scenario?";
        } else if (lowerInput.includes('cpa') || lowerInput.includes('professional') || lowerInput.includes('cfp')) {
          setUserRole('pro');
          setStep('qualifying_pro');
          response = "Acknowledged. NestLegacy is architected to optimize the fiduciary-to-client bridge. Are you seeking to deploy this infrastructure for your practice, or exploring our partnership ecosystem?";
        } else {
          response = "I have logged your input. My primary function is to optimize the interface between high-net-worth inheritors and specialized fiduciary experts. Please define your role to continue.";
        }
      } else if (step === 'qualifying_inheritor') {
        setStep('lead_capture');
        response = "I have analyzed the behavioral trajectory of similar wealth events. To provide a high-fidelity projection and facilitate alignment with a vetted CFP, I require your primary contact details. Shall we proceed?";
        if (onLeadCapture) setTimeout(onLeadCapture, 2000);
      } else if (step === 'qualifying_pro') {
        setStep('demo_setup');
        response = "Our architecture is modular and compliance-ready. I can provide a technical specification of our lead-scoring algorithm. Would you like to schedule a system walkthrough with our engineering team?";
        if (onLeadCapture) setTimeout(onLeadCapture, 2000);
      } else {
        response = "Analysis complete. I am ready to facilitate a professional discovery call. Please utilize the scheduling interface or provide your credentials here.";
      }

      addMessage('nova', response);
      setIsTyping(false);
    }, 1200);
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;
    addMessage('user', inputValue);
    const input = inputValue;
    setInputValue('');
    processResponse(input);
  };

  return (
    <div className={`nova-assistant-container ${isOpen ? 'open' : ''}`}>
      {!isOpen && (
        <button className="nova-trigger" onClick={() => setIsOpen(true)}>
          <div className="nova-pulse"></div>
          <span className="nova-icon">N</span>
          <span className="nova-label">Advanced Financial AI Consultant Active</span>
        </button>
      )}

      {isOpen && (
        <div className="nova-window">
          <div className="nova-header">
            <div className="nova-header-info">
              <div className="nova-avatar">N</div>
              <div>
                <h3>Nova Assistant</h3>
                <span className="nova-status">Advanced AI Consultant Active</span>
              </div>
            </div>
            <button className="nova-close" onClick={() => setIsOpen(false)}>&times;</button>
          </div>

          <div className="nova-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`nova-message-wrapper ${msg.type}`}>
                <div className="nova-message">
                  {msg.text}
                </div>
                <span className="nova-time">
                  {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            ))}
            {isTyping && (
              <div className="nova-message-wrapper nova">
                <div className="nova-message typing">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="nova-input-area">
            <input
              type="text"
              placeholder="System prompt..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <button className="nova-send" onClick={handleSend}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          </div>
          
          <div className="nova-footer">
            DTE SOLUTIONS | DATA · INTEGRITY · ENGINEERING
          </div>
        </div>
      )}
    </div>
  );
};

export default NovaAssistant;
