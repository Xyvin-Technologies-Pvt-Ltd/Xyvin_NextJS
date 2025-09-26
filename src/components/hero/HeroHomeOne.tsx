"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Bot, Zap, Rocket, MessageSquare, CheckCircle } from "lucide-react";

const HeroHomeOne = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const heroData = [
    {
      badge: { icon: Bot, text: "AI Engineering" },
      title: ["We Build", "Intelligent", "Systems"],
      description:
        "Engineering AI solutions that think, learn, and evolve with your business needs",
      stats: { projects: "150+", accuracy: "99.7%", clients: "50+" },
      cta: "Explore AI Solutions",
    },
    {
      badge: { icon: Zap, text: "Smart Automation" },
      title: ["Automate", "Everything", "Smartly"],
      description:
        "From simple workflows to complex decision-making, we create AI that works for you",
      stats: { efficiency: "300%", time: "80%", cost: "60%" },
      cta: "See Automation",
    },
    {
      badge: { icon: Rocket, text: "Future Ready" },
      title: ["Tomorrow's", "Technology", "Today"],
      description:
        "Advanced AI agents, neural networks, and machine learning at your fingertips",
      stats: { models: "15+", apis: "100+", uptime: "99.9%" },
      cta: "Start Journey",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % heroData.length);
        setIsTyping(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentData = heroData[currentSlide];
  const BadgeIcon = currentData.badge.icon;

  return (
    <div className="hero-ai-container">
      {/* Animated Background */}
      <div className="hero-bg-animated">
        <div className="neural-network">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="neural-node"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
        <div className="code-rain">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="code-line"
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              {`const ai = new Intelligence(${i});`}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="hero-content">
        <div className="hero-badge">
          <BadgeIcon size={16} className="badge-icon" />
          {currentData.badge.text}
        </div>

        <div className="hero-title-container">
          {currentData.title.map((word, index) => (
            <h1
              key={`${currentSlide}-${index}`}
              className={`hero-title-word ${
                isTyping ? "typing-in" : "typing-out"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {word}
            </h1>
          ))}
        </div>

        <p className="hero-description">{currentData.description}</p>

        {/* AI Stats Display */}
        <div className="ai-stats">
          {Object.entries(currentData.stats).map(([key, value], index) => (
            <div
              key={key}
              className="stat-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="stat-value">{value}</div>
              <div className="stat-label">{key}</div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hero-actions">
          <div className="hero-badge">
            <Link href="/Xyvin/portfolio" className="btn-primary-ai">
              <Rocket size={16} className="btn-icon" />
              {currentData.cta}
            </Link>
          </div>
          <div className="hero-badge">
            <Link href="/Xyvin/contact" className="btn-secondary-ai">
              <MessageSquare size={16} className="btn-icon" />
              Let's Talk AI
            </Link>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="slide-indicators">
          {heroData.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Terminal Window Effect */}
      <div className="ai-terminal ">
        <div className="terminal-header">
          <div className="terminal-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="terminal-title">AI_Agent_Terminal</div>
        </div>
        <div className="terminal-body">
          <div className="terminal-line">
            <span className="prompt">$</span>
            <span className="typing-text">initializing AI systems...</span>
          </div>
          <div className="terminal-line">
            <span className="prompt">$</span>
            <CheckCircle size={12} className="success-icon" />
            <span className="success">Neural networks loaded</span>
          </div>
          <div className="terminal-line">
            <span className="prompt">$</span>
            <CheckCircle size={12} className="success-icon" />
            <span className="success">Ready to transform your business</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-ai-container {
          position: relative;
          height: 100vh;
          background: linear-gradient(
            135deg,
            #0a0a0a 0%,
            #1a1a2e 50%,
            #16213e 100%
          );
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 80px;
          padding-top: 80px;
        }

        .hero-bg-animated {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .neural-network {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .neural-node {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #00f5ff;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }

        .code-rain {
          position: absolute;
          top: 0;
          right: 10%;
          width: 300px;
          height: 100%;
          opacity: 0.1;
        }

        .code-line {
          position: absolute;
          color: #00f5ff;
          font-family: "Courier New", monospace;
          font-size: 12px;
          animation: rain 3s infinite linear;
        }

        @keyframes rain {
          0% {
            transform: translateY(-100px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 800px;
          padding: 0 20px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(0, 245, 255, 0.1);
          border: 1px solid #00f5ff;
          border-radius: 50px;
          padding: 8px 20px;
          color: #00f5ff;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 30px;
          animation: glow 2s infinite alternate;
        }

        .badge-icon {
          color: #00f5ff;
        }

        @keyframes glow {
          from {
            box-shadow: 0 0 5px #00f5ff;
          }
          to {
            box-shadow: 0 0 20px #00f5ff, 0 0 30px #00f5ff;
          }
        }

        .hero-title-container {
          margin-bottom: 30px;
        }

        .hero-title-word {
          display: block;
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 900;
          color: #ffffff;
          line-height: 0.9;
          margin: 10px 0;
          text-shadow: 0 0 30px rgba(0, 245, 255, 0.5);
        }

        .typing-in {
          animation: typeIn 0.6s ease-out forwards;
        }

        .typing-out {
          animation: typeOut 0.3s ease-in forwards;
        }

        @keyframes typeIn {
          from {
            opacity: 0;
            transform: translateY(50px) rotateX(90deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0);
          }
        }

        @keyframes typeOut {
          from {
            opacity: 1;
            transform: translateY(0) rotateX(0);
          }
          to {
            opacity: 0;
            transform: translateY(-30px) rotateX(-90deg);
          }
        }

        .hero-description {
          font-size: 1.2rem;
          color: #a0a0a0;
          line-height: 1.6;
          margin-bottom: 40px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .ai-stats {
          display: flex;
          justify-content: center;
          gap: 40px;
          margin-bottom: 50px;
          flex-wrap: wrap;
        }

        .stat-item {
          text-align: center;
          animation: slideUp 0.6s ease-out forwards;
        }

        .stat-value {
          font-size: 2rem;
          font-weight: bold;
          color: #00f5ff;
          display: block;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #888;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-actions {
          display: flex;
          gap: 20px;
          justify-content: center;
          margin-bottom: 50px;
          flex-wrap: wrap;
        }

        .btn-primary-ai,
        .btn-secondary-ai {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 30px;
          border-radius: 50px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 1rem;
        }

        .btn-primary-ai {
          background: linear-gradient(45deg, #00f5ff, #0099cc);
          color: #000;
          border: none;
        }

        .btn-primary-ai:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 245, 255, 0.3);
        }

        .btn-secondary-ai {
          background: transparent;
          color: #00f5ff;
          border: 2px solid #00f5ff;
        }

        .btn-secondary-ai:hover {
          background: rgba(0, 245, 255, 0.1);
          transform: translateY(-2px);
        }

        .btn-icon {
          color: inherit;
        }

        .slide-indicators {
          display: flex;
          justify-content: center;
          gap: 10px;
        }

        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px solid #00f5ff;
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .indicator.active {
          background: #00f5ff;
          box-shadow: 0 0 10px #00f5ff;
        }

        .ai-terminal {
          position: absolute;
          bottom: 30px;
          left: 30px;
          width: 350px;
          background: rgba(0, 0, 0, 0.8);
          border-radius: 10px;
          overflow: hidden;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 245, 255, 0.3);
        }

        .terminal-header {
          background: rgba(0, 245, 255, 0.1);
          padding: 10px 15px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .terminal-dots {
          display: flex;
          gap: 5px;
        }

        .terminal-dots span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ff5f57;
        }

        .terminal-dots span:nth-child(2) {
          background: #ffbd2e;
        }

        .terminal-dots span:nth-child(3) {
          background: #28ca42;
        }

        .terminal-title {
          color: #00f5ff;
          font-size: 12px;
          font-family: monospace;
        }

        .terminal-body {
          padding: 15px;
          font-family: "Courier New", monospace;
          font-size: 12px;
        }

        .terminal-line {
          margin-bottom: 5px;
          color: #a0a0a0;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .prompt {
          color: #00f5ff;
          margin-right: 5px;
        }

        .success {
          color: #28ca42;
        }

        .success-icon {
          color: #28ca42;
          flex-shrink: 0;
        }

        .typing-text {
          animation: typing 2s infinite;
        }

        @keyframes typing {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }

        @media (max-width: 768px) {
          .ai-stats {
            gap: 20px;
          }

          .hero-actions {
            flex-direction: column;
            align-items: center;
          }

          .ai-terminal {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroHomeOne;
