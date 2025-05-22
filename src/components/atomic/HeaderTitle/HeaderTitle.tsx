import React from 'react';
import styles from './HeaderTitle.module.scss';

type HeaderTitleProps = {
   
    children?: React.ReactNode;
};

const HeaderTitle: React.FC<HeaderTitleProps> = ({children}) => {
  return (
    <h1 className={styles.title}>
     {children}
    </h1>
  );
};

export default HeaderTitle;
