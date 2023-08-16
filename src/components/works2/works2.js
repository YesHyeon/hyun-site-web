import React, { useEffect, useRef, useCallback } from 'react';
import { MainContainer, Title, Title2, Title3, Aa } from './works2.styles';

const Works2 = () => {
  const dom = useRef();
  const titleRef = useRef();

  const handleScroll = useCallback(([entry]) => {
    const { current } = dom;
    // console.log(window.scrollY);

    if (entry.isIntersecting) {
      entry.target.style.color = 'blue';
    } else {
    }

    // console.log(entry);
  }, []);

  //   useEffect(() => {
  //     let observer;
  //     const { current } = dom;

  //     if (current) {
  //       observer = new IntersectionObserver(handleScroll, { threshold: 0.3 });
  //       observer.observe(current);

  //       return () => observer && observer.disconnect();
  //     }
  //   }, [handleScroll]);

  useEffect(() => {
    const handleScroll = () => {
      //   const title1 = document.querySelector('.title-opacity');
      // console.log(window.scrollY);
      //   if (window.scrollY > 3500) {
      //     title1.classList.add('project-title-animation');
      //   } else {
      //     title1.classList.remove('project-title-animation');
      //   }
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <MainContainer ref={dom}>
      <Title className="work-title" ref={titleRef}>
        Works
      </Title>
      <Title2 className="work-title" ref={titleRef}>
        Work2
      </Title2>
      <Title3 className="work-title" ref={titleRef}>
        Work3
      </Title3>
    </MainContainer>
  );
};

export default Works2;
