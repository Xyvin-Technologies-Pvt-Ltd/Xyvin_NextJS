"use client";
import React from "react";
import { Rocket } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="container">
        <div className="row align-items-center min-vh-50">
          <div className="col-lg-8 mx-auto text-center">
            <div className="hero-badge">
              <span className="badge-icon"><Rocket size={16} /></span>
              About Xyvin Technologies
            </div>
            <h1 className="hero-title">
              Transforming Ideas Into
              <span className="text-gradient"> Digital Reality</span>
            </h1>
            <p className="hero-description">
              We are a team of passionate technologists, designers, and
              strategists committed to delivering cutting-edge IT solutions that
              drive business growth and digital transformation.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">4+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">125+</div>
                <div className="stat-label">Projects Delivered</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">75+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-hero {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          padding: 120px 0 80px;
          position: relative;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(69, 183, 209, 0.1);
          border: 1px solid #1d4ed8;
          border-radius: 50px;
          padding: 8px 20px;
          color: #1d4ed8;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 24px;
        }

        .badge-icon {
          font-size: 16px;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          color: #1a1a1a;
          line-height: 1.2;
          margin-bottom: 24px;
        }

        .text-gradient {
          background: linear-gradient(135deg, #45b7d1 0%, #1d4ed8 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-description {
          font-size: 1.2rem;
          color: #666;
          line-height: 1.6;
          margin-bottom: 40px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: bold;
          color: #1d4ed8;
          display: block;
          line-height: 1;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 8px;
        }

        @media (max-width: 767px) {
          .about-hero {
            padding: 80px 0 60px;
          }

          .hero-stats {
            gap: 30px;
          }

          .stat-number {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutHero;
