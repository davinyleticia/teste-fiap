'use client';

import { animate } from 'motion';
import { useEffect, useRef } from 'react';
import { TitleBlock } from "@/components/molecules/";

export default function Header() {
const containerRef = useRef<HTMLDivElement>(null);
  const firstLineRef = useRef<HTMLDivElement>(null);
  const secondLineRef = useRef<HTMLDivElement>(null);
  const backgroundTitleRef = useRef<HTMLHeadingElement>(null); // ← tipagem opcional

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (
        !firstLineRef.current ||
        !secondLineRef.current ||
        !backgroundTitleRef.current
      )
        return;

      containerRef.current!.style.visibility = 'visible';

      animate(
        firstLineRef.current,
        {
          opacity: [0, 1, 1, 0],
          y: [-50, 0, 0, 50],
        },
        {
          duration: 7,
          easing: 'ease-in-out',
          offset: [0, 0.2, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 3,
        }
      );

      animate(
        secondLineRef.current,
        {
          opacity: [0, 1, 1, 0] as any,
          y: [-50, 0, 0, 50] as any,
        },
        {
          duration: 7,
          delay: 0.5,
          easing: 'ease-in-out',
          offset: [0, 0.2, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 3,
        }
      );

      animate(
        backgroundTitleRef.current,
        {
          opacity: [0, 0.1, 0.1, 0] as any,
        },
        {
          duration: 7,
          delay: 0.2,
          easing: 'ease-in-out',
          offset: [0, 0.2, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 3,
        }
      );
    });
  }, []);

  const propsData = {
    containerRef,
    backgroundTitleRef,
    firstLineRef,
    secondLineRef,
    };

  return(<TitleBlock propsData={propsData} />)};