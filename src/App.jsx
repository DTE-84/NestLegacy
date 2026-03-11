import { useEffect, useState } from 'react';
import './App.css';
import './sidebar.css';
import NovaAssistant from './components/NovaAssistant';
import InheritanceCalculator from './components/InheritanceCalculator';
import LeadCaptureModal from './components/LeadCaptureModal';
import { 
  ArrowRight, 
  Target, 
  Brain, 
  ShieldAlert, 
  Zap, 
  Layout, 
  Mail, 
  Calendar, 
  LineChart,
  UserCheck,
  FileText,
  MousePointer2,
  Cpu,
  Phone,
  Linkedin,
  Twitter,
  Instagram,
  Clock as ClockIcon,
  HelpCircle,
  ChevronDown
} from 'lucide-react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('general');
  const [activeSection, setActiveSection] = useState('hero');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [openFaq, setOpenFaq] = useState(null);

  const openModal = (source = 'general') => {
    setModalSource(source);
    setIsModalOpen(true);
  };

  const triggerAssistant = () => {
    window.dispatchEvent(new CustomEvent('open-nova-assistant'));
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    const observerOptions = { threshold: 0.4, rootMargin: "0px" };
    const fadeInObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    document.querySelectorAll(".fade-in, section").forEach((el) => {
      fadeInObserver.observe(el);
    });

    return () => {
      clearInterval(timer);
      fadeInObserver.disconnect();
    };
  }, []);

  const navItems = [
    { id: 'hero', label: 'Inception' },
    { id: 'approach', label: 'Methodology' },
    { id: 'nova-focus', label: 'Consultant' },
    { id: 'solution', label: 'Architecture' },
    { id: 'faq', label: 'Knowledge' },
    { id: 'about-detail', label: 'Principal' },
    { id: 'alignment', label: 'Strategy' },
  ];

  const faqs = [
    {
      q: "What is the scale of the Great Wealth Transfer?",
      a: "An estimated $84 Trillion is expected to pass from Baby Boomers and the Silent Generation to Millennials and Gen Z by 2045. This represents the largest intergenerational wealth event in history."
    },
    {
      q: "Why is specialized inheritance planning necessary?",
      a: "Approximately 45% of inheritors report feeling financially unprepared. Without professional guidance, over 70% of families lose their wealth by the second generation due to tax exposure and spending mismanagement."
    },
    {
      q: "How does the AI Consultant handle my data?",
      a: "Our system prioritizes data integrity. All diagnostic inputs are processed client-side for immediate feedback, and formal transmission occurs only via encrypted fiduiciary uplinks."
    },
    {
      q: "What is the typical timeframe for professional alignment?",
      a: "Once you initialize transmission through our gateway, a senior fiduciary consultant will review your AI diagnostic report and reach out within 24 business hours to establish a long-term strategy."
    }
  ];

  return (
    <div className="app-root">
      <div className="grain"></div>

      {/* High-Fidelity Header Navigation */}
      <header className="nexus-header">
        <div className="header-container">
          <div className="header-left">
            <div className="brand-lockup">
              <div className="brand-logo">N</div>
              <div className="brand-text">
                <span className="brand-name">NestLegacy</span>
                <span className="brand-tag">Fiduciary Acquisition Shell</span>
              </div>
            </div>
          </div>
          
          <div className="header-right">
            <div className="live-telemetry">
              <div className="telemetry-item">
                <Calendar size={12} color="var(--gold)" />
                <span>{currentTime.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="telemetry-item">
                <ClockIcon size={12} color="var(--gold)" />
                <span>{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span>
              </div>
            </div>
            <div className="header-actions">
              <a href="tel:+12176539445" className="action-icon-btn" title="Call Direct">
                <Phone size={16} />
              </a>
              <button className="action-icon-btn" onClick={() => openModal('header-mail')} title="Secure Uplink">
                <Mail size={16} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Kinetic Sidebar Navigation */}
      <nav className="sidebar-nav">
        <div className="nav-header-label">NAVIGATION</div>
        {navItems.map((item) => (
          <a 
            key={item.id}
            href={`#${item.id}`} 
            className={`nav-dot ${activeSection === item.id ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            <span className="nav-label">{item.label}</span>
            <div className="dot-icon"></div>
          </a>
        ))}
      </nav>

      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="container">
          <div className="hero-content">
            <div className="label">AI-Powered Client Acquisition</div>
            <h1>The AI → CFP<br />Conversion System</h1>
            <p className="subtitle">Stop Competing for Leads.<br />Start Converting Them Automatically.</p>
            <p className="hero-tagline">"Initiate the conversation via intelligent analysis. Scale your wealth with a fiduciary expert."</p>
            <button className="cta-button" onClick={() => openModal('hero')}>
              Initialize System Architecture <ArrowRight style={{ marginLeft: '10px', display: 'inline' }} size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Section 01: Methodology */}
      <section style={{ background: "rgba(10, 22, 40, 0.3)" }} id="approach">
        <div className="container">
          <div className="section-header fade-in">
            <div className="section-number">01 — THE APPROACH</div>
            <h2>Advanced Methodology</h2>
            <p className="section-description">Prospective clients prioritize clarity over solicitation. We provide high-fidelity data integrity to facilitate informed decision-making.</p>
          </div>
          <div style={{ maxWidth: "1000px", margin: "60px auto" }}>
            <div className="problem-card fade-in" style={{ background: "linear-gradient(135deg, rgba(44, 95, 77, 0.2) 0%, rgba(27, 47, 74, 0.4) 100%)", borderColor: "var(--emerald)" }}>
              <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: "2.2rem", color: "var(--light-gold)", marginBottom: "24px", lineHeight: "1.3" }}>
                "Start the analysis with AI.<br />Finalize the strategy with a CFP."
              </h3>
              <p style={{ color: "var(--steel)", fontSize: "1.15rem", lineHeight: "1.8" }}>
                Our Nexus interface removes initial friction. By utilizing an automated assistant to model financial scenarios, we provide prospects with objective data before professional engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02: AI Consultant Focus */}
      <section id="nova-focus" style={{ background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.05) 0%, transparent 70%)' }}>
        <div className="container text-center">
          <div className="section-header fade-in">
            <div className="section-number">CORE INTELLIGENCE</div>
            <h2>Advanced Financial <br/><span className="text-gradient-gold">AI Consultant</span></h2>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto' }} className="fade-in">
            <div className="problem-card" style={{ background: 'rgba(10, 22, 40, 0.6)', border: '1px solid var(--gold)', padding: '60px' }}>
              <div style={{ marginBottom: '40px', display: 'flex', justifyContent: 'center' }}>
                <div className="nova-avatar-large">N</div>
              </div>
              <h3 style={{ color: 'white', fontSize: '1.8rem', marginBottom: '20px' }}>Nova Intelligence</h3>
              <p style={{ color: 'var(--steel)', fontSize: '1.1rem', marginBottom: '40px', lineHeight: '1.8' }}>Our proprietary AI Consultant utilizes behavioral financial modeling to provide high-fidelity insights into wealth longevity, tax exposure, and asset preservation.</p>
              <button className="cta-button" style={{ width: '100%' }} onClick={triggerAssistant}>
                Initiate AI Consultation <Cpu style={{ marginLeft: '10px', display: 'inline' }} size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 03: Architecture */}
      <section style={{ background: "rgba(10, 22, 40, 0.5)" }} id="solution">
        <div className="container">
          <div className="section-header fade-in">
            <div className="section-number">03 — THE SOLUTION</div>
            <h2>Enterprise Infrastructure</h2>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-phase">Phase 1</div>
                <h3>Lead Intelligence Engine</h3>
                <p>A sophisticated AI interface that qualifies prospects through behavioral modeling. It calculates wealth longevity and facilitates professional handoff.</p>
                <InheritanceCalculator onAction={() => openModal('calculator')} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section FAQ: Knowledge Base */}
      <section id="faq" style={{ background: 'rgba(10, 22, 40, 0.2)' }}>
        <div className="container">
          <div className="section-header fade-in">
            <div className="section-number">MARKET KNOWLEDGE</div>
            <h2>Fiduciary FAQ</h2>
            <p className="section-description">Essential metrics and strategic insights regarding the $84 Trillion generational wealth shift.</p>
          </div>
          
          <div className="faq-grid fade-in" style={{ maxWidth: '900px', margin: '0 auto' }}>
            {faqs.map((item, i) => (
              <div 
                key={i} 
                className={`faq-item ${openFaq === i ? 'open' : ''}`}
                onClick={() => toggleFaq(i)}
              >
                <div className="faq-question">
                  <span>{item.q}</span>
                  <ChevronDown size={18} className="faq-icon" />
                </div>
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 05: Principal Detail */}
      <section id="about-detail" style={{ background: 'rgba(5, 5, 5, 0.4)' }}>
        <div className="container">
          <div className="section-header fade-in">
            <div className="section-number">PRINCIPAL LEADERSHIP</div>
            <h2>Fiduciary Intelligence</h2>
          </div>
          <div className="about-grid fade-in">
            <div className="about-visual">
              <div className="about-image-placeholder">
                <UserCheck size={100} color="var(--gold)" opacity={0.2} />
              </div>
            </div>
            <div className="about-intel">
              <h3 className="about-name">Strategic Partnership</h3>
              <p className="about-bio">
                Specializing in high-fidelity wealth preservation and behavioral acquisition systems. With a dual foundation in Strategic Communication and Financial Engineering, we bridge the trust gap between complex wealth events and expert fiduciary guidance.
                <br/><br/>
                Our mission is to architect the digital infrastructure for the $84 Trillion wealth transfer, ensuring data integrity and behavioral alignment at every touchpoint.
              </p>
              <div className="about-metrics">
                <div className="about-metric">
                  <span className="metric-val">100%</span>
                  <span className="metric-tag">Fiduciary Compliance</span>
                </div>
                <div className="about-metric">
                  <span className="metric-val">High</span>
                  <span className="metric-tag">System Fidelity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 06: Final Strategy */}
      <section id="alignment">
        <div className="container text-center">
          <div className="section-header fade-in">
            <div className="section-number">06 — NEXT STEPS</div>
            <h2>Initialize Development</h2>
          </div>
          <div style={{ maxWidth: "600px", margin: "60px auto" }}>
            <div className="problem-card fade-in" style={{ textAlign: "left", marginBottom: "24px" }}>
              <h3 style={{ color: "var(--gold)", fontSize: "1.3rem" }}>Step 1: Strategic Alignment (30 min)</h3>
              <p>We review your current positioning, audit content assets, and identify your primary inheritance client profile.</p>
            </div>
            <button className="cta-button" onClick={() => openModal('alignment')}>
              Initialize Consultation <ArrowRight style={{ marginLeft: '10px', display: 'inline' }} size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Professional Footer */}
      <footer className="professional-footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="brand-lockup">
                <div className="brand-logo">N</div>
                <span className="brand-name">NestLegacy</span>
              </div>
              <p className="footer-tagline">Engineering the digital trust layer for generational wealth transfer.</p>
            </div>
            <div className="footer-links">
              <div className="link-group">
                <h4>Ecosystem</h4>
                <a href="#approach">Methodology</a>
                <a href="#nova-focus">AI Consultant</a>
                <a href="#solution">Architecture</a>
              </div>
              <div className="link-group">
                <h4>Professional</h4>
                <a href="#about-detail">Principal</a>
                <button onClick={() => openModal('footer-contact')}>Secure Uplink</button>
                <a href="https://dte-solutions.icu" target="_blank">Nexus Hub</a>
              </div>
            </div>
            <div className="footer-social">
              <h4>Digital Uplink</h4>
              <div className="social-grid">
                <a href="https://linkedin.com/in/dte84" target="_blank" className="social-link"><Linkedin size={18} /></a>
                <a href="#" className="social-link"><Twitter size={18} /></a>
                <a href="#" className="social-link"><Instagram size={18} /></a>
                <a href="mailto:dte.solutions.llc@gmail.com" className="social-link"><Mail size={18} /></a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="copyright">© 2026 DTE Solutions LLC. All Rights Reserved.</div>
            <div className="technical-meta">System Status: High-Fidelity Active // Behavioral Node 01</div>
          </div>
        </div>
      </footer>

      <NovaAssistant onLeadCapture={() => openModal('nova')} />
      <LeadCaptureModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        source={modalSource}
      />
    </div>
  );
}

export default App;
