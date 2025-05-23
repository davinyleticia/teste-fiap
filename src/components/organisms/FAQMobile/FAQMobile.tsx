'use client';

import { useState } from 'react';
import { Title } from '@/components/atomic/';
import styles from './FAQMobile.module.scss';

interface faqItem{
  key: string;
  label: string;
  answer: string;
  color: string;
}

export default function FAQMobile({ data }: { data: faqItem[] }) {
  const [activeTab, setActiveTab] = useState('matricular');

  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Title
            text={{
              mainTitle: 'FAQ',
              subTitle: 'Dúvidas Frequentes',
            }}
          />
          <div className={styles.tabs}>
            {data.map((tab) => (
              <div key={tab.key} className={styles.tabWrapper}>
                <button
                  className={`${styles.tabButton} ${activeTab === tab.key ? styles.active : ''} ${styles[tab.color]}`}
                  onMouseEnter={() => setActiveTab(tab.key)}
                >
                  <p>{tab.label}</p>
                </button>

                {activeTab === tab.key && tab.answer && (
                  <div className={styles.answer}>{tab.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
