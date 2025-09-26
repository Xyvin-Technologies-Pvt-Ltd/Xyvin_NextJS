"use client";
import React from "react";
import Link from "next/link";
import { Zap, Rocket, Eye } from "lucide-react";

const ServiceHero = () => {
  return (
    <section className="service-hero">
      <div className="container">
        <div className="row align-items-center min-vh-50">
          <div className="col-lg-8 mx-auto text-center">
            <div className="hero-badge">
              <span className="badge-icon">
                <Zap size={16} />
              </span>
              Our Services 
            </div>
            <h1 className="hero-title">
              Comprehensive IT Solutions
              <span className="text-gradient"> Powered by Innovation</span>
            </h1>
            <p className="hero-description">
              From custom software development to AI integration, we deliver
              end-to-end IT solutions that transform your business operations
              and drive sustainable growth.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Services Delivered</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">99%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support Available</div>
              </div>
            </div>
            <div className="hero-actions">
              <Link href="/Xyvin/contact" className="btn-primary">
                <span className="btn-icon">
                  <Rocket size={18} />
                </span>
                Get Started Today
              </Link>
              <Link href="/Xyvin/portfolio" className="btn-secondary">
                <span className="btn-icon">
                  <Eye size={18} />
                </span>
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .service-hero {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          padding: 120px 0 80px;
          position: relative;
          overflow: hidden;
        }

        .service-hero::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2345B7D1' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='30'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          z-index: 1;
        }

        .container {
          position: relative;
          z-index: 2;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(96, 206, 180, 0.1);
          border: 1px solid #1d4ed8;
          border-radius: 50px;
          padding: 8px 20px;
          color: #1d4ed8;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 24px;
        }

        .badge-icon {
          display: flex;
          align-items: center;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          color: #1a1a1a;
          line-height: 1.2;
          margin-bottom: 24px;
        }

        .text-gradient {
          background:  linear-gradient(135deg, #45b7d1 0%, #1d4ed8 100%);
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
          margin-bottom: 40px;
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

        .hero-actions {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary,
        .btn-secondary {
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

        .btn-primary {
          background:  linear-gradient(135deg, #45b7d1 0%, #1d4ed8 100%);
          color: white;
          border: none;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(150, 206, 180, 0.3);
          color: white;
        }

        .btn-secondary {
          background: transparent;
          color: #1d4ed8;
          border: 2px solid #1d4ed8;
        }

        .btn-secondary:hover {
          background: rgba(150, 206, 180, 0.1);
          transform: translateY(-2px);
          color: #1d4ed8;
        }

        .btn-icon {
          display: flex;
          align-items: center;
        }

        @media (max-width: 767px) {
          .service-hero {
            padding: 80px 0 60px;
          }

          .hero-stats {
            gap: 30px;
          }

          .stat-number {
            font-size: 2rem;
          }

          .hero-actions {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
};

export default ServiceHero;