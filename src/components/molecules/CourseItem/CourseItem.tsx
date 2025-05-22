import styles from './CourseItem.module.scss';

type CourseItemProps = {
  name: string;
  tag?: string;
};

export default function CourseItem({ name, tag }: CourseItemProps) {
  return( <div className={styles.courseItem}>
    <p>{name}</p>
    {tag && <span>{tag}</span>}
  </div>
)};
