"use client";
import React, { useState } from "react";
import Link from "next/link";
import { 
  Rocket, 
  Globe, 
  Smartphone, 
  Settings, 
  Zap, 
  Brain,
  Briefcase 
} from "lucide-react";

const ServicesGrid = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      icon: Rocket,
      title: "Custom Software Solutions",
      shortDesc: "AI-powered custom software that solves real business problems",
      description:
        "At Xyvin, we build custom software solutions that solve real business problems. Whether you need a tool to manage operations, automate tasks, or improve user experience, our solutions are crafted to fit your goals. With smart technology and AI support, we help you work faster, smarter, and more efficiently.",
      color: "#6366F1",
    },
    {
      id: 2,
      icon: Globe,
      title: "Web Development",
      shortDesc: "Intelligent websites powered by modern web standards",
      description:
        "Your website is your digital face — and we make it intelligent. Our web development services focus on performance, design, and user engagement. At Xyvin, we create responsive, secure, and scalable websites that reflect your brand and are powered to grow with AI-backed insights and modern web standards.",
      color: "#10B981",
    },
    {
      id: 3,
      icon: Settings,
      title: "ERP Development",
      shortDesc: "Smart ERP systems with AI-powered automation",
      description:
        "Xyvin delivers efficient ERP systems to simplify and streamline business processes. From managing inventory to handling finances and HR, our ERP solutions bring everything under one smart dashboard. With AI-powered automation and analytics, we help you save time and make better business decisions.",
      color: "#F59E0B",
    },
    {
      id: 4,
      icon: Zap,
      title: "API Integration Services",
      shortDesc: "Seamless connections with AI-compatible integrations",
      description:
        "Connect your tools, apps, and systems effortlessly. Our API integration services enable smooth data flow and automation across platforms. Whether it's third-party apps or internal systems, Xyvin ensures secure, fast, and AI-compatible integrations that help you run smarter operations with less manual effort.",
      color: "#8B5CF6",
    },
    {
      id: 5,
      icon: Brain,
      title: "AI Agent Service",
      shortDesc: "Smart virtual agents that work 24/7 for your business",
      description:
        "Boost productivity and customer engagement with Xyvin's AI Agent Services. We build smart virtual agents and chatbots that can interact, assist, and learn — 24/7. From handling customer support to automating internal tasks, our AI agents adapt to your needs and deliver faster, more accurate service.",
      color: "#EF4444",
    },
  ];

  return (
    <section className="services-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Briefcase className="badge-icon" size={16} />
            Our Services
          </div>
          <h2 className="section-title">
            Smart Digital Services Built with
            <span className="highlight"> AI Intelligence</span>
          </h2>
          <p className="section-description">
            At Xyvin, we combine cutting-edge technology with artificial intelligence to deliver 
            smart solutions that transform how businesses operate, grow, and succeed in the digital age.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`service-card ${
                  hoveredService === service.id ? "hovered" : ""
                }`}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="service-icon" style={{ color: service.color }}>
                  <IconComponent size={48} strokeWidth={1.5} />
                </div>

                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-short-desc">{service.shortDesc}</p>

                  <div className="service-expanded">
                    <p className="service-description">{service.description}</p>
                  </div>

                  <div className="service-footer">
                    <Link href="/Xyvin/service" className="service-link">
                      Learn More
                      <span className="link-arrow">→</span>
                    </Link>
                    <div className="service-number">0{service.id}</div>
                  </div>
                </div>

                <div
                  className="service-bg"
                  style={{
                    background: `linear-gradient(135deg, ${service.color}15, ${service.color}05)`,
                  }}
                ></div>
              </div>
            );
          })}
        </div>

        <div className="services-cta">
          <div className="cta-content">
            <h3>Need a custom solution?</h3>
            <p>
              Let's discuss your project requirements and create something
              amazing together.
            </p>
          </div>
          <div className="cta-button">

          <Link href="/Xyvin/contact" >
            Start Your Project
            <Rocket className="button-icon" size={20} />
          </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .services-section {
          padding: 140px 0;
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          position: relative;
          overflow: hidden;
        }

        .services-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.05) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.05) 0%, transparent 50%);
          pointer-events: none;
        }

        .section-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 80px;
        }

        .section-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(16, 185, 129, 0.1));
          border: 1px solid rgba(99, 102, 241, 0.2);
          padding: 12px 24px;
          border-radius: 60px;
          font-size: 15px;
          font-weight: 600;
          color: #6366f1;
          margin-bottom: 32px;
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 20px rgba(99, 102, 241, 0.1);
        }

        .badge-icon {
          color: #6366f1;
        }

        .section-title {
          font-size: clamp(2.8rem, 5.5vw, 4rem);
          font-weight: 800;
          line-height: 1.1;
          color: #0f172a;
          margin-bottom: 28px;
          letter-spacing: -0.02em;
        }

        .highlight {
          color: #6366f1;
          position: relative;
          background: linear-gradient(135deg, #45b7d1 0%, #1d4ed8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .highlight::after {
          content: "";
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(135deg, #45b7d1 0%, #1d4ed8 100%);
          border-radius: 3px;
          opacity: 0.3;
        }

        .section-description {
          font-size: 1.2rem;
          line-height: 1.8;
          color: #64748b;
          font-weight: 500;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 32px;
          margin-bottom: 80px;
        }

        .service-card {
          position: relative;
          background: white;
          border-radius: 24px;
          padding: 48px 36px;
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.06);
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          overflow: hidden;
          border: 1px solid #f1f5f9;
          animation: slideUp 0.8s ease-out forwards;
          opacity: 0;
          transform: translateY(40px);
          backdrop-filter: blur(10px);
        }

        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .service-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
          border-color: transparent;
        }

        .service-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0;
          transition: opacity 0.4s ease;
          border-radius: 24px;
          background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
        }

        .service-card:hover .service-bg {
          opacity: 1;
        }

        .service-icon {
          margin-bottom: 28px;
          transition: all 0.4s ease;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 16px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          width: fit-content;
        }

        .service-card:hover .service-icon {
          transform: scale(1.1) rotate(-2deg);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
        }

        .service-content {
          position: relative;
          z-index: 2;
        }

        .service-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 16px;
          line-height: 1.2;
        }

        .service-short-desc {
          font-size: 1.1rem;
          color: #64748b;
          margin-bottom: 24px;
          line-height: 1.6;
          font-weight: 500;
        }

        .service-expanded {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s ease, opacity 0.4s ease;
          opacity: 0;
        }

        .service-card:hover .service-expanded {
          max-height: 180px;
          opacity: 1;
        }

        .service-description {
          font-size: 1rem;
          color: #475569;
          line-height: 1.7;
          margin-bottom: 24px;
        }

        .service-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
          padding-top: 20px;
        }

        .service-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #45b7d1;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .service-link:hover {
          color: #369fb8;
          transform: translateX(4px);
        }

        .link-arrow {
          transition: transform 0.3s ease;
        }

        .service-link:hover .link-arrow {
          transform: translateX(4px);
        }

        .service-number {
          font-size: 2rem;
          font-weight: 700;
          color: #f0f0f0;
          transition: color 0.3s ease;
        }

        .service-card:hover .service-number {
          color: #e0e0e0;
        }

        .services-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: linear-gradient(135deg, #45b7d1 0%, #1d4ed8 100%);;
          padding: 40px 50px;
          border-radius: 20px;
          color: white;
          flex-wrap: wrap;
          gap: 20px;
        }

        .cta-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .cta-content p {
          font-size: 1rem;
          opacity: 0.9;
          margin: 0;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          flex-direction: column;
          gap: 1px;
          background: white;
          color: #45b7d1;
          padding: 14px 28px;
          border: 2px solid #45b7d1;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          white-space: wrap;
          flex-shrink: 0;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
          color: #45b7d1;
        }

        .button-icon {
          transition: transform 0.3s ease;
        }

        .cta-button:hover .button-icon {
          transform: translateX(4px);
        }

        @media (max-width: 991px) {
          .services-grid {
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 20px;
          }

          .service-card {
            padding: 30px 25px;
          }

          .services-cta {
            flex-direction: column;
            text-align: center;
            padding: 30px;
          }
        }

        @media (max-width: 767px) {
          .services-section {
            padding: 80px 0;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .section-header {
            margin-bottom: 60px;
          }

          .cta-button {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesGrid;