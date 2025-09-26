"use client";
import React from "react";

const ClientTestimonials = () => {
  const testimonials = [
    {
      name: "PG Ramnath",
      position: "CEO, GOEC",
      content:
        "Xyvin Tech transformed our business with their innovative solutions. Their team is professional, skilled, and truly understands our needs.",
      rating: 5,
      avatar: "PR"
    },
    {
      name: "Noushad Hameed",
      position: "CEO, Exctel Engineering",
      content:
        "They helped us automate several of our core business engineering processes using AI, saving us countless hours and significantly improving efficiency. Their expertise in AI-driven automation is top-notch. We’re extremely happy with the results and would gladly work with them again!",
      rating: 5,
      avatar: "NH"
    },
    {
      name: "Suresh Kumar",
      position: "Founder & CEO, Skybertech",
      content:
        "The best IT partner we have worked with. Their expertise in AI and modern technologies is remarkable.",
      rating: 5,
      avatar: "SK"
    },
    {
      name: "Ajith Kumar",
      position: " CEO, Continuity Oman",
      content:
        "From strategy to execution, they transformed our manual workflows into fully automated systems using AI. Their team was proactive, skilled, and truly committed to our success. Working with them was a game-changer for our business.",
      rating: 5,
      avatar: "AK"
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="badge-icon">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            Testimonials
          </div>
          <h2 className="section-title">
            What Our <span className="highlight">Clients Say</span> About Us
          </h2>
          <p className="section-description">
            Don't just take our word for it. Here's what our satisfied clients
            have to say about our services and partnership experience.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="quote-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
              
              <div className="testimonial-content">
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="star">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.content}"</p>
              </div>
              
              <div className="testimonial-author">
                <div className="author-avatar">
                  <span className="avatar-text">{testimonial.avatar}</span>
                </div>
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-position">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-footer">
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">75+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonials-section {
          padding: 120px 0;
          background: #ffffff;
          position: relative;
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
          background: rgba(69, 183, 209, 0.1);
          border: 1px solid rgba(69, 183, 209, 0.3);
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 500;
          color: #1d4ed8;
          margin-bottom: 24px;
        }

        .badge-icon {
          width: 16px;
          height: 16px;
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

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 40px;
          margin-bottom: 80px;
        }

        .testimonial-card {
          background: white;
          padding: 40px;
          border-radius: 24px;
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(69, 183, 209, 0.1);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .testimonial-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(135deg, #45b7d1 0%, #1d4ed8 100%);
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }

        .testimonial-card:hover::before {
          transform: scaleX(1);
        }

        .testimonial-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(69, 183, 209, 0.15);
          border-color: rgba(69, 183, 209, 0.2);
        }

        .quote-icon {
          color: rgba(69, 183, 209, 0.2);
          margin-bottom: 20px;
        }

        .testimonial-content {
          margin-bottom: 32px;
        }

        .rating {
          display: flex;
          gap: 4px;
          margin-bottom: 24px;
        }

        .star {
          color: #ffc107;
          transition: transform 0.2s ease;
        }

        .testimonial-card:hover .star {
          transform: scale(1.1);
        }

        .testimonial-text {
          font-size: 1.15rem;
          line-height: 1.7;
          color: #4a4a4a;
          font-style: italic;
          margin: 0;
          font-weight: 400;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 16px;
          padding-top: 24px;
          border-top: 1px solid rgba(69, 183, 209, 0.1);
        }

        .author-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: linear-gradient(135deg, #45b7d1 0%, #1d4ed8 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .avatar-text {
          color: white;
          font-weight: 600;
          font-size: 1rem;
        }

        .author-info {
          flex: 1;
        }

        .author-name {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 4px 0;
        }

        .author-position {
          font-size: 0.9rem;
          color: #666;
          margin: 0;
          font-weight: 500;
        }

        .testimonials-footer {
          text-align: center;
          padding-top: 60px;
          border-top: 1px solid rgba(69, 183, 209, 0.1);
        }

        .stats-container {
          display: flex;
          justify-content: center;
          gap: 80px;
          flex-wrap: wrap;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1d4ed8;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 0.95rem;
          color: #666;
          font-weight: 500;
        }

        @media (max-width: 991px) {
          .testimonials-grid {
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 30px;
            margin-bottom: 60px;
          }

          .testimonial-card {
            padding: 32px;
          }

          .stats-container {
            gap: 60px;
          }
        }

        @media (max-width: 767px) {
          .testimonials-section {
            padding: 80px 0;
          }

          .testimonials-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .testimonial-card {
            padding: 28px;
          }

          .section-header {
            margin-bottom: 60px;
          }

          .stats-container {
            gap: 40px;
          }

          .stat-number {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
          }

          .testimonial-card {
            padding: 24px;
          }

          .container {
            padding: 0 15px;
          }

          .stats-container {
            flex-direction: column;
            gap: 32px;
          }
        }
      `}</style>
    </section>
  );
};

export default ClientTestimonials;