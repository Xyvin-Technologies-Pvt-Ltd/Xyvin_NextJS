"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";

// Brand logos import
import brand_img_1 from "@/assets/img/new_brand1.svg";
import brand_img_2 from "@/assets/img/new_brand2.svg";
import brand_img_3 from "@/assets/img/new_brand3.svg";
import brand_img_4 from "@/assets/img/new_brand4.svg";
import brand_img_5 from "@/assets/img/new_brand5.svg";
import brand_img_6 from "@/assets/img/new_brand6.svg";
import brand_img_7 from "@/assets/img/new_brand7.svg";
import brand_img_8 from "@/assets/img/new_brand8.svg";
import brand_img_9 from "@/assets/img/new_brand9.svg";
import brand_img_10 from "@/assets/img/new_brand10.svg";
import brand_img_11 from "@/assets/img/ACKAF.png";
import brand_img_12 from "@/assets/img/ITCC (1).png";
import brand_img_13 from "@/assets/img/IPA (1).png";
import brand_img_14 from "@/assets/img/Khedmah (1).png";
import brand_img_15 from "@/assets/img/KSSIA.png";
import brand_img_16 from "@/assets/img/Skopick.png";
import brand_img_17 from "@/assets/img/Frame 1485460.png";
import brand_img_18 from "@/assets/img/myg-logo__2_ 1.png";
import brand_img_19 from "@/assets/img/Subtract.png";
import brand_img_20 from "@/assets/img/logo kk 2.png";

interface BrandData {
  image: StaticImageData;
  name: string;
  width?: number;
  height?: number;
}

const brand_data: BrandData[] = [
  { image: brand_img_1, name: "Brand Partner 1", width: 120, height: 60 },
  { image: brand_img_2, name: "Brand Partner 2", width: 120, height: 60 },
  { image: brand_img_3, name: "Brand Partner 3", width: 120, height: 60 },
  { image: brand_img_4, name: "Brand Partner 4", width: 120, height: 60 },
  { image: brand_img_5, name: "Brand Partner 5", width: 120, height: 60 },
  { image: brand_img_6, name: "Brand Partner 6", width: 120, height: 60 },
  { image: brand_img_7, name: "Brand Partner 7", width: 120, height: 60 },
  { image: brand_img_8, name: "Brand Partner 8", width: 120, height: 60 },
  { image: brand_img_9, name: "Brand Partner 9", width: 120, height: 60 },
  { image: brand_img_10, name: "Brand Partner 10", width: 120, height: 60 },
  { image: brand_img_11, name: "ACKAF", width: 120, height: 60 },
  { image: brand_img_12, name: "ITCC", width: 120, height: 60 },
  { image: brand_img_13, name: "IPA", width: 120, height: 60 },
  { image: brand_img_14, name: "Khedmah", width: 120, height: 60 },
  { image: brand_img_15, name: "KSSIA", width: 120, height: 60 },
  { image: brand_img_16, name: "Skopick", width: 120, height: 60 },
  { image: brand_img_17, name: "Brand Partner 11", width: 120, height: 60 },
  { image: brand_img_18, name: "Brand Partner 12", width: 120, height: 60 },
  { image: brand_img_19, name: "Brand Partner 13", width: 120, height: 60 },
  { image: brand_img_20, name: "Brand Partner 14", width: 120, height: 60 },
];

interface BrandHomeOneProps {
  style_2?: boolean;
}

