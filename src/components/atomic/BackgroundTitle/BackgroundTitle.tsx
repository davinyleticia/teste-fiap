import React from 'react';
import styles from './BackgroundTitle.module.scss';

type BackgroundTitleProps = {
    ref?: React.RefObject<HTMLHeadingElement>;
    children?: React.ReactNode;
};

const BackgroundTitle: React.FC<BackgroundTitleProps> = ({ref, children}) => {
  return (
    <h2 ref={ref} className={styles.backgroundTitle}>
     {children}
    </h2>
  );
};

export default BackgroundTitle;
