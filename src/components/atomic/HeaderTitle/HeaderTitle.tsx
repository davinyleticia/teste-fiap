import React from 'react';
import styles from './HeaderTitle.module.scss';

type HeaderTitleProps = {
    ref?: React.RefObject<HTMLHeadingElement>;
    children?: React.ReactNode;
};

const HeaderTitle: React.FC<HeaderTitleProps> = ({ref, children}) => {
  return (
    <h1 ref={ref} className={styles.title}>
     {children}
    </h1>
  );
};

export default HeaderTitle;
