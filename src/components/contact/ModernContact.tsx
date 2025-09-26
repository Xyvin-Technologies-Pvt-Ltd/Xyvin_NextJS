"use client";
import React, { useState } from "react";
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Mail, 
  Users, 
  CheckCircle, 
  Send, 
  Loader2,
  Eye,
  Settings,
  BookOpen,
  Sparkles
} from "lucide-react";

type CustomStyle = React.CSSProperties & {
  '--accent-color': string;
}

const ModernContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");

  const handleChange = (e : any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e : any) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Office",
      details: [
        "dewSpace Business Center",
        "Ernakulam North, Kochi",
        "Kerala, India - 682018",
      ],
      action: "Get Directions",
      link: "https://www.google.com/maps",
      color: "#45b7d1",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        "+91 813 891 6303",
        "Mon - Fri: 9AM - 6PM IST",
        "Response within 2 hours",
      ],
      action: "Call Now",
      link: "tel:+918138916303",
      color: "#4ecdc4",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: [
        "+91 813 891 6303",
        "Quick support available",
        "24/7 chat support",
      ],
      action: "Chat Now",
      link: "https://wa.me/918138916303",
      color: "#45b7d1",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "admin@xyvin.com",
        "Business inquiries",
        "Response within 24 hours",
      ],
      action: "Send Email",
      link: "mailto:admin@xyvin.com",
      color: "#4ecdc4",
    },
  ];

  const services = [
    "Custom Software Development",
    "Web Development",
    "Mobile App Development",
    "ERP Solutions",
    "API Integration",
    "AI & ML Services",
    "Cloud Solutions",
    "IT Consulting",
    "Other",
  ];

  const quickLinks = [
    {
      icon: Eye,
      title: "View Our Work",
      description: "Explore our portfolio",
      href: "/Xyvin/portfolio",
      color: "#45b7d1"
    },
    {
      icon: Settings,
      title: "Explore Services",
      description: "Discover what we offer",
      href: "/Xyvin/service",
      color: "#4ecdc4"
    },
    {
      icon: BookOpen,
      title: "Read Our Blog",
      description: "Latest insights & tips",
      href: "/Xyvin/blog",
      color: "#96c93d"
    },
    {
      icon: Users,
      title: "About Our Team",
      description: "Meet the experts",
      href: "/Xyvin/about",
      color: "#ff6b6b"
    }
  ];

  return (
    <section className="modern-contact">
      {/* Contact Hero */}
      <div className="contact-hero">
        <div className="hero-background">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <div className="hero-badge">
                <Users size={16} />
                Let's Connect
              </div>
              <h1 className="hero-title">
                Ready to Transform
                <span className="text-gradient"> Your Business?</span>
              </h1>
              <p className="hero-description">
                Get in touch with our team of experts to discuss your project
                requirements and discover how we can help you achieve your
                digital transformation goals.
              </p>
              <div className="hero-stats">
                <div className="stat">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div className="stat">
                  <div className="stat-number">24h</div>
                  <div className="stat-label">Response Time</div>
                </div>
                <div className="stat">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Cards */}
      <div className="contact-info-section">
        <div className="container">
          <div className="row">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="col-lg-3 col-md-6 mb-4">
                  <div className="contact-card">
                    <div className="card-icon-wrapper">
                      <div 
                        className="card-icon"
                        style={{ backgroundColor: info.color }}
                      >
                        <IconComponent size={24} color="white" />
                      </div>
                    </div>
                    <h3 className="card-title">{info.title}</h3>
                    <div className="card-details">
                      {info.details.map((detail, idx) => (
                        <p key={idx}>{detail}</p>
                      ))}
                    </div>
                    <a href={info.link} className="card-action">
                      {info.action} →
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="form-header text-center">
                <div className="section-badge">
                  <Sparkles size={16} />
                  Start Your Journey
                </div>
                <h2 className="section-title">Start Your Project</h2>
                <p className="section-description">
                  Fill out the form below and we'll get back to you within 24
                  hours with a detailed proposal for your project.
                </p>
              </div>

              <div className="contact-form-card">
                {submitStatus === "success" ? (
                  <div className="success-message">
                    <div className="success-icon">
                      <CheckCircle size={64} color="#4ecdc4" />
                    </div>
                    <h3>Thank You!</h3>
                    <p>
                      Your message has been sent successfully. We'll get back to
                      you within 24 hours.
                    </p>
                    <button
                      className="btn-primary"
                      onClick={() => setSubmitStatus("idle")}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="name">Full Name *</label>
                          <div className="input-wrapper">
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              placeholder="Your full name"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="email">Email Address *</label>
                          <div className="input-wrapper">
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              placeholder="your.email@company.com"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="phone">Phone Number</label>
                          <div className="input-wrapper">
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="+91 98765 43210"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="company">Company Name</label>
                          <div className="input-wrapper">
                            <input
                              type="text"
                              id="company"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              placeholder="Your company name"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="service">Service Interested In</label>
                      <div className="input-wrapper">
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Project Details *</label>
                      <div className="input-wrapper">
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                        />
                      </div>
                    </div>

                    <div className="form-actions">
                      <button
                        type="submit"
                        className="btn-primary"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 size={20} className="spinner" />
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send size={20} />
                            Send Message
                          </>
                        )}
                      </button>
                      <p className="form-note">
                        * Required fields. We respect your privacy and never
                        share your information.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Improved Quick Links Section */}
      <div className="quick-links-section">
        <div className="container">
          <div className="section-header">
            <h3 className="section-title">Need Something Specific?</h3>
            <p className="section-subtitle">Explore our other resources and services</p>
          </div>
          
          <div className="quick-links-grid">
            {quickLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a 
  key={index}
  href={link.href} 
  className="quick-link-card"
  style={{ '--accent-color': link.color } as CustomStyle}
>
                  <div className="card-icon-container">
                    <div className="card-icon" style={{backgroundColor: link.color}}>
                      <IconComponent size={24} />
                    </div>
                  </div>
                  <div className="card-content">
                    <h4 className="card-title">{link.title}</h4>
                    <p className="card-description">{link.description}</p>
                  </div>
                  <div className="card-arrow">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        .modern-contact {
          padding-top: 80px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .row {
          display: flex;
          flex-wrap: wrap;
          margin: 0 -15px;
        }

        .col-lg-3, .col-md-6, .col-lg-8, .col-lg-12, .col-md-6 {
          padding: 0 15px;
        }

        .col-lg-3 {
          flex: 0 0 25%;
          max-width: 25%;
        }

        .col-md-6 {
          flex: 0 0 50%;
          max-width: 50%;
        }

        .col-lg-8 {
          flex: 0 0 66.666667%;
          max-width: 66.666667%;
        }

        .col-lg-12 {
          flex: 0 0 100%;
          max-width: 100%;
        }

        .mx-auto {
          margin-left: auto;
          margin-right: auto;
        }

        .text-center {
          text-align: center;
        }

        .mb-4 {
          margin-bottom: 1.5rem;
        }

        .contact-hero {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          padding: 100px 0;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .floating-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(135deg, #45b7d1 0%, #1d4ed8 100%);
          opacity: 0.1;
          animation: float 6s ease-in-out infinite;
        }

        .shape-1 {
          width: 100px;
          height: 100px;
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 150px;
          height: 150px;
          top: 60%;
          right: 15%;
          animation-delay: 2s;
        }

        .shape-3 {
          width: 80px;
          height: 80px;
          bottom: 20%;
          left: 70%;
          animation-delay: 4s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(69, 183, 209, 0.1);
          border: 1px solid rgba(69, 183, 209, 0.3);
          border-radius: 50px;
          padding: 12px 24px;
          color: #45b7d1;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 32px;
          backdrop-filter: blur(10px);
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          color: #1a1a1a;
          line-height: 1.2;
          margin-bottom: 24px;
        }

        .text-gradient {
          background:linear-gradient(135deg, #45b7d1 0%, #1d4ed8 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-description {
          font-size: 1.2rem;
          color: #666;
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto 40px;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 60px;
          margin-top: 50px;
          flex-wrap: wrap;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          color: #45b7d1;
          line-height: 1;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #666;
          font-weight: 500;
          margin-top: 5px;
        }

        .contact-info-section {
          padding: 100px 0;
          background: white;
          margin-top: -50px;
          position: relative;
          z-index: 2;
        }

        .contact-card {
          background: white;
          border-radius: 24px;
          padding: 40px 30px;
          text-align: center;
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.08);
          border: 1px solid #f0f0f0;
          transition: all 0.4s ease;
          height: 100%;
          position: relative;
          overflow: hidden;
        }

        .contact-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background:linear-gradient(135deg, #45b7d1 0%, #1d4ed8 100%);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .contact-card:hover::before {
          transform: scaleX(1);
        }

        .contact-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
        }

        .card-icon-wrapper {
          margin-bottom: 24px;
        }

        .card-icon {
          width: 70px;
          height: 70px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          box-shadow: 0 8px 25px rgba(69, 183, 209, 0.2);
          transition: transform 0.3s ease;
        }

        .contact-card:hover .card-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 16px;
        }

        .card-details p {
          color: #666;
          margin-bottom: 6px;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .card-action {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #45b7d1;
          font-weight: 600;
          text-decoration: none;
          margin-top: 20px;
          padding: 8px 16px;
          border-radius: 20px;
          transition: all 0.3s ease;
        }

        .card-action:hover {
          background: rgba(69, 183, 209, 0.1);
          transform: translateX(5px);
        }

        .contact-form-section {
          padding: 100px 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
        }

        .section-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(78, 205, 196, 0.1);
          border: 1px solid rgba(78, 205, 196, 0.3);
          border-radius: 50px;
          padding: 8px 20px;
          color: #4ecdc4;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 24px;
        }

        .form-header {
          margin-bottom: 60px;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 16px;
        }

        .section-description {
          font-size: 1.1rem;
          color: #666;
          line-height: 1.6;
        }

        .section-subtitle {
          font-size: 1rem;
          color: #666;
          margin-top: 12px;
          margin-bottom: 0;
        }

        .contact-form-card {
          background: white;
          border-radius: 24px;
          padding: 60px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
          border: 1px solid #f0f0f0;
        }

        .contact-form .row {
          margin-bottom: 20px;
        }

        .form-group {
          margin-bottom: 28px;
        }

        .form-group label {
          display: block;
          font-weight: 600;
          color: #333;
          margin-bottom: 10px;
          font-size: 0.95rem;
        }

        .input-wrapper {
          position: relative;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 16px 20px;
          border: 2px solid #e9ecef;
          border-radius: 12px;
          font-size: 16px;
          transition: all 0.3s ease;
          font-family: inherit;
          background: #fafafa;
          box-sizing: border-box;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #45b7d1;
          background: white;
          box-shadow: 0 0 0 4px rgba(69, 183, 209, 0.1);
          transform: translateY(-1px);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 130px;
        }

        .form-actions {
          text-align: center;
          margin-top: 40px;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 16px 48px;
          background: linear-gradient(135deg, #45b7d1 0%, #1d4ed8 100%);
          color: white;
          border: none;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          box-shadow: 0 8px 25px rgba(69, 183, 209, 0.3);
        }

        .btn-primary:hover:not(:disabled) {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(69, 183, 209, 0.4);
        }

        .btn-primary:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .spinner {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .form-note {
          font-size: 0.9rem;
          color: #666;
          margin-top: 20px;
          margin-bottom: 0;
        }

        .success-message {
          text-align: center;
          padding: 60px 40px;
        }

        .success-icon {
          margin-bottom: 24px;
          animation: bounceIn 0.6s ease-out;
        }

        @keyframes bounceIn {
          0% { transform: scale(0); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }

        .success-message h3 {
          font-size: 2rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 16px;
        }

        .success-message p {
          font-size: 1.1rem;
          color: #666;
          margin-bottom: 30px;
        }

        /* Improved Quick Links Section */
        .quick-links-section {
          padding: 100px 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .quick-links-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .quick-link-card {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 28px 32px;
          background: white;
          border: 2px solid #f0f0f0;
          border-radius: 16px;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          position: relative;
          overflow: hidden;
        }

        .quick-link-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--accent-color);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .quick-link-card:hover::before {
          transform: scaleX(1);
        }

        .quick-link-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent-color);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
        }

        .quick-link-card:hover .card-icon {
          transform: scale(1.1);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .quick-link-card:hover .card-arrow {
          transform: translateX(4px);
          color: var(--accent-color);
        }

        .card-icon-container {
          flex-shrink: 0;
        }

        .quick-link-card .card-icon {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .card-content {
          flex: 1;
          min-width: 0;
        }

        .quick-link-card .card-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 6px 0;
          line-height: 1.3;
        }

        .card-description {
          font-size: 0.95rem;
          color: #666;
          margin: 0;
          line-height: 1.4;
        }

        .card-arrow {
          flex-shrink: 0;
          color: #ccc;
          transition: all 0.3s ease;
        }

        @media (max-width: 992px) {
          .col-lg-3 {
            flex: 0 0 50%;
            max-width: 50%;
          }

          .col-lg-8 {
            flex: 0 0 100%;
            max-width: 100%;
          }
        }

        @media (max-width: 767px) {
          .col-lg-3, .col-md-6 {
            flex: 0 0 100%;
            max-width: 100%;
          }
          .contact-hero {
            padding: 80px 0;
          }

          .hero-stats {
            gap: 40px;
          }

          .contact-form-card {
            padding: 40px 30px;
          }

          .quick-links {
            flex-direction: column;
            align-items: center;
          }

          .contact-info-section,
          .contact-form-section,
          .quick-links-section {
            padding: 80px 0;
          }

          .hero-stats {
            margin-top: 40px;
          }

          .stat-number {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ModernContact;