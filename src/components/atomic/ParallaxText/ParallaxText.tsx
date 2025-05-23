'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import styles from './ParallaxText.module.scss';

type Props = {
  text: {
    text: string;
    text2: string;
  };
};

export default function ParallaxText({ text }: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const x1 = useTransform(scrollYProgress, [0, 1], [0, -1800]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 1800]);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      console.log('Scroll Y Progress:', latest);
    });
  }, [scrollYProgress]);

  return (
    <div ref={ref} className={styles.wrapper}>
      <motion.div className={styles.track} style={{ x: x1 }}>
        <span>
          {text.text} &nbsp; {text.text} 
        </span>
      </motion.div>

      <motion.div className={styles.trackReverse} style={{ x: x2 }}>
        <span>
          {text.text2} &nbsp; {text.text2}
        </span>
      </motion.div>
    </div>
  );
}
