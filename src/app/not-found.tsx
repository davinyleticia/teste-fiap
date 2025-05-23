import styles from '@/app/styles/not-found/not-found.module.scss';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.code}>404</h1>
      <p className={styles.message}>A página que você tentou acessar não pode ser encontrada.</p>
    </div>
  );
}