import React, { useEffect, useRef, useCallback } from 'react';
import {
  MainContainer,
  LeftContainer,
  DescriptionContainer,
  DescriptionTitle,
  DescriptionText,
  DescriptionWrapper,
} from './records.styles';

const Records = () => {
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
      <DescriptionContainer>
        <DescriptionWrapper>
          <DescriptionTitle>Work</DescriptionTitle>
          <DescriptionText># NHN 클라우드 - 로그플랫폼 개발팀</DescriptionText>
          <DescriptionText># 펫페오톡 - 프론트엔드 개발팀</DescriptionText>
          <DescriptionText>
            <br />
          </DescriptionText>
        </DescriptionWrapper>
        <DescriptionWrapper>
          <DescriptionTitle>Project</DescriptionTitle>
          <DescriptionText># 개인포트폴리오 사이트</DescriptionText>
          <DescriptionText># 모두의시간</DescriptionText>
          <DescriptionText># Rabbit</DescriptionText>
          <DescriptionText># Youtube Sub Maker</DescriptionText>
          <DescriptionText># 병원맛집</DescriptionText>
          <DescriptionText># 맨리브영</DescriptionText>
          <DescriptionText># 스누피 명언사이트</DescriptionText>
        </DescriptionWrapper>
        <DescriptionWrapper>
          <DescriptionTitle>School</DescriptionTitle>
          <DescriptionText>
            # 경희대학교 소프트웨어융합 & 산업공학
          </DescriptionText>
        </DescriptionWrapper>
      </DescriptionContainer>
    </MainContainer>
  );
};

export default Records;
