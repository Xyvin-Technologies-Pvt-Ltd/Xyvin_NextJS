"use client";
import React from "react";
import { 
   
  FaCogs, 
  FaDatabase, 
  FaCloud, 
  FaMobile, 
  FaPaintBrush, 
  FaPython,
  FaJava,
  FaPhp,
  FaAws,
  FaRobot,
  FaTools,
   FaNodeJs,
   FaWindows,
 
} from "react-icons/fa";
import { SiNextdotjs, SiVuedotjs, SiAngular, SiTypescript, 
  SiTailwindcss, SiSharp, SiGo, SiMongodb, SiPostgresql,
   SiMysql, SiRedis, SiFirebase, SiElasticsearch, SiAmazon, 
    SiDocker, SiKubernetes, SiJenkins, SiTerraform, 
   SiReact, SiFlutter, SiApple, SiAndroid, SiIonic,  
   SiTensorflow, SiPytorch, SiOpenai, SiScikitlearn, SiPandas, SiNumpy, } from "react-icons/si";
import { TbBrandXamarin } from "react-icons/tb";
import { RiReactjsFill } from "react-icons/ri";

const TechStack = () => {
  const techCategories = [
    {
      category: "Frontend",
      icon: <FaPaintBrush className="w-8 h-8" />,
      color: "#FF6B6B",
      technologies: [
        { name: "React", logo: <RiReactjsFill className="w-5 h-5 text-blue-500" /> },
        { name: "Next.js", logo: <SiNextdotjs className="w-5 h-5" /> },
        { name: "Vue.js", logo: <SiVuedotjs className="w-5 h-5 text-green-500" /> },
        { name: "Angular", logo: <SiAngular className="w-5 h-5 text-red-500" /> },
        { name: "TypeScript", logo: <SiTypescript className="w-5 h-5 text-blue-600" /> },
        { name: "Tailwind CSS", logo: <SiTailwindcss className="w-5 h-5 text-teal-500" /> },
      ],
    },
    {
      category: "Backend",
      icon: <FaCogs className="w-8 h-8" />,
      color: "#4ECDC4",
      technologies: [
        { name: "Node.js", logo: <FaNodeJs className="w-5 h-5 text-green-500" /> },
        { name: "Python", logo: <FaPython className="w-5 h-5 text-yellow-500" /> },
        { name: "Java", logo: <FaJava className="w-5 h-5 text-orange-500" /> },
        { name: "PHP", logo: <FaPhp className="w-5 h-5 text-purple-500" /> },
        { name: "C#", logo: <SiSharp className="w-5 h-5 text-purple-600" /> },
        { name: "Go", logo: <SiGo className="w-5 h-5 text-blue-500" /> },
      ],
    },
    {
      category: "Database",
      icon: <FaDatabase className="w-8 h-8" />,
      color: "#45B7D1",
      technologies: [
        { name: "MongoDB", logo: <SiMongodb className="w-5 h-5 text-green-600" /> },
        { name: "PostgreSQL", logo: <SiPostgresql className="w-5 h-5 text-blue-600" /> },
        { name: "MySQL", logo: <SiMysql className="w-5 h-5 text-orange-500" /> },
        { name: "Redis", logo: <SiRedis className="w-5 h-5 text-red-500" /> },
        { name: "Firebase", logo: <SiFirebase className="w-5 h-5 text-yellow-500" /> },
        { name: "Elasticsearch", logo: <SiElasticsearch className="w-5 h-5 text-yellow-600" /> },
      ],
    },
    {
      category: "Cloud & DevOps",
      icon: <FaCloud className="w-8 h-8" />,
      color: "#96CEB4",
      technologies: [
        { name: "AWS", logo: <FaAws className="w-5 h-5 text-orange-500" /> },
        { name: "Azure", logo: <FaWindows className="w-5 h-5 text-blue-500" /> },
        { name: "Docker", logo: <SiDocker className="w-5 h-5 text-blue-600" /> },
        { name: "Kubernetes", logo: <SiKubernetes className="w-5 h-5 text-blue-700" /> },
        { name: "Jenkins", logo: <SiJenkins className="w-5 h-5 text-gray-600" /> },
        { name: "Terraform", logo: <SiTerraform className="w-5 h-5 text-purple-600" /> },
      ],
    },
    {
      category: "Mobile",
      icon: <FaMobile className="w-8 h-8" />,
      color: "#FFEAA7",
      technologies: [
        { name: "React Native", logo: <SiReact className="w-5 h-5 text-blue-500" /> },
        { name: "Flutter", logo: <SiFlutter className="w-5 h-5 text-blue-400" /> },
        { name: "iOS", logo: <SiApple className="w-5 h-5" /> },
        { name: "Android", logo: <SiAndroid className="w-5 h-5 text-green-500" /> },
        { name: "Ionic", logo: <SiIonic className="w-5 h-5 text-blue-500" /> },
        { name: "Xamarin", logo: <TbBrandXamarin className="w-5 h-5 text-blue-600" /> },
      ],
    },
    {
      category: "AI/ML",
      icon: <FaRobot className="w-8 h-8" />,
      color: "#DDA0DD",
      technologies: [
        { name: "TensorFlow", logo: <SiTensorflow className="w-5 h-5 text-orange-500" /> },
        { name: "PyTorch", logo: <SiPytorch className="w-5 h-5 text-red-500" /> },
        { name: "OpenAI", logo: <SiOpenai className="w-5 h-5" /> },
        { name: "Scikit-learn", logo: <SiScikitlearn className="w-5 h-5 text-orange-400" /> },
        { name: "Pandas", logo: <SiPandas className="w-5 h-5 text-blue-600" /> },
        { name: "NumPy", logo: <SiNumpy className="w-5 h-5 text-blue-500" /> },
      ],
    },
  ];

  return (
    <section className="tech-stack-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <FaTools className="w-4 h-4" />
            Technology Stack
          </div>
          <h2 className="section-title">
            Powered by
            <span className="highlight"> Cutting-Edge Technologies</span>
          </h2>
          <p className="section-description">
            We use the latest and most reliable technologies to build robust,
            scalable, and future-proof solutions for our clients.
          </p>
        </div>

        <div className="tech-grid">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className="tech-category"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="category-header">
                <div
                  className="category-icon"
                  style={{ color: category.color }}
                >
                  {category.icon}
                </div>
                <h3 className="category-title">{category.category}</h3>
              </div>

              <div className="technologies-list">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="tech-item"
                    style={{
                      animationDelay: `${index * 0.1 + techIndex * 0.05}s`,
                    }}
                  >
                    <span className="tech-logo">{tech.logo}</span>
                    <span className="tech-name">{tech.name}</span>
                  </div>
                ))}
              </div>

              <div
                className="category-bg"
                style={{
                  background: `linear-gradient(135deg, ${category.color}15, ${category.color}05)`,
                }}
              ></div>
            </div>
          ))}
        </div>

        <div className="tech-stats">
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Technologies Mastered</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Modern Stack</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Continuous Learning</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4+</div>
            <div className="stat-label">Years Experience</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .tech-stack-section {
          padding: 120px 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          position: relative;
        }

        .tech-stack-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%23e9ecef" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
          opacity: 0.3;
        }

        .container {
          position: relative;
          z-index: 2;
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
          background: rgba(150, 206, 180, 0.1);
          border: 1px solid rgba(150, 206, 180, 0.3);
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
          position: relative;
        }

        .highlight::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 3px;
          background: #1d4ed8;
          border-radius: 2px;
        }

        .section-description {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #666;
        }

        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          margin-bottom: 80px;
        }

        .tech-category {
          position: relative;
          background: white;
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          overflow: hidden;
          border: 1px solid #f0f0f0;
          animation: slideUp 0.6s ease-out forwards;
          opacity: 0;
          transform: translateY(30px);
        }

        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .tech-category:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 50px rgba(0, 0, 0, 0.12);
        }

        .category-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 20px;
        }

        .tech-category:hover .category-bg {
          opacity: 1;
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
          position: relative;
          z-index: 2;
        }

        .category-icon {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          border-radius: 15px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .tech-category:hover .category-icon {
          transform: scale(1.1);
        }

        .category-title {
          font-size: 1.4rem;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0;
        }

        .technologies-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 12px;
          position: relative;
          z-index: 2;
        }

        .tech-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 12px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 10px;
          transition: all 0.3s ease;
          border: 1px solid rgba(0, 0, 0, 0.05);
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .tech-item:hover {
          background: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .tech-logo {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tech-name {
          font-size: 0.9rem;
          font-weight: 500;
          color: #555;
        }

        .tech-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
          margin-top: 60px;
        }

        .stat-item {
          text-align: center;
          padding: 30px 20px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease;
        }

        .stat-item:hover {
          transform: translateY(-3px);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1d4ed8;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 1rem;
          color: #666;
          font-weight: 500;
        }

        @media (max-width: 991px) {
          .tech-grid {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
          }

          .tech-category {
            padding: 25px;
          }

          .technologies-list {
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            gap: 10px;
          }
        }

        @media (max-width: 767px) {
          .tech-stack-section {
            padding: 80px 0;
          }

          .tech-grid {
            grid-template-columns: 1fr;
          }

          .section-header {
            margin-bottom: 60px;
          }

          .tech-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 480px) {
          .tech-stats {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default TechStack;