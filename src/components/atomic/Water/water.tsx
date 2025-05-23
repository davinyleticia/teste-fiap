'use client';
import { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import styles from './water.module.scss';

const totalFrames = 191;

function formatNumber(num: number, size: number) {
  let s = num + '';
  while (s.length < size) s = '0' + s;
  return s;
}

export default function ScrollSpriteAnimation() {
  const { scrollYProgress } = useScroll();
  const [frame, setFrame] = useState(1);

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      const frameIndex = Math.min(
        totalFrames,
        Math.max(1, Math.floor(latest * totalFrames))
      );
      setFrame(frameIndex);
    });
  }, [scrollYProgress]);

  const currentImage = `/water/water_${formatNumber(frame, 3)}.jpg`;

  return (
    <div className={styles.container}>
      <motion.img
        src={currentImage}
        alt={`Frame ${frame}`}
        className={styles.spriteImage}
        loading="eager"
        draggable={false}
        key={frame}
      />
    </div>
  );
}
