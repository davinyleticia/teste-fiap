import Image from 'next/image';
import styles from './ImageWithScrollText.module.scss';
import { ParallaxText } from '@/components/atomic/';

type Props = {
  src: string;
  alt: string;
  scrollText: {
    text: string;
    text2: string;
  }
};

export default function ImageWithScrollText({ src, alt, scrollText }: Props) {
  return (
    <div className={styles.container}>
      <Image src={src} alt={alt} className={styles.image} width={30}  height={40}/>
      <ParallaxText text={scrollText} />
    </div>
  );
}
