import React, { useState, useEffect } from 'react';
import './InheritanceCalculator.css';
import { DollarSign, Wallet, TrendingUp, ArrowRight, Sparkles } from 'lucide-react';

const InheritanceCalculator = ({ onAction }) => {
  const [amount, setAmount] = useState(250000);
  const [spending, setSpending] = useState(5000);
  const [growth, setGrowth] = useState(5);
  const [years, setYears] = useState(0);
  const [isDemoActive, setIsDemoActive] = useState(false);

  const calculateLongevity = () => {
    let currentBalance = amount;
    let months = 0;
    const monthlyGrowth = growth / 100 / 12;

    while (currentBalance > 0 && months < 1200) { // Cap at 100 years
      currentBalance = currentBalance * (1 + monthlyGrowth) - spending;
      months++;
      if (currentBalance <= 0) break;
    }

    setYears(Math.floor(months / 12));
  };

  useEffect(() => {
    calculateLongevity();
  }, [amount, spending, growth]);

  // Intelligence Scale: Step logic based on amount magnitude
  const getStep = (val) => {
    if (val < 100000) return 5000;
    if (val < 1000000) return 25000;
    if (val < 5000000) return 100000;
    return 250000;
  };

  // "Demo God" Trigger: Instantly loads a "Perfect Success" scenario
  const activateDemoMode = () => {
    setAmount(2500000);
    setSpending(6500);
    setGrowth(7.2);
    setIsDemoActive(true);
    setTimeout(() => setIsDemoActive(false), 2000);
  };

  return (
    <div className={`calc-container ${isDemoActive ? 'demo-flash' : ''}`}>
      <div className="calc-header">
        <h3>Inheritance Longevity Projector</h3>
        <p>High-fidelity diagnostic for analyzing wealth preservation trajectories across various market assumptions.</p>
      </div>

      <div className="calc-grid">
        <div className="calc-inputs">
          <div className="input-group">
            <div className="input-label-row" onDoubleClick={activateDemoMode} style={{ cursor: 'pointer' }}>
              <DollarSign size={14} color="var(--gold)" />
              <label>Inheritance Principal ($)</label>
              {isDemoActive && <Sparkles size={14} color="var(--gold)" className="animate-pulse" />}
            </div>
            <input 
              type="number" 
              value={amount} 
              onChange={(e) => setAmount(Number(e.target.value))} 
              className="wealth-input"
            />
            <input 
              type="range" 
              min="50000" 
              max="10000000" 
              step={getStep(amount)} 
              value={amount} 
              onChange={(e) => setAmount(Number(e.target.value))} 
            />
            <div className="scale-markers">
              <span>$50k</span>
              <span>$5M</span>
              <span>$10M+</span>
            </div>
          </div>

          <div className="input-group">
            <div className="input-label-row">
              <Wallet size={14} color="var(--gold)" />
              <label>Monthly Allocation ($)</label>
            </div>
            <input 
              type="number" 
              value={spending} 
              onChange={(e) => setSpending(Number(e.target.value))} 
              className="wealth-input"
            />
            <input 
              type="range" 
              min="1000" 
              max="100000" 
              step="500" 
              value={spending} 
              onChange={(e) => setSpending(Number(e.target.value))} 
            />
          </div>

          <div className="input-group">
            <div className="input-label-row">
              <TrendingUp size={14} color="var(--gold)" />
              <label>Annual Market Yield (%)</label>
            </div>
            <input 
              type="number" 
              value={growth} 
              onChange={(e) => setGrowth(Number(e.target.value))} 
              className="wealth-input"
            />
            <input 
              type="range" 
              min="0" 
              max="15" 
              step="0.1" 
              value={growth} 
              onChange={(e) => setGrowth(Number(e.target.value))} 
            />
          </div>
        </div>

        <div className="calc-result">
          <div className="result-circle">
            <div className="result-value">{years >= 100 ? '100+' : years}</div>
            <div className="result-label">Projected Years</div>
          </div>
          <div className="result-note">
            {years < 15 ? (
              <span className="warning">Principal depletion risk within critical window.</span>
            ) : years < 40 ? (
              <span className="info">Sustainable trajectory for single-generation preservation.</span>
            ) : (
              <span className="success">High-fidelity generational wealth preservation.</span>
            )}
          </div>
          <button className="calc-cta" onClick={onAction}>
            Initiate Fiduciary Strategy <ArrowRight size={16} style={{ marginLeft: '10px' }} />
          </button>
        </div>
      </div>
      
      <div className="calc-disclaimer">
        *System diagnostic for informational purposes only. High-net-worth scenarios require specialized tax-mitigation logic. Fiduciary alignment recommended.
      </div>
    </div>
  );
};

export default InheritanceCalculator;
