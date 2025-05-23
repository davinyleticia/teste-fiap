import { IconToggle } from '@/components/atomic';
import styles from './CategoryHeader.module.scss';

export type CategoryHeaderProps = {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
};

export default function CategoryHeader({
  title,
  isOpen,
  onToggle,
}: CategoryHeaderProps) {
  return (
    <div className={styles.header} onClick={onToggle}>
      <h2 className={styles.title}>{title}</h2>
      <IconToggle isOpen={isOpen} />
    </div>
  );
}
