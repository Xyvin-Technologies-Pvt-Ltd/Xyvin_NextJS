"use client";
import React from "react";
import { 
  Rocket, 
  Users, 
  Briefcase, 
  Clock, 
  Building2, 
  Lightbulb, 
  Target, 
  Zap,
  ArrowRight,
  CheckCircle,
  Award
} from "lucide-react";
import Link from "next/link";


const CompanyOverview = () => {
  const stats = [
    { number: "125+", label: "Projects Delivered", icon: Rocket },
    { number: "75+", label: "Happy Clients", icon: Users },
    { number: "4+", label: "Years Experience", icon: Briefcase },
    { number: "24/7", label: "Support", icon: Clock },
  ];

  const features = [
    {
      icon: Lightbulb,
      title: "Innovation Excellence",
      description: "Cutting-edge technologies and forward-thinking solutions that drive digital transformation."
    },
    {
      icon: Target,
      title: "Client Success Focus",
      description: "Your success is our mission. We deliver solutions that exceed expectations and drive growth."
    },
    {
      icon: Zap,
      title: "Agile Methodology",
      description: "Efficient, iterative development ensuring rapid delivery without compromising quality standards."
    },
  ];

  const achievements = [
    "ISO 9001:2015 Certified",
    "99.9% Client Satisfaction",
    "Zero Security Breaches",
    "Award-Winning Solutions"
  ];

  return (
    <div className="company-overview">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="badge">
              <Building2 size={16} />
              <span>About Xyvin Tech</span>
            </div>
            
            <h1 className="hero-title">
              Building Tomorrow's
              <span className="gradient-text"> Digital Solutions</span>
            </h1>
            
            <p className="hero-description">
              Leading technology partner delivering innovative software solutions, AI-powered applications, 
              and digital transformation services that drive business growth and competitive advantage.
            </p>
            
            <div className="hero-actions">
              <button className="btn-primary">
                <Link href="/Xyvin/service">
                Explore Our Solutions
                </Link>
                <ArrowRight size={18} />
              </button>
              <button className="btn-secondary">
                <Link href="/Xyvin/contact">
                Schedule Consultation
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="stat-card">
                  <div className="stat-icon">
                    <IconComponent size={28} />
                  </div>
                  <div className="stat-content">
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            {/* Left Column - Features */}
            <div className="features-column">
              <div className="section-header">
                <h2 className="section-title">Why Choose Xyvin Tech</h2>
                <p className="section-subtitle">
                  We combine technical expertise with business acumen to deliver 
                  solutions that create lasting value for your organization.
                </p>
              </div>

              <div className="features-list">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="feature-card">
                      <div className="feature-header">
                        <div className="feature-icon">
                          <IconComponent size={24} />
                        </div>
                        <h3 className="feature-title">{feature.title}</h3>
                      </div>
                      <p className="feature-description">{feature.description}</p>
                    </div>
                  );
                })}
              </div>

              {/* <div className="achievements-section">
                <h3 className="achievements-title">Our Achievements</h3>
                <div className="achievements-list">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="achievement-item">
                      <CheckCircle size={16} />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>

            {/* Right Column - Visual Elements */}
            <div className="visual-column">
              <div className="visual-container">
                <div className="tech-card">
                  <div className="card-header">
                    <div className="card-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="card-badge">
                      <Award size={14} />
                      <span>Excellence</span>
                    </div>
                  </div>
                  
                  <div className="card-content">
                    <h4>Technical Expertise</h4>
                    
                    <div className="skill-items">
                      <div className="skill-item">
                        <div className="skill-header">
                          <span>Frontend Development</span>
                          <span className="skill-percent">95%</span>
                        </div>
                        <div className="skill-bar">
                          <div className="skill-progress" style={{ width: "95%" }}></div>
                        </div>
                      </div>
                      
                      <div className="skill-item">
                        <div className="skill-header">
                          <span>Backend Architecture</span>
                          <span className="skill-percent">92%</span>
                        </div>
                        <div className="skill-bar">
                          <div className="skill-progress" style={{ width: "92%" }}></div>
                        </div>
                      </div>
                      
                      <div className="skill-item">
                        <div className="skill-header">
                          <span>Cloud & DevOps</span>
                          <span className="skill-percent">88%</span>
                        </div>
                        <div className="skill-bar">
                          <div className="skill-progress" style={{ width: "88%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="quality-badge">
                  <div className="badge-icon">
                    <CheckCircle size={20} />
                  </div>
                  <div className="badge-content">
                    <div className="badge-title">Quality Assured</div>
                    <div className="badge-subtitle">Enterprise Grade Solutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .company-overview {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Hero Section */
        .hero-section {
          background: linear-gradient(135deg, #fafbfc 0%, #f1f5f9 100%);
          padding: 100px 0 80px;
          position: relative;
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%);
          border-radius: 50%;
        }

        .hero-content {
          max-width: 800px;
          text-align: center;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.2);
          padding: 10px 20px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 500;
          color: #45b7d1;
          margin-bottom: 32px;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          line-height: 1.1;
          color: #0f172a;
          margin-bottom: 24px;
          letter-spacing: -0.02em;
        }

        .gradient-text {
          background: linear-gradient(135deg, #45b7d1 0%, #1d4ed8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          font-size: 1.2rem;
          line-height: 1.6;
          color: #64748b;
          margin-bottom: 40px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #45b7d1 0%, #1d4ed8 100%);
          color: white;
          padding: 16px 32px;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(59, 130, 246, 0.25);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(59, 130, 246, 0.35);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: white;
          color: #45b7d1;
          border: 2px solid #e2e8f0;
          padding: 14px 30px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          border-color: #45b7d1;
          background: #f8fafc;
          transform: translateY(-2px);
        }

        /* Stats Section */
        .stats-section {
          padding: 60px 0;
          background: white;
          border-top: 1px solid #e2e8f0;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 32px;
        }

        .stat-card {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 24px;
          background: #fafbfc;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          background: white;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          transform: translateY(-2px);
        }

        .stat-icon {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #45b7d1 0%, #1d4ed8 100%);
          border-radius: 16px;
          color: white;
          flex-shrink: 0;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: #0f172a;
          line-height: 1;
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 0.95rem;
          color: #64748b;
          font-weight: 500;
        }

        /* Content Section */
        .content-section {
          padding: 100px 0;
          background: white;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }

        .section-header {
          margin-bottom: 48px;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 16px;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: #64748b;
          line-height: 1.6;
        }

        .features-list {
          display: grid;
          gap: 24px;
          margin-bottom: 48px;
        }

        .feature-card {
          padding: 32px;
          background: #fafbfc;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          background: white;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          transform: translateY(-2px);
        }

        .feature-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }

        .feature-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #45b7d1 0%, #1d4ed8 100%);
          border-radius: 12px;
          color: white;
        }

        .feature-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #0f172a;
          margin: 0;
        }

        .feature-description {
          font-size: 1rem;
          color: #64748b;
          line-height: 1.6;
          margin: 0;
        }

        .achievements-section {
          padding: 32px;
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          border-radius: 16px;
          border: 1px solid #e2e8f0;
        }

        .achievements-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 20px;
        }

        .achievements-list {
          display: grid;
          gap: 12px;
        }

        .achievement-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #45b7d1;
          font-weight: 500;
        }

        /* Visual Column */
        .visual-container {
          position: relative;
        }

        .tech-card {
          background: white;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          margin-bottom: 32px;
        }

        .card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 24px;
          border-bottom: 1px solid #e2e8f0;
          background: #fafbfc;
        }

        .card-dots {
          display: flex;
          gap: 8px;
        }

        .card-dots span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #ff5f57;
        }

        .card-dots span:nth-child(2) {
          background: #ffbd2e;
        }

        .card-dots span:nth-child(3) {
          background: #28ca42;
        }

        .card-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(59, 130, 246, 0.1);
          color: #45b7d1;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
        }

        .card-content {
          padding: 32px;
        }

        .card-content h4 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 24px;
        }

        .skill-items {
          display: grid;
          gap: 20px;
        }

        .skill-item {
          display: grid;
          gap: 8px;
        }

        .skill-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .skill-header span:first-child {
          font-weight: 500;
          color: #0f172a;
        }

        .skill-percent {
          font-size: 0.9rem;
          font-weight: 600;
          color: #45b7d1;
        }

        .skill-bar {
          height: 8px;
          background: #e2e8f0;
          border-radius: 4px;
          overflow: hidden;
        }

        .skill-progress {
          height: 100%;
          background: linear-gradient(90deg, #45b7d1, #1d4ed8);
          border-radius: 4px;
          transition: width 1s ease;
        }

        .quality-badge {
          display: flex;
          align-items: center;
          gap: 16px;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          padding: 20px 24px;
          border-radius: 16px;
          box-shadow: 0 8px 30px rgba(16, 185, 129, 0.3);
        }

        .badge-icon {
          flex-shrink: 0;
        }

        .badge-title {
          font-weight: 600;
          font-size: 1.1rem;
        }

        .badge-subtitle {
          font-size: 0.9rem;
          opacity: 0.9;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-section {
            padding: 80px 0 60px;
          }

          .content-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .stats-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .stat-card {
            padding: 20px;
          }

          .hero-actions {
            flex-direction: column;
            align-items: center;
          }

          .btn-primary,
          .btn-secondary {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }

          .section-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default CompanyOverview;