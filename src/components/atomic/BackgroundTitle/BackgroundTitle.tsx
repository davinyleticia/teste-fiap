import React from 'react';
import styles from './BackgroundTitle.module.scss';

type BackgroundTitleProps = {
    children?: React.ReactNode;
};

const BackgroundTitle: React.FC<BackgroundTitleProps> = ({children}) => {
  return (
    <h2 className={styles.backgroundTitle}>
     {children}
    </h2>
  );
};

export default BackgroundTitle;
