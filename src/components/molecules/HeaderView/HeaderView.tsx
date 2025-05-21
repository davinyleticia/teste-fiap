import styles from './HeaderView.module.scss';
import Image from 'next/image';

interface HeaderViewProps {
  scrollProgress: number;
}

export default function HeaderView({ scrollProgress }: HeaderViewProps) {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image
          src="/logo-fiap.svg"
          alt="FIAP Logo"
          width={190}
          height={40}
          className={styles.logo}
        />
      </div>
        <div
          className={styles.progressBar}
          data-testid="progress-bar"
          style={{ width: `${scrollProgress}%` }}
        />

    </header>
  );
}
