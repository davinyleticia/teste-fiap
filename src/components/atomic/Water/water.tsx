'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import styles from './ParallaxText.module.scss';
import Image from 'next/image';



export default function Water() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, 1800]);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      console.log('Scroll Y Progress:', latest);
    });
  }, [scrollYProgress]);

  return (
    <div ref={ref} className={styles.wrapper}>

      <motion.div className={styles.track} style={{ x: x }}>
   
          <Image
            src="/images/water_.png"
            alt="Water"
            className={styles.image}
            width={30}
            height={40}
            />
      
      </motion.div>
    </div>
  );
}