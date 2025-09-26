"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Instagram,
  Rocket
} from "lucide-react";
import footer_logo from "@/assets/img/Logo_white.png";

interface FooterLink {
  name: string;
  href: string;
}

interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<{ size?: string | number; className?: string  }>;
}

const ModernFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    services: [
      { name: "Custom Software Development", href: "/Xyvin/service" },
      { name: "Web Development", href: "/Xyvin/service" },
      { name: "Mobile App Development", href: "/Xyvin/service" },
      { name: "ERP Solutions", href: "/Xyvin/service" },
      { name: "API Integration", href: "/Xyvin/service" },
      { name: "AI & ML Services", href: "/Xyvin/service" },
    ] as FooterLink[],
    company: [
      { name: "About Us", href: "/Xyvin/about" },
      { name: "Our Portfolio", href: "/Xyvin/portfolio" },
      { name: "Blog", href: "/Xyvin/blog" },
      { name: "Contact Us", href: "/Xyvin/contact" },
    ] as FooterLink[],
  };

  const socialLinks: SocialLink[] = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/xyvin-technologies",
      icon: Linkedin,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/xyvintech",
      icon: Instagram,
    },
  ];

  return (
    <footer className="modern-footer">
      {/* Main Footer */}
      <div className="footer-main">
        <div className="container">
          <div className="row">
            {/* Company Info */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="footer-section">
                <div className="footer-logo">
                  <Image
                    src={footer_logo}
                    alt="Xyvin Technologies"
                    width={150}
                    height={40}
                  />
                </div>
                <p className="footer-description">
                  Transforming businesses through innovative technology
                  solutions. We specialize in AI-powered software development,
                  web applications, and digital transformation services.
                </p>
                <div className="contact-info">
                  <div className="contact-item">
                    <Mail size={18} className="contact-icon" />
                    <a href="mailto:admin@xyvin.com">admin@xyvin.com</a>
                  </div>
                  <div className="contact-item">
                    <Phone size={18} className="contact-icon" />
                    <a href="tel:+918138916303">+91 813 891 6303</a>
                  </div>
                  <div className="contact-item">
                    <MapPin size={18} className="contact-icon" />
                    <span>Kochi, India</span><br/>
                    <span>Dubai, UAE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="col-lg-2 col-md-6 mb-4">
              <div className="footer-section">
                <h4 className="footer-title">Services</h4>
                <ul className="footer-links">
                  {footerSections.services.map((service, index) => (
                    <li key={index}>
                      <Link href={service.href}>{service.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Company */}
            <div className="col-lg-2 col-md-6 mb-4">
              <div className="footer-section">
                <h4 className="footer-title">Company</h4>
                <ul className="footer-links">
                  {footerSections.company.map((item, index) => (
                    <li key={index}>
                      <Link href={item.href}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter & Social */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="footer-section">
                <h4 className="footer-title">Stay Connected</h4>
                <p className="newsletter-text">
                  Follow us for the latest updates and tech insights.
                </p>
                <div className="social-links">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className="social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        title={social.name}
                      >
                        <IconComponent size={20} className="social-icon" />
                      </a>
                    );
                  })}
                </div>
                <div className="quick-contact">
                  <Link href="/Xyvin/contact" className="contact-btn">
                    <Rocket size={16} className="btn-icon" />
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="copyright">
                © {currentYear} Xyvin Technologies Pvt Ltd. All rights reserved.
              </p>
            </div>
            <div className="col-md-6">
              <div className="footer-bottom-links">
                <Link href="/privacy">Privacy Policy</Link>
                <Link href="/terms">Terms of Service</Link>
                <Link href="/sitemap">Sitemap</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .modern-footer {
          background: linear-gradient(
            135deg,
            #1a1a2e 0%,
            #16213e 50%,
            #0f172a 100%
          );
          color: white;
          position: relative;
          overflow: hidden;
        }

        .modern-footer::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2396CEB4' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='30'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          z-index: 1;
        }

        .footer-main {
          padding: 80px 0 40px;
          position: relative;
          z-index: 2;
        }

        .footer-section {
          height: 100%;
        }

        .footer-logo {
          margin-bottom: 25px;
        }

        .footer-description {
          color: #a0a0a0;
          line-height: 1.6;
          margin-bottom: 30px;
          font-size: 0.95rem;
        }

        .footer-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #96ceb4;
          margin-bottom: 25px;
          position: relative;
        }

        .footer-title::after {
          content: "";
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 30px;
          height: 2px;
          background: linear-gradient(45deg, #96ceb4, #4ecdc4);
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 12px;
        }

        .modern-footer .footer-links a {
          color: #a0a0a0 !important;
          text-decoration: none;
          font-size: 0.95rem;
          transition: color 0.3s ease;
          display: inline-block;
        }

        .modern-footer .footer-links a:hover {
          color: #96ceb4 !important;
        }

        .contact-info {
          margin-top: 20px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 15px;
          font-size: 0.95rem;
        }

        .contact-icon {
          color: #96ceb4;
          flex-shrink: 0;
        }

        .modern-footer .contact-item a {
          color: #a0a0a0 !important;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .modern-footer .contact-item a:hover {
          color: #96ceb4 !important;
        }

        .newsletter-text {
          color: #a0a0a0;
          font-size: 0.95rem;
          line-height: 1.5;
          margin-bottom: 25px;
        }

        .social-links {
          display: flex;
          gap: 15px;
          margin-bottom: 25px;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          background: rgba(150, 206, 180, 0.1);
          border: 1px solid rgba(150, 206, 180, 0.3);
          border-radius: 12px;
          color: #96ceb4;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: #96ceb4;
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(150, 206, 180, 0.3);
        }

        .social-icon {
          transition: transform 0.3s ease;
        }

        .social-link:hover .social-icon {
          transform: scale(1.1);
        }

        .contact-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          background: linear-gradient(45deg, #96ceb4, #4ecdc4);
          color: white;
          text-decoration: none;
          border-radius: 25px;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .contact-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(150, 206, 180, 0.4);
          color: white;
        }

        .btn-icon {
          transition: transform 0.3s ease;
        }

        .contact-btn:hover .btn-icon {
          transform: translateX(2px);
        }

        .footer-bottom {
          background: rgba(0, 0, 0, 0.3);
          padding: 25px 0;
          border-top: 1px solid rgba(150, 206, 180, 0.1);
          position: relative;
          z-index: 2;
        }

        .copyright {
          color: #a0a0a0;
          margin: 0;
          font-size: 0.9rem;
        }

        .footer-bottom-links {
          display: flex;
          gap: 25px;
          justify-content: flex-end;
        }

        .modern-footer .footer-bottom-links a {
          color: #a0a0a0 !important;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .modern-footer .footer-bottom-links a:hover {
          color: #96ceb4 !important;
        }

        @media (max-width: 768px) {
          .footer-main {
            padding: 60px 0 30px;
          }

          .footer-bottom-links {
            justify-content: center;
            margin-top: 15px;
            flex-wrap: wrap;
            gap: 15px;
          }

          .copyright {
            text-align: center;
          }

          .social-links {
            justify-content: center;
          }

          .contact-btn {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 576px) {
          .footer-section {
            text-align: center;
            margin-bottom: 40px;
          }

          .footer-title::after {
            left: 50%;
            transform: translateX(-50%);
          }

          .contact-item {
            justify-content: center;
          }
        }
        html body a:hover {
          color: #96ceb4 !important;
          background: yellow !important;
        }
      `}</style>
    </footer>
  );
};

export default ModernFooter;