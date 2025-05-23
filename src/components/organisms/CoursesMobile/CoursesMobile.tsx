'use client';

import { useState } from 'react';
import { CategoryHeader, CourseItem } from '@/components/molecules/';
import { Title } from '@/components/atomic/';
import styles from './CoursesMobile.module.scss';

interface course {
  name: string;
  tag: string;
}

interface category {
  tecnologia: course[];
  inovacao: course[];
  negocios: course[];
}


export default function CoursesMobile({ data }: { data: category }) {
  const [openTabs, setOpenTabs] = useState<string>();

  const handleToggle = (tab: string) => {
    setOpenTabs(tab);
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
                  isOpen={() => openTabs === tab ? true : false}
                  onToggle={() => handleToggle(tab)}
                />
                {openTabs === tab ? (
                  <div className={styles.list}>
                    {data[tab].map((course, index) => (
                      <CourseItem
                        key={index}
                        name={course.name}
                        tag={course.tag}
                      />
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
