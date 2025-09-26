"use client";
import React from "react";
import Link from "next/link";

const ContactCTA = () => {
  return (
    <section className="contact-cta-section">
      <div className="container">
        <div className="cta-content">
          <div className="cta-text">
            <h2 className="cta-title">
              Ready to Transform Your
              {/* <span className="highlight"> */}
                 Digital Vision
                 {/* </span> */}
                  into Reality?
            </h2>
            <p className="cta-description">
              Let's discuss your project and explore how our expertise can help
              you achieve your business goals. Get in touch with us today for a
              free consultation.
            </p>

           
          </div>

          <div className="cta-actions">
            <Link href="/Xyvin/contact" className="btn-primary">
              Get Free Consultation
              <span className="btn-arrow">→</span>
            </Link>
            <Link href="/Xyvin/portfolio" className="btn-outline">
              View Our Work
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-cta-section {
          padding: 120px 0;
          background: linear-gradient(135deg, #45b7d1 0%, #1d4ed8 100%);
          color: white;
          position: relative;
          overflow: hidden;
        }

        .contact-cta-section::before {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 400px;
          height: 400px;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.1) 0%,
            transparent 70%
          );
          border-radius: 50%;
        }

        .cta-content {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .cta-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 24px;
        }

        .highlight {
          color: #ffeaa7;
        }

        .cta-description {
          font-size: 1.2rem;
          line-height: 1.7;
          margin-bottom: 40px;
          opacity: 0.9;
        }

        .contact-methods {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 16px;
          background: rgba(255, 255, 255, 0.1);
          padding: 20px;
          border-radius: 16px;
          backdrop-filter: blur(10px);
        }

        .contact-icon {
          font-size: 2rem;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          flex-shrink: 0;
        }

        .contact-details h4 {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .contact-details p {
          font-size: 0.95rem;
          opacity: 0.8;
          margin: 0;
        }

        .cta-actions {
          display: flex;
          flex-direction: column;
          gap: 20px;
          align-items: stretch;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: white;
          color: #45b7d1;
          padding: 16px 32px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
          color: #45b7d1;
        }

        .btn-outline {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: transparent;
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.3);
          padding: 14px 30px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .btn-outline:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: white;
          transform: translateY(-2px);
          color: white;
        }

        .btn-arrow {
          transition: transform 0.3s ease;
        }

        .btn-primary:hover .btn-arrow {
          transform: translateX(4px);
        }

        @media (max-width: 991px) {
          .cta-content {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }

          .contact-methods {
            justify-content: center;
            max-width: 600px;
            margin: 0 auto;
          }

          .cta-actions {
            max-width: 400px;
            margin: 0 auto;
          }
        }

        @media (max-width: 767px) {
          .contact-cta-section {
            padding: 80px 0;
          }

          .contact-methods {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .contact-item {
            padding: 16px;
          }

          .cta-actions {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactCTA;
