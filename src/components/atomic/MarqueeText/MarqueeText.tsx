'use client';

import styles from './MarqueeText.module.scss';
import { motion } from 'framer-motion';

type Props = {
  text: {
    text: string;
    text2: string;
  };
};

export default function MarqueeText({ text }: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.marquee}>
        <motion.div
          className={styles.track}
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 19
          }}
        >
          <span>{text.text} &nbsp;&nbsp; {text.text} &nbsp;&nbsp; {text.text}</span>
          <span>{text.text} &nbsp;&nbsp; {text.text} &nbsp;&nbsp; {text.text}</span>
        </motion.div>
      </div>

      <div className={styles.marquee}>
        <motion.div
          className={styles.trackReverse}
          animate={{ x: ['-50%', '0%'] }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 19
          }}
        >
          <span>{text.text2} &nbsp; &nbsp; {text.text2} &nbsp;&nbsp; {text.text2}</span>
          <span>{text.text2} &nbsp;&nbsp; {text.text2} &nbsp;&nbsp; {text.text2}</span>
        </motion.div>
      </div>
    </div>
  );
}
