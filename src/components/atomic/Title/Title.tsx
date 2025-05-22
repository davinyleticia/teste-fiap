import styles from './Title.module.scss';

type TitleProps = {
  text:{
    mainTitle: string;
    subTitle: string;
  }
};

export default function Title ({ text  }: TitleProps) {
  return (
  <div className={styles.container}>
    <h1 className={styles.mainTitle}>{text.mainTitle}</h1>
    <p className={styles.subTitle}>{text.subTitle}</p>
  </div>)
};