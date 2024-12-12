import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { IBouncingLogoProps } from "./types";

import "./bouncingLogo.css";

const BouncingImage = ({ imageSrc }: IBouncingLogoProps) => {
  const imageRef = useRef(null);
  const leftStringRef = useRef(null);
  const rightStringRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({ repeat: 0, yoyo: false });

    timeline
      .fromTo(
        imageRef.current,
        { y: -150, opacity: 1 },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          ease: "bounce.in",
        }
      )
      .fromTo(
        leftStringRef.current,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          ease: "bounce.in",
        },
        "<"
      )
      .fromTo(
        rightStringRef.current,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          ease: "bounce.in",
        },
        "<"
      );
  }, []);

  return (
    <>
      <div ref={leftStringRef} className="string left-string" />
      <div ref={rightStringRef} className="string right-string" />
      <img
        ref={imageRef}
        src="./logo.png"
        alt="Dropping Image"
        className="bouncing-logo"
      />
    </>
  );
};

export default BouncingImage;
