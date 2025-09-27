"use client";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import UseSticky from "@/hooks/UseSticky";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import logo from "@/assets/img/logo.svg";
import Logo_white from "@/assets/img/Logo_white.png";

interface DataType {
  id: number;
  title: string;
  link: string;
  has_dropdown: boolean;
  sub_menu?: {
    id: number;
    title: string;
    link: string;
  }[];
}

const menu_data: DataType[] = [
  { id: 1, title: "Home", link: "/", has_dropdown: false },
  { id: 2, title: "About", link: "/Xyvin/about", has_dropdown: false },
  { id: 3, title: "Advisory Board", link: "/Xyvin/advisory-board", has_dropdown: false },
  { id: 4, title: "Services", link: "/Xyvin/service", has_dropdown: false },
  { id: 5, title: "Portfolio", link: "/Xyvin/portfolio", has_dropdown: false },
  { id: 6, title: "Blog", link: "/Xyvin/blog", has_dropdown: false },
  { id: 7, title: "Contact", link: "/Xyvin/contact", has_dropdown: false },
];

const HeaderOne = () => {
  const { sticky } = UseSticky();
  const [active, setActive] = useState<Boolean>(false);
  const handleActive = () => setActive(!active);

  const [navTitle, setNavTitle] = useState("");
  const openMobileMenu = (menu: string) => {
    setNavTitle(navTitle === menu ? "" : menu);
  };

  const [lastScrollTop, setLastScrollTop] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".cs_sticky_header") as HTMLElement | null;
      if (!header) return;

      const headerHeight = header.offsetHeight + 30;
      const windowTop = window.pageYOffset || document.documentElement.scrollTop;

      if (windowTop >= headerHeight) header.classList.add("cs_gescout_sticky");
      else {
        header.classList.remove("cs_gescout_sticky");
        header.classList.remove("cs_gescout_show");
      }

      if (header.classList.contains("cs_gescout_sticky")) {
        if (windowTop < lastScrollTop) header.classList.add("cs_gescout_show");
        else header.classList.remove("cs_gescout_show");
      }

      setLastScrollTop(windowTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return (
    <>
      <header
        className={`cs_site_header cs_style1 cs_sticky_header cs_site_header_full_width ${
          sticky ? "cs_gescout_sticky" : ""
        }`}
      >
        <div className="cs_main_header">
          <div className="container">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                <Link className="cs_site_branding logo-dark" href="/"><Image src={logo} alt="Logo" /></Link>
                <Link className="cs_site_branding logo-white" href="/"><Image src={Logo_white} alt="Logo" /></Link>
              </div>
              <div className="cs_main_header_right">
                <div className="cs_nav cs_medium">
                  <MobileMenu active={active} navTitle={navTitle} openMobileMenu={openMobileMenu} />
                  <span className={`cs_munu_toggle ${active ? "cs_toggle_active" : ""}`} onClick={handleActive}><span></span></span>
                </div>
                <div className="cs_toolbox">
                  <span className="cs_icon_btn">
                    <span className="cs_icon_btn_in" onClick={handleActive}>
                      <span></span><span></span><span></span><span></span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className={`cs_side_header ${active ? "active" : ""}`}>
        <button className="cs_close" onClick={handleActive}></button>
        <div className="cs_side_header_overlay"></div>
        <div className="cs_side_header_in">
          <Link className="cs_site_branding" href="/"><Image src={Logo_white} alt="Logo" /></Link>
          <div className="row align-items-end">
            {/* Menu items */}
            <div className="col-12 col-md-7">
              <div className="cs_box_one">
                <div className="cs_nav_black_section cs_font_changes">
                  <ul>
                    {menu_data.map((item, i) => (
                      <li key={i} className={`menu-item-has-black-section cs_style_1 ${navTitle === item.title ? "active" : ""}`}>
                        <Link href={item.link}>{item.title}</Link>
                        {item.has_dropdown && (
                          <>
                            <ul style={{ display: navTitle === item.title ? "block" : "none" }}>
                              {item?.sub_menu?.map((sub_item, index) => (
                                <li key={index}><Link href={sub_item.link}>{sub_item.title}</Link></li>
                              ))}
                            </ul>
                            <span onClick={() => openMobileMenu(item.title)} className={`cs_munu_dropdown_toggle_1 ${navTitle === item.title ? "active" : ""}`}></span>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Company info */}
            <div className="col-12 col-md-4 offset-md-1">
              <div className="cs_box_two">
                <div>
                  <p className="d-flex align-items-center gap-2">
                    <svg width="50" height="50" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 0.0195312C3.14027 0.0195312 0 3.01027 0 6.68621C0 7.78973 0.289693 8.88387 0.840408 9.85434L6.6172 17.8047C6.69411 17.9373 6.84065 18.0195 7 18.0195C7.15935 18.0195 7.30589 17.9373 7.3828 17.8047L13.1617 9.85105C13.7103 8.88387 14 7.78969 14 6.68617C14 3.01027 10.8597 0.0195312 7 0.0195312ZM7 10.0195C5.07014 10.0195 3.50002 8.52418 3.50002 6.68621C3.50002 4.84824 5.07014 3.35289 7 3.35289C8.92986 3.35289 10.5 4.84824 10.5 6.68621C10.5 8.52418 8.92986 10.0195 7 10.0195Z" fill="white"/>
                    </svg>
                    <span>
                      Xyvin Technologies Private Limited, dewSpace Business Center, Paramara Road, Near North Railway Station, Kochi, Kerala - 682018
                    </span>
                  </p>

                  <h4 className="cs_phone_number">
                    <a href="tel:+918138916303" className="d-flex align-items-center gap-2">
                      <svg width="35" height="35" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="..." fill="white" />
                      </svg>
                      <span>+91 8138916303</span>
                    </a>
                  </h4>

                  {/* Social Links */}
                  <ul className="cs_social_link d-flex gap-3 mt-2">
                    <li><a target="_blank" href="https://www.facebook.com/profile.php?id=61559679521641">Facebook</a></li>
                    <li><a target="_blank" href="https://www.linkedin.com/company/xyvin-technologies-pvt-ltd/mycompany/">Linkedin</a></li>
                    <li><a target="_blank" href="https://www.instagram.com/xyvintech/">Instagram</a></li>
                    <li><a target="_blank" href="https://x.com/Xyvintech">Twitter</a></li>
                  </ul>

                  <hr className="mt-2 me-5 mb-2" />

                  <h4>
                    <a href="mailto:admin@xyvin.com" className="d-flex align-items-center gap-2 cs_primary_font cs_text_btn">
                      <span className="cs_black">admin@xyvin.com</span>
                    </a>
                  </h4>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderOne;
