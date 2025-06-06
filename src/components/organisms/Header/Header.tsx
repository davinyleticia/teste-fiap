'use client';

import { animate, DOMKeyframesDefinition, AnimationOptions } from 'motion';
import { useEffect, useRef } from 'react';
import { TitleBlock } from '@/components/molecules/';
import { HeaderTitle, BackgroundTitle } from '@/components/atomic';
import styles from './Header.module.scss';

interface HeaderProps {
  data: {
    titulo: string;
    sub_titulo: string;
    sobre: string;
  };
}

export default function Header({ data }: HeaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const firstLineRef = useRef<HTMLDivElement>(null);
  const secondLineRef = useRef<HTMLDivElement>(null);
  const backgroundTitleRef = useRef<HTMLHeadingElement>(null);

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
        } as DOMKeyframesDefinition,
        {
          duration: 7,
          easing: 'ease-in-out',
          offset: [0, 0.2, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 3,
        } as AnimationOptions
      );

      animate(
        secondLineRef.current,
        {
          opacity: [0, 1, 1, 0],
          y: [-50, 0, 0, 50],
        } as DOMKeyframesDefinition,
        {
          duration: 7,
          delay: 0.5,
          easing: 'ease-in-out',
          offset: [0, 0.2, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 3,
        } as AnimationOptions
      );

      animate(
        backgroundTitleRef.current,
        {
          opacity: [0, 0.17, 0.17, 0],
          y: [-50, 0, 0, 50],
        } as DOMKeyframesDefinition,
        {
          duration: 7,
          delay: 0.2,
          easing: 'ease-in-out',
          offset: [0, 0.2, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 3,
        } as AnimationOptions
      );
    });
  }, []);

  const propsData = {
    containerRef,
    backgroundTitleRef,
    firstLineRef,
    secondLineRef,
  };

  return (
    <section className={styles.container}>
      <TitleBlock propsData={propsData}>
        <BackgroundTitle>
          <p ref={propsData.backgroundTitleRef}>
            &nbsp;&nbsp;&nbsp;{data?.sobre}
          </p>
        </BackgroundTitle>
        <HeaderTitle>
          <p ref={propsData.firstLineRef}>&nbsp;&nbsp;&nbsp;{data?.titulo}</p>
          <p ref={propsData.secondLineRef}>{data?.sub_titulo}</p>
        </HeaderTitle>
      </TitleBlock>
    </section>
  );
}
