import { Header, Intro } from '@/components/organisms/';
import dataHeader from '../data/header.data.json';
import dataIntro from '../data/intro.data.json';

export default function Home() {
  return (
    <>
      <Header data={dataHeader} />
      <Intro data={dataIntro} />
      <div style={{ height: '200vh' }} />
    </>
  );
}
