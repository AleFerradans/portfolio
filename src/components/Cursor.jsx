"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Cursor() {
  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? 150 : 30;
  const circle = useRef();
  const mouse = useRef({ x: 0, y: 0 });
  const delayMouse = useRef({ x: 0, y: 0 });

  const [maskPos, setMaskPos] = useState({ x: 20, y: 50 });

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const moveCircle = (x, y) => {
    gsap.set(circle.current, { y, x, xPercent: -50, yPercent: -50 });
  };

  const animate = () => {
    const { x, y } = delayMouse.current;
    delayMouse.current = {
      x: lerp(x, mouse.current.x, 0.3),
      y: lerp(y, mouse.current.y, 0.3),
    };
    moveCircle(delayMouse.current.x, delayMouse.current.y);
    window.requestAnimationFrame(animate);
  };

  const handleMouseMove = (e) => {
    mouse.current = { x: e.clientX, y: e.clientY };
  };

  useEffect(() => {
    animate();
    window.addEventListener("mousemove", handleMouseMove);

    // Detectar hover global
    const handleMouseOver = (e) => {
      const isTargetHoverable = e.target.closest("[data-hover='true']");
      setIsHovered(!!isTargetHoverable);
    };
    //Actualizamos la variable CSS para el clip-path
    const root = document.documentElement;
    root.style.setProperty("--mask-x", `${maskPos.x}px`);
    root.style.setProperty("--mask-y", `${maskPos.y}px`);
    root.style.setProperty("--mask-size", isHovered ? "450px" : "0px");

    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [maskPos, isHovered]);

  return (
    <div
      ref={circle}
      className="fixed top-0 left-0 bg-[#ed5b2b] rounded-full mix-blend-difference z-[100] pointer-events-none"
      style={{
        width: size,
        height: size,
        filter: `blur(${isHovered ? 30 : 0}px)`,
        transition:
          "height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out",
        backgroundColor: isHovered ? "#ed5b2b" : "transparent",
        border: isHovered ? "none" : "2px solid #ed5b2b",
      }}
    ></div>
  );
}
