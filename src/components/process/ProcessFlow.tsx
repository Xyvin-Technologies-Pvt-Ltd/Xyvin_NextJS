"use client";
import React from "react";
import { Search, Palette, Zap, Rocket, Wrench, Settings } from "lucide-react";

const ProcessFlow = () => {
  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "We analyze your requirements, conduct market research, and create a comprehensive project roadmap.",
      icon: Search,
      color: "#1d4ed8",
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description:
        "Our design team creates wireframes, mockups, and interactive prototypes for your approval.",
      icon: Palette,
      color: "#1d4ed8",
    },
    {
      step: "03",
      title: "Development & Testing",
      description:
        "Agile development with regular testing, code reviews, and quality assurance throughout the process.",
      icon: Zap,
      color: "#1d4ed8",
    },
    {
      step: "04",
      title: "Deployment & Launch",
      description:
        "Seamless deployment to production with performance optimization and security configuration.",
      icon: Rocket,
      color: "#1d4ed8",
    },
    {
      step: "05",
      title: "Support & Maintenance",
      description:
        "Ongoing support, updates, and enhancements to ensure optimal performance and security.",
      icon: Wrench,
      color: "#1d4ed8",
    },
  ];

  return (
    <section className="process-flow-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Settings size={16} />
            Our Process
          </div>
          <h2 className="section-title">
            How We Bring
            <span className="highlight"> Your Ideas to Life</span>
          </h2>
          <p className="section-description">
            Our proven development methodology ensures successful project
            delivery with transparency and quality at every step.
          </p>
        </div>

        <div className="process-timeline">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={index}
                className="process-step"
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <div className="step-connector">
                  {index < processSteps.length - 1 && (
                    <div className="connector-line"></div>
                  )}
                </div>

                <div className="step-content">
                  <div
                    className="step-icon"
                    style={{ backgroundColor: step.color }}
                  >
                    <IconComponent size={32} color="white" />
                  </div>

                  <div className="step-info">
                    <div className="step-number">{step.step}</div>
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-description">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="process-cta">
          <div className="cta-card">
            <h3>Ready to get started?</h3>
            <p>
              Let's discuss your project and begin your digital transformation
              journey today.
            </p>
            <a href="/Xyvin/contact" className="cta-button">
              Start Your Project
              <span className="button-arrow">→</span>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .process-flow-section {
          padding: 120px 0;
          background: #ffffff;
          position: relative;
        }

        .section-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 80px;
        }

        .section-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(69, 183, 209, 0.1);
          border: 1px solid rgba(69, 183, 209, 0.3);
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 500;
          color: #1d4ed8;
          margin-bottom: 24px;
        }

        .section-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 700;
          line-height: 1.2;
          color: #1a1a1a;
          margin-bottom: 24px;
        }

        .highlight {
          color: #1d4ed8;
        }

        .section-description {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #666;
        }

        .process-timeline {
          position: relative;
          max-width: 900px;
          margin: 0 auto 80px;
        }

        .process-step {
          position: relative;
          margin-bottom: 60px;
          animation: slideInLeft 0.8s ease-out forwards;
          opacity: 0;
          transform: translateX(-50px);
        }

        .process-step:nth-child(even) {
          animation: slideInRight 0.8s ease-out forwards;
          transform: translateX(50px);
        }

        @keyframes slideInLeft {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .step-connector {
          position: absolute;
          left: 50%;
          top: 80px;
          transform: translateX(-50%);
          z-index: 1;
        }

        .connector-line {
          width: 2px;
          height: 100px;
          background: linear-gradient(to bottom, #e9ecef, #dee2e6);
          margin: 0 auto;
        }

        .step-content {
          display: flex;
          align-items: flex-start;
          gap: 30px;
          background: white;
          padding: 30px;
          border-radius: 20px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
          border: 1px solid #f0f0f0;
          transition: all 0.3s ease;
          position: relative;
          z-index: 2;
        }

        .step-content:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 50px rgba(0, 0, 0, 0.15);
        }

        .process-step:nth-child(even) .step-content {
          flex-direction: row-reverse;
        }

        .step-icon {
          width: 80px;
          height: 80px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .step-content:hover .step-icon {
          transform: scale(1.05);
        }

        .step-info {
          flex: 1;
        }

        .process-step:nth-child(even) .step-info {
          text-align: right;
        }

        .step-number {
          font-size: 0.9rem;
          font-weight: 600;
          color: #999;
          margin-bottom: 8px;
          letter-spacing: 1px;
        }

        .step-title {
          font-size: 1.4rem;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .step-description {
          font-size: 1rem;
          color: #666;
          line-height: 1.6;
          margin: 0;
        }

        .process-cta {
          text-align: center;
          margin-top: 60px;
        }

        .cta-card {
          background: linear-gradient(135deg, #45b7d1 0%, #1d4ed8 100%);
          padding: 50px 40px;
          border-radius: 20px;
          color: white;
          max-width: 600px;
          margin: 0 auto;
        }

        .cta-card h3 {
          font-size: 1.8rem;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .cta-card p {
          font-size: 1.1rem;
          margin-bottom: 30px;
          opacity: 0.9;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: white;
          color: #1d4ed8;
          padding: 14px 28px;
          border: 2px solid transparent;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
          color: #1d4ed8;
          border-color: white;
        }

        .button-arrow {
          transition: transform 0.3s ease;
        }

        .cta-button:hover .button-arrow {
          transform: translateX(4px);
        }

        @media (max-width: 991px) {
          .step-content {
            flex-direction: column !important;
            text-align: center !important;
            gap: 20px;
          }

          .step-info {
            text-align: center !important;
          }

          .connector-line {
            height: 80px;
          }

          .process-step {
            margin-bottom: 40px;
          }
        }

        @media (max-width: 767px) {
          .process-flow-section {
            padding: 80px 0;
          }

          .step-content {
            padding: 25px 20px;
          }

          .step-icon {
            width: 60px;
            height: 60px;
          }

          .cta-card {
            padding: 40px 30px;
          }

          .section-header {
            margin-bottom: 60px;
          }
        }
      `}</style>
    </section>
  );
};

export default ProcessFlow;