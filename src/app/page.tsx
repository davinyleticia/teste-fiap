import { Courses, Header, Intro } from '@/components/organisms/';
import dataHeader from '../data/header.data.json';
import dataIntro from '../data/intro.data.json';
import dataCourses from '../data/courses.data.json';

export default function Home() {
  return (
    <>
      <Header data={dataHeader} />
      <Intro data={dataIntro} />
      <Courses data={dataCourses}/>
    </>
  );
}
