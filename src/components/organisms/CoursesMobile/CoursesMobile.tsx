'use client';

import { useState } from 'react';
import { CategoryHeader, CourseItem } from '@/components/molecules/';
import { Title } from '@/components/atomic/';
import styles from './CoursesMobile.module.scss';

interface Course {
  title: string;
  type: string;
}

interface Category {
  tecnologia: Course[];
  inovacao: Course[];
  negocios: Course[];
}

export default function CoursesMobile({ data }: { data: Category }) {
  const [openTabs, setOpenTabs] = useState<Record<string, boolean>>({});

  const handleToggle = (tab: string) => {
    setOpenTabs((prev) => ({
      ...prev,
      [tab]: !prev[tab],
    }));
  };

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

          <div className={styles.category}>
            {(['tecnologia', 'inovacao', 'negocios'] as const).map((tab) => (
              <div key={tab}>
                <CategoryHeader
                  title={tab.toUpperCase()}
                  isOpen={!!openTabs[tab]}
                  onToggle={() => handleToggle(tab)}
                />
                {openTabs[tab] && (
                  <div className={styles.list}>
                    {data[tab].map((course, index) => (
                      <CourseItem
                        key={index}
                        name={course.title}
                        tag={course.type}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
