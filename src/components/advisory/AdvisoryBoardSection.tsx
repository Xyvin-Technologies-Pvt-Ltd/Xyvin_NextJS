"use client";
import React from "react";
import Image from "next/image";
import advisory_board_data from "@/data/advisory_board_data";

const AdvisoryBoardSection = () => {
  return (
    <section className="advisory-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <span className="badge-icon"></span>
            Our Advisors
          </div>
          <h2 className="section-title">
            Meet Our <span className="highlight">Strategic Advisors</span>
          </h2>
          <p className="section-description">
            Our advisory board consists of industry veterans and thought leaders who provide strategic guidance and insights to help us stay ahead of industry trends and deliver innovative solutions.
          </p>
        </div>


        <div className="advisory-grid">
          {advisory_board_data.map((advisor, index) => (
            <div key={advisor.id} className="advisory-card">
              <div className="advisor-image-container">
                <div className="advisor-image">
                  <Image
                    src={advisor.img}
                    alt={advisor.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="advisor-photo"
                    priority={index === 0} 
                  />
                </div>
                <div className="advisor-overlay">
                  <div className="advisor-social">
                    <a
                      href={advisor.linkedin}
                      className="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
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
                  </div>
                </div>
              </div>
              <div className="advisor-info">
                <h3 className="advisor-name">{advisor.name}</h3>
                <p className="advisor-designation">{advisor.designation}</p>
                <p className="advisor-company">{advisor.company}</p>
                <p className="advisor-bio">{advisor.bio}</p>
                <div className="advisor-expertise">
                  <h4>Expertise:</h4>
                  <div className="expertise-tags">
                    {advisor.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="expertise-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>

      <style jsx>{`
        .advisory-section {
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

        .advisory-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
          gap: 50px;
          margin-bottom: 80px;
          max-width: 1000px;
          margin-left: auto;
          margin-right: auto;
          justify-items: center;
        }

        .advisory-card {
          background: white;
          border-radius: 25px;
          overflow: hidden;
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.12);
          transition: all 0.4s ease;
          position: relative;
          height: 900px;
          width: 450px;
          display: flex;
          flex-direction: column;
        }

        .advisory-card:hover {
          transform: translateY(-15px);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2);
        }

        .advisor-image-container {
          position: relative;
          width: 100%;
          height: 550px;
          overflow: hidden;
          border-radius: 25px 25px 0 0;
        }

        .advisor-image {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .advisor-photo {
          object-fit: cover;
          object-position: center top;
          transition: transform 0.5s ease;
          width: 100% !important;
          height: 100% !important;
          filter: brightness(0.9) contrast(1.1);
        }

        .advisory-card:hover .advisor-photo {
          transform: scale(1.08);
          filter: brightness(1) contrast(1.2);
        }

        .advisor-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(69, 183, 209, 0.9) 0%, rgba(29, 78, 216, 0.9) 100%);
          opacity: 0;
          visibility: hidden;
          transition: all 0.4s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(2px);
        }

        .advisory-card:hover .advisor-overlay {
          opacity: 1;
          visibility: visible;
        }

        .advisor-social {
          display: flex;
          gap: 20px;
          transform: translateY(30px);
          transition: transform 0.4s ease 0.1s;
        }

        .advisory-card:hover .advisor-social {
          transform: translateY(0);
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 55px;
          height: 55px;
          background: white;
          border-radius: 50%;
          color: #1d4ed8;
          text-decoration: none;
          transition: all 0.4s ease;
          font-size: 18px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .social-link:hover {
          background: #1d4ed8;
          color: white;
          transform: translateY(-5px) scale(1.15);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }

        .advisor-info {
          padding: 35px 30px;
          flex: 1;
          display: flex;
          flex-direction: column;
          background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
        }

        .advisor-name {
          font-size: 1.8rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 10px;
          line-height: 1.2;
        }

        .advisor-designation {
          font-size: 1.2rem;
          color: #1d4ed8;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .advisor-company {
          font-size: 1rem;
          color: #666;
          font-weight: 500;
          margin-bottom: 25px;
          padding-bottom: 15px;
          border-bottom: 2px solid rgba(69, 183, 209, 0.1);
        }

        .advisor-bio {
          font-size: 1rem;
          color: #555;
          line-height: 1.7;
          margin-bottom: 25px;
          flex: 1;
        }

        .advisor-expertise h4 {
          font-size: 1.1rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 15px;
          position: relative;
        }

        .advisor-expertise h4::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 30px;
          height: 3px;
          background: linear-gradient(135deg, #45b7d1 0%, #1d4ed8 100%);
          border-radius: 2px;
        }

        .expertise-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .expertise-tag {
          background: linear-gradient(135deg, rgba(69, 183, 209, 0.1) 0%, rgba(29, 78, 216, 0.1) 100%);
          color: #1d4ed8;
          padding: 8px 16px;
          border-radius: 25px;
          font-size: 0.85rem;
          font-weight: 600;
          border: 2px solid rgba(69, 183, 209, 0.2);
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(69, 183, 209, 0.1);
        }

        .expertise-tag:hover {
          background: linear-gradient(135deg, rgba(69, 183, 209, 0.2) 0%, rgba(29, 78, 216, 0.2) 100%);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(69, 183, 209, 0.2);
          border-color: rgba(69, 183, 209, 0.4);
        }

        .advisory-cta {
          text-align: center;
          background: white;
          padding: 50px 40px;
          border-radius: 20px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
          max-width: 600px;
          margin: 0 auto;
        }

        .advisory-cta h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 16px;
        }

        .advisory-cta p {
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
          .advisory-section {
            padding: 80px 0;
          }

          .advisory-grid {
            grid-template-columns: 1fr;
            gap: 40px;
            margin-bottom: 60px;
            max-width: 100%;
          }

          .advisory-card {
            height: auto;
            min-height: 800px;
            width: 100%;
            max-width: 450px;
          }

          .advisor-image-container {
            height: 480px;
          }

          .advisor-info {
            padding: 30px 25px;
          }

          .advisor-name {
            font-size: 1.6rem;
          }

          .advisor-designation {
            font-size: 1.1rem;
          }

          .advisory-cta {
            padding: 40px 30px;
          }
        }

        @media (max-width: 480px) {
          .advisory-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .advisory-card {
            height: auto;
            min-height: 750px;
            width: 100%;
            max-width: 450px;
          }

          .advisor-image-container {
            height: 420px;
          }

          .advisor-info {
            padding: 25px 20px;
          }

          .advisor-name {
            font-size: 1.4rem;
          }

          .container {
            padding: 0 15px;
          }
        }
      `}</style>
    </section>
  );
};

export default AdvisoryBoardSection;
