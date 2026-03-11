import React, { useState } from 'react';
import './LeadCaptureModal.css';
import { User, Mail, Briefcase, Clock, CheckCircle2, ShieldAlert, Brain, ArrowRight, Loader2 } from 'lucide-react';

const LeadCaptureModal = ({ isOpen, onClose, source }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inheritanceRange: '100k-500k',
    timeframe: 'immediate'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // High-fidelity transmission simulation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
      }, 4000);
    }, 2000);
  };

  return (
    <div className="modal-overlay">
      <div className={`modal-shatter-container ${isSubmitted ? 'submitted' : ''}`}>
        <button className="modal-close-button" onClick={onClose}>&times;</button>
        
        {/* Left Panel: Profile & About */}
        <div className="modal-panel left-panel">
          <div className="panel-content">
            <div className="profile-image-container">
              <div className="profile-frame">
                <img 
                  src="/profile.png" 
                  alt="Andrew Waggoner" 
                  className="profile-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="profile-fallback" style={{ display: 'none' }}>
                  <User size={60} color="var(--gold)" />
                </div>
              </div>
              <div className="profile-status-ring"></div>
            </div>
            <h2 className="panel-title">Andrew Waggoner</h2>
            <p className="panel-subtitle">Principal Fiduciary Consultant</p>
            <div className="panel-bio">
              <p>Specializing in high-fidelity wealth preservation and behavioral acquisition systems. With a dual foundation in Strategic Communication and Financial Engineering, I bridge the trust gap between complex wealth events and expert fiduciary guidance.</p>
              <p style={{ marginTop: '15px' }}>Our mission is to architect the digital infrastructure for the $84 Trillion wealth transfer, ensuring data integrity and behavioral alignment at every touchpoint.</p>
            </div>
            <div className="panel-badges">
              <div className="badge"><ShieldAlert size={12} /> Fiduciary Integrity</div>
              <div className="badge"><Brain size={12} /> Behavioral Analyst</div>
            </div>
          </div>
        </div>

        {/* Right Panel: Form / Success */}
        <div className="modal-panel right-panel">
          <div className="panel-content">
            {!isSubmitted ? (
              <>
                <div className="form-header">
                  <span className="form-tag">High-Fidelity Gateway</span>
                  <h3>Secure Your Strategy</h3>
                  <p>Provide your credentials to initiate the AI diagnostic sequence and establish professional alignment.</p>
                </div>

                <form onSubmit={handleSubmit} className="professional-form">
                  <div className="input-field">
                    <label><User size={12} /> Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter full name" 
                      required 
                      disabled={isSubmitting}
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="input-field">
                    <label><Mail size={12} /> Corporate Email</label>
                    <input 
                      type="email" 
                      placeholder="email@example.com" 
                      required 
                      disabled={isSubmitting}
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="form-split">
                    <div className="input-field">
                      <label><Briefcase size={12} /> Target Range</label>
                      <select 
                        disabled={isSubmitting}
                        value={formData.inheritanceRange}
                        onChange={(e) => setFormData({...formData, inheritanceRange: e.target.value})}
                      >
                        <option value="under-100k">Under $100k</option>
                        <option value="100k-500k">$100k - $500k</option>
                        <option value="500k-1m">$500k - $1M</option>
                        <option value="1m-plus">$1M+</option>
                      </select>
                    </div>
                    <div className="input-field">
                      <label><Clock size={12} /> Timeframe</label>
                      <select 
                        disabled={isSubmitting}
                        value={formData.timeframe}
                        onChange={(e) => setFormData({...formData, timeframe: e.target.value})}
                      >
                        <option value="immediate">Immediate</option>
                        <option value="3-6-months">3-6 Months</option>
                        <option value="exploring">Exploring</option>
                      </select>
                    </div>
                  </div>
                  <button type="submit" className={`form-submit-btn ${isSubmitting ? 'submitting' : ''}`} disabled={isSubmitting}>
                    {isSubmitting ? (
                      <><Loader2 size={16} className="animate-spin" /> Transmitting...</>
                    ) : (
                      <>Initialize Transmission <ArrowRight size={16} /></>
                    )}
                  </button>
                </form>
                {isSubmitting && <div className="transmission-progress"></div>}
              </>
            ) : (
              <div className="success-state">
                <div className="success-ring-container">
                  <CheckCircle2 size={80} color="var(--kinetic-green)" className="success-icon-anim" />
                  <div className="success-pulse"></div>
                </div>
                <h3>Transmission Secured</h3>
                <p>Your high-fidelity data has been encrypted and routed to the fiduciary desk. A senior consultant will initiate alignment within 24 business hours.</p>
                <div className="system-status-badge">Node: Acquisition_Secure_01</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadCaptureModal;
