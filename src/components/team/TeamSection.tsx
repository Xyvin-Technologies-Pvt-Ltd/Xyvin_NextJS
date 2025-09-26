"use client";
import React from "react";
import Image from "next/image";
import team_data from "@/data/team_data";

const TeamSection = () => {
  // Get first 4 team members for the showcase
  const featuredTeam = team_data.slice(0, 10);

  return (
    <section className="team-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <span className="badge-icon">👥</span>
            Our Team
          </div>
          <h2 className="section-title">
            Meet the <span className="highlight">Experts Behind</span> Your
            Success
          </h2>
          <p className="section-description">
            Our diverse team of passionate professionals brings years of
            experience and expertise to every project.
          </p>
        </div>

        <div className="team-grid">
          {featuredTeam.map((member, index) => (
            <div key={member.id} className="team-card">
              <div className="team-image-container">
                <div className="team-image">
                  <Image
                    src={member.img}
                    alt={member.avatar_name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="member-photo"
                  />
                </div>
                <div className="team-overlay">
                  <div className="team-social">
                    <a
                      href={member.linkedin}
                      className="social-link"
                      aria-label="LinkedIn"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a href="#" className="social-link" aria-label="Instagram">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="team-info">
                <h3 className="member-name">{member.avatar_name}</h3>
                <p className="member-role">{member.designation}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="team-cta">
          <h3>Want to work with our amazing team?</h3>
          <p>
            We're always looking for talented individuals to join our growing
            family.
          </p>
          <a href="/Xyvin/contact" className="cta-button">
            Join Our Team
            <span className="button-arrow">→</span>
          </a>
        </div>
      </div>

      <style jsx>{`
        .team-section {
          padding: 120px 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
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
          background: rgba(78, 205, 196, 0.1);
          border: 1px solid rgba(78, 205, 196, 0.3);
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

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 40px;
          margin-bottom: 80px;
        }

        .team-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          position: relative;
          height: fit-content;
        }

        .team-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .team-image-container {
          position: relative;
          width: 100%;
          aspect-ratio: 4/5;
          overflow: hidden;
          border-radius: 20px 20px 0 0;
        }

        .team-image {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .member-photo {
          object-fit: cover;
          object-position: center top;
          transition: transform 0.3s ease;
          width: 100% !important;
          height: 100% !important;
        }

        .team-card:hover .member-photo {
          transform: scale(1.05);
        }

        .team-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #45b7d1 0%, #1d4ed8 100%);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .team-card:hover .team-overlay {
          opacity: 1;
          visibility: visible;
        }

        .team-social {
          display: flex;
          gap: 15px;
          transform: translateY(20px);
          transition: transform 0.3s ease 0.1s;
        }

        .team-card:hover .team-social {
          transform: translateY(0);
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          background: white;
          border-radius: 50%;
          color: #1d4ed8;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 16px;
        }

        .social-link:hover {
          background: #1d4ed8;
          color: white;
          transform: translateY(-3px) scale(1.1);
        }

        .team-info {
          padding: 30px 25px;
          text-align: center;
        }

        .member-name {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 8px;
        }

        .member-role {
          font-size: 0.95rem;
          color: #1d4ed8;
          font-weight: 500;
          margin-bottom: 15px;
        }

        .team-cta {
          text-align: center;
          background: white;
          padding: 50px 40px;
          border-radius: 20px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
          max-width: 600px;
          margin: 0 auto;
        }

        .team-cta h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 16px;
        }

        .team-cta p {
          font-size: 1rem;
          color: #666;
          margin-bottom: 30px;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #45b7d1 0%, #1d4ed8 100%);
          color: white;
          padding: 14px 28px;
          border: none;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(78, 205, 196, 0.3);
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(78, 205, 196, 0.4);
          color: white;
        }

        .button-arrow {
          transition: transform 0.3s ease;
        }

        .cta-button:hover .button-arrow {
          transform: translateX(4px);
        }

        @media (max-width: 768px) {
          .team-section {
            padding: 80px 0;
          }

          .team-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
            margin-bottom: 60px;
          }

          .team-image-container {
            aspect-ratio: 4/5;
          }

          .team-info {
            padding: 25px 20px;
          }

          .team-cta {
            padding: 40px 30px;
          }
        }

        @media (max-width: 480px) {
          .team-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .team-image-container {
            aspect-ratio: 4/5;
          }

          .container {
            padding: 0 15px;
          }
        }
      `}</style>
    </section>
  );
};

export default TeamSection;
