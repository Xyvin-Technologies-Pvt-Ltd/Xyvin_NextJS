"use client";

import React from "react";
// import DarkLight from '@/components/common/DarkLight';
import ScrollToTop from "@/components/common/ScrollToTop";
// import Sticky from '@/components/sticky/Sticky';

const Wrapper = ({ children }: any) => {
  return (
    <>
      <ScrollToTop />
      {/* <DarkLight /> */}
      {/* <Sticky /></> */}
      {children}
    </>
  );
};

export default Wrapper;
