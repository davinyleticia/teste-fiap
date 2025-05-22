import React, { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import TitleBlock from './TitleBlock';
import { BackgroundTitle, HeaderTitle } from '@/components/atomic/';

test('TitleBlock renders HeaderTitle and BackgroundTitle components', () => {
  const containerRef = createRef<HTMLDivElement>();
  const backgroundTitleRef = createRef<HTMLHeadingElement>();
  const firstLineRef = createRef<HTMLDivElement>();
  const secondLineRef = createRef<HTMLDivElement>();

  const propsData = {
    containerRef,
    backgroundTitleRef,
    firstLineRef,
    secondLineRef,
  };

  render(
    <TitleBlock propsData={propsData}>
      <BackgroundTitle>
        <p ref={backgroundTitleRef}>SOBRE</p>
      </BackgroundTitle>
      <HeaderTitle>
        <div ref={firstLineRef}>A Melhor Faculdade</div>
        <div ref={secondLineRef}>de Tecnologia</div>
      </HeaderTitle>
    </TitleBlock>
  );


  expect(screen.getByText(/SOBRE/i)).toBeInTheDocument();
  expect(screen.getByText(/A Melhor Faculdade/i)).toBeInTheDocument();
  expect(screen.getByText(/de Tecnologia/i)).toBeInTheDocument();

  expect(containerRef.current).not.toBeNull();
  expect(backgroundTitleRef.current).not.toBeNull();
  expect(firstLineRef.current).not.toBeNull();
  expect(secondLineRef.current).not.toBeNull();
});
