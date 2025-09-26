"use client";
import React from "react";
import { Users } from "lucide-react";

const AdvisoryBoardHero = () => {
  return (
    <section className="advisory-hero">
      <div className="container">
        <div className="row align-items-center min-vh-50">
          <div className="col-lg-8 mx-auto text-center">
            <div className="hero-badge">
              <span className="badge-icon"><Users size={16} /></span>
              Advisory Board
            </div>
            <h1 className="hero-title">
              Strategic Guidance from
              <span className="text-gradient"> Industry Experts</span>
            </h1>
            <p className="hero-description">
              Our advisory board brings together distinguished professionals with decades of combined experience in technology, business strategy, and innovation to guide our strategic direction and ensure we deliver exceptional value to our clients.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">30+</div>
                <div className="stat-label">Years Combined Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2</div>
                <div className="stat-label">Expert Advisors</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Industries Covered</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .advisory-hero {
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
          max-width: 700px;
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
          .advisory-hero {
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

export default AdvisoryBoardHero;
