import styles from './NavView.module.scss';
import Image from 'next/image';

interface NavViewProps {
  scrollProgress: number;
}

export default function NavView({ scrollProgress }: NavViewProps) {
  return (
    <nav className={styles.Nav}>
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

    </nav>
  );
}
