import { useEffect, useCallback, useRef } from 'react';

import { MainContainer } from './index.styles';

const Etc = ({ etcRef }) => {
  const handleScroll = useCallback(([entry]) => {
    const etc = document.querySelector('.Main');
    const header = document.querySelector('.header');

    if (entry.isIntersecting) {
      etc.style.color = 'white';
      etc.style.backgroundColor = 'black';
      etc.style.transition = '2s';
      header.style.backgroundColor = 'black';
      etc.style.color = 'white';
    } else {
      etc.style.color = 'black';
      etc.style.backgroundColor = 'white';
      header.style.backgroundColor = 'white';
      etc.style.color = 'black';
    }
  }, []);

  useEffect(() => {
    let observer;
    const { current } = etcRef;

    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.1 });
      observer.observe(current);

      return () => observer && observer.disconnect();
    }
  }, [handleScroll]);

  return (
    <MainContainer className="etc" ref={etcRef}>
      <div className="title">Certificate</div>
      <div className="list">
        <div className="item">ADSP</div>
        <div className="item">SQLD</div>
        <div className="item">컴퓨터활용능력 1급</div>
      </div>
      <div className="title">Education</div>
      <div className="list">
        <div className="item">경희대학교</div>
        <div className="item">산업경영공학과</div>
        <div className="item">소프트웨어융합학과</div>
      </div>
      <div>2018.03 - 2024.02</div>
    </MainContainer>
  );
};
export default Etc;