const BrandHomeOne: React.FC<BrandHomeOneProps> = ({ style_2 = false }) => {
  // Split logos into two groups for different carousel rows
  const firstRowLogos = brand_data.slice(0, Math.ceil(brand_data.length / 2));
  const secondRowLogos = brand_data.slice(Math.ceil(brand_data.length / 2));

  return (
    <section className="brand-section">
      {/* Header Section */}
      {style_2 ? (
        <div className="brand-header">
          <div className="cs_height_150 cs_height_lg_60"></div>
          <div className="text-center">
            <p className="brand-subtitle">
              130+ Our Client & Partner We Are Working Together
            </p>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
        </div>
      ) : (
        <div className="cs_height_140 cs_height_lg_70"></div>
      )}

      {/* Brand Logos Section */}
      <div className="brand-carousel-container">
        {/* First Row - Left to Right */}
        <div className="brand-row">
          <div className="brand-track brand-track-ltr">
            {/* Triple the logos for seamless loop */}
            {[...firstRowLogos, ...firstRowLogos, ...firstRowLogos].map((item, i) => (
              <div key={`ltr-${i}`} className="brand-logo">
                <Image
                  src={item.image}
                  alt={`${item.name} logo`}
                  width={item.width || 120}
                  height={item.height || 60}
                  className="brand-image"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="brand-spacing"></div>

        {/* Second Row - Right to Left */}
        <div className="brand-row">
          <div className="brand-track brand-track-rtl">
            {/* Triple the logos for seamless loop */}
            {[...secondRowLogos, ...secondRowLogos, ...secondRowLogos].map((item, i) => (
              <div key={`rtl-${i}`} className="brand-logo">
                <Image
                  src={item.image}
                  alt={`${item.name} logo`}
                  width={item.width || 120}
                  height={item.height || 60}
                  className="brand-image"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="cs_height_140 cs_height_lg_70"></div>

      <style jsx>{`
        .brand-section {
          position: relative;
          overflow: hidden;
          background: transparent;
        }

        .brand-header {
          text-align: center;
        }

        .brand-subtitle {
          font-size: 18px;
          color: #666;
          font-weight: 400;
          line-height: 1.6;
          margin: 0;
        }

        .brand-carousel-container {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .brand-row {
          position: relative;
          overflow: hidden;
          white-space: nowrap;
        }

        .brand-track {
          display: inline-flex;
          align-items: center;
          gap: 60px;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          width: fit-content;
        }

        .brand-track-ltr {
          animation-name: scrollLeft;
          animation-duration: 40s;
        }

        .brand-track-rtl {
          animation-name: scrollRight;
          animation-duration: 35s;
        }

        .brand-logo {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          transition: all 0.3s ease;
          opacity: 0.7;
          min-width: 160px; /* Ensures consistent spacing */
        }

        .brand-logo:hover {
          opacity: 1;
          transform: scale(1.1);
        }

        .brand-image {
          max-width: 120px;
          max-height: 60px;
          width: auto;
          height: auto;
          object-fit: contain;
          filter: grayscale(100%);
          transition: all 0.3s ease;
        }

        .brand-logo:hover .brand-image {
          filter: grayscale(0%);
        }

        .brand-spacing {
          height: 45px;
        }

        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .brand-track {
            gap: 40px;
          }

          .brand-track-ltr {
            animation-duration: 30s;
          }

          .brand-track-rtl {
            animation-duration: 25s;
          }

          .brand-logo {
            padding: 15px;
            min-width: 120px;
          }

          .brand-image {
            max-width: 80px;
            max-height: 40px;
          }

          .brand-subtitle {
            font-size: 16px;
            padding: 0 20px;
          }
        }

        @media (max-width: 480px) {
          .brand-track {
            gap: 30px;
          }

          .brand-track-ltr {
            animation-duration: 25s;
          }

          .brand-track-rtl {
            animation-duration: 20s;
          }

          .brand-logo {
            padding: 10px;
            min-width: 100px;
          }

          .brand-image {
            max-width: 60px;
            max-height: 30px;
          }

          .brand-subtitle {
            font-size: 14px;
          }
        }

        /* Pause animation on hover */
        .brand-carousel-container:hover .brand-track {
          animation-play-state: paused;
        }

        /* Better performance */
        .brand-track {
          will-change: transform;
        }

        /* Ensure smooth transitions */
        .brand-track-ltr,
        .brand-track-rtl {
          backface-visibility: hidden;
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default BrandHomeOne;