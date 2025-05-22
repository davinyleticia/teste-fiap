'use client';

import { useState } from 'react';
import { CourseItem } from '@/components/molecules/';
import { Title } from '@/components/atomic/';
import styles from './Courses.module.scss';

interface course {
  name: string;
  tag: string;
}

interface category {
  tecnologia: course[];
  inovacao: course[];
  negocios: course[];
}

export default function Courses({data}: {data: category}) {
  const [activeTab, setActiveTab] = useState<
    'tecnologia' | 'inovacao' | 'negocios'
  >('tecnologia');

  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Title
            text={{
              mainTitle: 'Cursos',
              subTitle: 'Cursos de Curta Duração',
            }}
          />
          <div>
            <div className={styles.nav}>
              {['tecnologia', 'inovacao', 'negocios'].map((tab) => (
                <button
                  key={tab}
                  className={`${styles.navButton} ${
                    activeTab === tab ? styles.active : ''
                  }`}
                  onMouseEnter={() => setActiveTab(tab as typeof activeTab)}
                >
                  <p>{tab.toUpperCase()}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.courseList}>
          <h2 className={styles.name}>{activeTab}</h2>
          {data[activeTab].map((course, index) => (
            <CourseItem key={index} name={course.name} tag={course.tag} />
          ))}
        </div>
      </div>
    </section>
  );
}
