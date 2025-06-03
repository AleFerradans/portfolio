import React, { useState } from "react";
import StarAboutMe from "../../public/Star-aboutme.svg";

export default function Text() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      <p
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        data-hover="true"
        className="text-secondary sm:text-left text-center text-xl xl:text-2xl md:text-[20px] text-pretty font-geist font-thin selection:bg-primary border-description leading-9 tracking-wider"
      >
        I'm Alexis, an{" "}
        <span className="font-roboto font-normal px-0.5 selection:bg-primary selection:text-secondary bg-primary text-bg tracking-tighter z-10">
          Frontend Developer
        </span>{" "}
        from Montevideo, dedicated to crafting impactful digital experiences for
        brands & individuals. Let's team up!
      </p>

      <img
        src={StarAboutMe}
        alt=""
        className="absolute top-[-35%] right-[-2%] -rotate-14 scale-150"
      />
    </div>
  );
}
