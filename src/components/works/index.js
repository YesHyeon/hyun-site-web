import React, { useEffect, useRef, useCallback, useState } from 'react';
import {
  MainContainer,
  DescriptionContainer,
  DescriptionWrapper,
} from './index.styles';

const records = [
  {
    id: 'Internship',
    contents: [
      {
        id: '1',
        title: 'NHN Cloud',
        kr: '엔에이치엔 클라우드',
        team: '로그플랫폼 개발팀',
        stack: 'React, Typescript, Recoil, Java, SpringBoot',
        date: '2023.01.02-2023.02.28',
        info: [
          '서버에서 발생하는 로그 기록을 관리하는 ‘Log & Crash’ 클라우드 서비스의 테이블 컴포넌트 기능 개발 및 로그데이터 테스트 백오피스 화면 개발 프로젝트 참여',
          [
            '터미널로 쿼리문을 작성해 로그를 생성하여 테스트하는 문제를 인식하고, 로그 데이터 모킹을 통해 로그 검증 테스트 자동화',
            '대량의 로그 생성 & 테스트할 수 있는 백오피스 화면 개발',
            '10개 이상의 컬럼이 포함된, 구조 수정이 가능한 Table UI 구현 및 필터링 UI 구현',
            '로그를 확인할 수 있는 테이블에 적용된 무한 스크롤 기능을 pagination으로 개선하여 사용자의 경험을 높임 \n -> 3번의 스크롤 경험을 1번의 클릭 경험으로 개선',
            '기존 Search API로만 로그데이터를 검색하던 것을 Search After API로 개선 \n ->검색속도 약 20% 상승 ',
          ],
        ],
      },
      {
        id: '2',
        title: 'PetpeoTalk',
        kr: '펫페오톡',
        team: '프론트엔드 개발팀',
        stack: 'React, ReactNative, Typescript, webView, Recoil',
        date: '2022.01.02-2022.06.31',
        info: [
          'AI 반려견 행동분석 ‘도기보기’ 앱을 배포하며 새로운 기능 추가 및 유지 보수',
          [
            '서비스의 DAU가 줄어드는 문제를 인식하고, 앱 내에서 별점을 요청하는 프로젝트를 리드 \n -> 사용자 경험을 방해하지 않는 로직을 재설계하여 두 달만에 ⭐ 0.7 이상 상승',
            '문의하는 과정이 번거롭다는 니즈를 파악하여 앱 내에서 문의가 가능하도록 채널톡 기능 추가 \n -> 문의하는 사용자의 수가 약 30% 증가하여, 오류 및 개선점을 빠르게 파악 ',
            '사용자의 경험을 높이기 위한 랜딩페이지 반응형 제작 및 스크롤 애니메이션 도입',
            '강아지의 감정을 AI로 분석하여 결과를 보여주는 댕상분석 이벤트 페이지 개발',
          ],
        ],
      },
    ],
  },
];

const Works = () => {
  const worksDom = useRef();
  const dom = useRef();

  const [isVisiable, setIsVisiable] = useState(true);

  const handleScroll = useCallback(
    ([entry]) => {
      const title2 = document.querySelector('.background-title');

      if (
        entry.isIntersecting &&
        entry.target.className.includes('background-title') &&
        isVisiable
      ) {
        title2.style.animation = 'up 1s forwards';
        setIsVisiable(!isVisiable);
      } else if (
        entry.isIntersecting &&
        entry.target.className.includes('works-content')
      ) {
        title2.style.animation = 'down 3s forwards';
      }
    },
    [isVisiable]
  );

  useEffect(() => {
    let observer;
    const { current } = dom;
    const { current: worksDomCurrent } = worksDom;

    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.2 });
      observer.observe(current);
      observer.observe(worksDomCurrent);

      return () => observer && observer.disconnect();
    }
  }, [handleScroll]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     //   const title1 = document.querySelector('.title-opacity');
  //     // console.log(window.scrollY);
  //     //   if (window.scrollY > 3500) {
  //     //     title1.classList.add('project-title-animation');
  //     //   } else {
  //     //     title1.classList.remove('project-title-animation');
  //     //   }
  //   };
  //   window.addEventListener('scroll', handleScroll);

  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <MainContainer className="works-title">
      <div className="background-title" ref={worksDom}>
        works
      </div>
      {records.map((item) => {
        return (
          <DescriptionContainer className="works-content" ref={dom}>
            {item.contents.map((content) => {
              return (
                <DescriptionWrapper>
                  <div className="box">
                    <div className="company-wraaper">
                      <div className="title">{content.id}</div>
                      <div className="company">{content.title}</div>
                    </div>
                    <div className="date">{content.date}</div>
                    <div className="team">{content.team}</div>
                    <div className="stack">{content.stack}</div>
                    <ul>
                      <div className="main">{content.info[0]}</div>
                      {content.info[1].map((itm) => {
                        return <li className="sub">{itm}</li>;
                      })}
                    </ul>
                  </div>
                </DescriptionWrapper>
              );
            })}
          </DescriptionContainer>
        );
      })}
    </MainContainer>
  );
};

export default Works;
