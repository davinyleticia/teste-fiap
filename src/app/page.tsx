import { Courses, Header, Intro, FAQ } from '@/components/organisms/';
import dataHeader from '../data/header.data.json';
import dataIntro from '../data/intro.data.json';
import dataCourses from '../data/courses.data.json';
import dataFAQ from '../data/faq.data.json';

export default function Home() {
  return (
    <>
      <Header data={dataHeader} />
      <Intro data={dataIntro} />
      <Courses data={dataCourses}/>
      <FAQ data={dataFAQ}/>
      <div style={{ height: '10rem' }}></div>
    </>
  );
}
