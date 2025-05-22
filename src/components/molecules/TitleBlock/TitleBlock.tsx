'use client';

import styles from './TitleBlock.module.scss';

interface TitleBlockProps {
propsData: {
    containerRef : React.RefObject<HTMLDivElement | null>;
    backgroundTitleRef : React.RefObject<HTMLHeadingElement | null>;
    firstLineRef : React.RefObject<HTMLDivElement | null>;
    secondLineRef : React.RefObject<HTMLDivElement | null>;
  };
  children?: React.ReactNode;
}


export default function TitleBlock({ propsData, children }: TitleBlockProps) {
  
  return (
    <div className={styles.container} ref={propsData.containerRef}>
      {children}
    </div>
  );
}
