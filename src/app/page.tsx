'use client';
import { useEffect, useState } from 'react';
import { Courses, Header, Intro, FAQ, CoursesMobile, FAQMobile } from '@/components/organisms/';
import dataHeader from '../data/header.data.json';
import dataIntro from '../data/intro.data.json';
import dataCourses from '../data/courses.data.json';
import dataFAQ from '../data/faq.data.json';
import { LoadingSpinner } from '@/components/molecules';


export default function Home() {

const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <LoadingSpinner />
    );
  }


  return (
    <>
      <Header data={dataHeader} />
      <Intro data={dataIntro} />
      <Courses data={dataCourses}/>
      <CoursesMobile data={dataCourses}/>
      <FAQ data={dataFAQ}/>
      <FAQMobile data={dataFAQ}/>
      <div style={{ height: '4rem' }}></div>
    </>
  );
}
