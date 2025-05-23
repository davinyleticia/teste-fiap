import styles from './IconToggle.module.scss';

export type IconToggleProps = {
  isOpen: boolean;
};

export default function IconToggle({ isOpen }: IconToggleProps) {
  return (
    <button className={`${styles.iconToggle} ${isOpen ? '' : styles.open}`}>
      {isOpen ? '-' : '+'}
    </button>
  );
}
