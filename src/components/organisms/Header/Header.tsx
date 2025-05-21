// components/organisms/Header/Header.tsx
"use client";

import { useEffect, useState } from "react";
import HeaderView from "../../molecules/HeaderView/HeaderView";

export default function Header() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <HeaderView scrollProgress={scrollProgress} />;
}
