"use client"
import { useState } from "react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

interface CountType {
  number: number;
  text?: string;
  add_style?: boolean;
}

const Count = ({ number, text, add_style }: CountType) => {
  const [focus, setFocus] = useState<boolean>(false);
  const visibleChangeHandler = (isVisible: boolean) => {
    if (isVisible) {
      if (!focus) {
        setFocus(true);
      }
    }
  };

  return (
    <>
      <CountUp start={focus ? 0 : undefined} end={number} duration={2}>
        {({ countUpRef }) => (
          <div className={`d-flex ${add_style ? "align-items-center justify-content-center" : ""} `}>
            <strong ref={countUpRef} />
            <InView
              as="span"
              onChange={(inView: any) => visibleChangeHandler(inView)}>
              {text && <span>{text}</span>} 
            </InView>
          </div>
        )}
      </CountUp>
    </>
  );
};

export default Count;
