"use client";

import Link from "next/link";
import React, { useState } from "react";

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
  {
    id: 1,
    title: "Home",
    link: "/",
    has_dropdown: false,
  },
  {
    id: 2,
    title: "About",
    link: "/Xyvin/about",
    has_dropdown: false,
  },
  // {
  //   id: 3,
  //   title: "Pages",
  //   link: "/about",
  //   has_dropdown: true,
  //   sub_menu: [
  //     {
  //       id: 1,
  //       title: "About",
  //       link: "/about",
  //     },
  //     {
  //       id: 2,
  //       title: "Team",
  //       link: "/team",
  //     },
  //     {
  //       id: 3,
  //       title: "Team Details",
  //       link: "/team-details",
  //     },
  //     {
  //       id: 4,
  //       title: "Contact",
  //       link: "/contact",
  //     },
  //     {
  //       id: 5,
  //       title: "Faq",
  //       link: "/faq",
  //     },
  //     {
  //       id: 6,
  //       title: "Error",
  //       link: "/error",
  //     },
  //   ],
  // },
  {

    id: 3,
    title: "Advisory Board",
    link: "/Xyvin/advisory-board",
    has_dropdown: false,
  },
  {

    id: 4,
    title: "Services",
    link: "/Xyvin/service",
    has_dropdown: false,
    
  },
  {
    id: 5,
    title: "Portfolio",
    link: "/Xyvin/portfolio",
    has_dropdown: false,
    
  },
  {
    id: 6,
    title: "Blog",
    link: "/Xyvin/blog",
    has_dropdown: false,
  },
  {
    id: 7,
    title: "Contact",
    link: "/Xyvin/contact",
    has_dropdown: false,
  },
];

const MobileMenu = ({ active, navTitle, openMobileMenu }: any) => {
  return (
    <>
      <ul
        className="cs_nav_list"
        style={{ display: active ? "block" : "none" }}
      >
        {menu_data.map((menu) => (
          <li
            key={menu.id}
            className={`${menu.has_dropdown ? "menu-item-has-children" : ""} ${
              navTitle === menu.title ? "active" : ""
            }`}
          >
            <Link href={menu.link}>{menu.title}</Link>
            {menu.has_dropdown && (
              <>
                <ul
                  className="cs_mega_wrapper"
                  style={{
                    display: navTitle === menu.title ? "block" : "none",
                  }}
                >
                  {menu.sub_menu?.map((subMenu) => (
                    <li key={subMenu.id}>
                      <Link href={subMenu.link}>{subMenu.title}</Link>
                    </li>
                  ))}
                </ul>
                <span
                  onClick={() => openMobileMenu(menu.title)}
                  className={`cs_munu_dropdown_toggle ${
                    navTitle === menu.title ? "active" : ""
                  }`}
                ></span>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default MobileMenu;
