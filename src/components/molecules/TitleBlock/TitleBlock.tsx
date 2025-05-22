'use client';

import { animate, keyframes } from 'motion';
import { useEffect, useRef } from 'react';
import styles from './TitleBlock.module.scss';
import BackgroundTitle from '@/components/atomic/BackgroundTitle/BackgroundTitle';
import { HeaderTitle } from '@/components/atomic';

interface TitleBlockProps {
propsData: {
    containerRef : React.RefObject<HTMLDivElement | null>;
    backgroundTitleRef : React.RefObject<HTMLHeadingElement | null>;
    firstLineRef : React.RefObject<HTMLDivElement | null>;
    secondLineRef : React.RefObject<HTMLDivElement | null>;
  };
}


export default function TitleBlock({ propsData }: TitleBlockProps) {
  

  return (
    <div className={styles.container} ref={propsData.containerRef}>
      <BackgroundTitle>
        <p ref={propsData.backgroundTitleRef}>&nbsp;&nbsp;&nbsp;SOBRE</p>
      </BackgroundTitle>
      <HeaderTitle>
        <div ref={propsData.firstLineRef}> &nbsp;&nbsp;&nbsp;A Melhor Faculdade</div>
        <div ref={propsData.secondLineRef}>de Tecnologia</div>
    </HeaderTitle>
    </div>
  );
}
