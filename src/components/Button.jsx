// src/components/Button.jsx
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// register the GSAP hook
gsap.registerPlugin(useGSAP);

const Button = ({ text, className, id, loading = false }) => {
  const btnRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      btnRef.current,
      { opacity: 0, scale: 0.8, y: 20 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: btnRef.current,
          start: "top bottom-=100",
        },
      }
    );
  }, []);

  // ← changed “work” → “contact” here
  const handleClick = (e) => {
    e.preventDefault();
    const target = document.getElementById("contact");
    if (target) {
      const offset = window.innerHeight * 0.15;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <button
      type="button"
      id={id}
      ref={btnRef}
      onClick={handleClick}
      disabled={loading}
      className={`${className ?? ""} inline-block`}
      style={{ width: "128px", height: "32px" }}
    >
      <div className="cta-button group flex items-center justify-center gap-2 w-full h-full px-3 rounded-md bg-white text-black cursor-pointer select-none transition duration-300 hover:bg-black hover:text-white">
        <div className="bg-circle w-4 h-4 rounded-full bg-gray-300 transition duration-300 group-hover:bg-white" />
        <p className="text m-0 text-sm font-semibold whitespace-nowrap transition duration-300">
          {loading ? "Loading..." : text}
        </p>
        <div className="arrow-wrapper flex items-center">
          <img
            src="/images/arrow-down.svg"
            alt="arrow"
            className="w-4 h-4 object-contain transition duration-300 group-hover:invert"
          />
        </div>
      </div>
    </button>
  );
};

export default Button;
