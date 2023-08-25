import './video.css';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  MainContainer,
  CardContainer,
  Card,
  FrontCard,
  BackCard,
  Flip,
  DescriptionTitle,
  DescriptionText,
  CardAnimation,
  FrontImage,
  FrontText,
  BackCardTitle,
  BackCardText,
  BackCardName,
  BackCardList,
  BackCardListli,
} from './works.styles';
import Title from '../title/title';
import Profile from '../../assets/images/introduce/profile.png';

const Works = () => {
  const [rotatePosition, setRotatePosition] = useState(false);
  const [rotatePosition2, setRotatePosition2] = useState(false);
  const [isRotateed, setIsRotated] = useState(false);

  const dom = useRef();

  const handleScroll = useCallback(([entry]) => {
    const { current } = dom;

    if (entry.isIntersecting) {
      setRotatePosition(true);
    } else {
      setRotatePosition(false);
    }
  }, []);

  useEffect(() => {
    let observer;
    const { current } = dom;

    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.3 });
      observer.observe(current);

      return () => observer && observer.disconnect();
    }
  }, [handleScroll]);

  return (
    <>
      <Title text={'Works'} />
      <MainContainer ref={dom} back={rotatePosition}>
        <CardContainer>
          <Flip
            onClick={() => {
              setRotatePosition(!rotatePosition);
            }}
          >
            <CardAnimation animation={rotatePosition}>
              <FrontCard>{/* <FrontImage src={Profile} /> */}</FrontCard>
              <BackCard>
                <BackCardName>NHN 클라우드</BackCardName>
                <BackCardTitle>기간</BackCardTitle>
                <BackCardText>2023.01.03 ~ 2023.02.28</BackCardText>
                <BackCardTitle>부서</BackCardTitle>
                <BackCardText>로그플랫폼 개발팀</BackCardText>
                <BackCardTitle>기술스택</BackCardTitle>
                <BackCardText>
                  React, Typescript, Recoil
                  <br /> Java, Springboot
                  <br />
                  Elasticsearch, Logstash, Kafka
                </BackCardText>
                <BackCardTitle>업무내용</BackCardTitle>
                <BackCardList>
                  Log&Crash 클라우드 서비스의 테이블 컴포넌트 기능 개발
                  <BackCardListli>
                    로그를 확인할 수 있는 테이블에 적용된 무한스크롤 기능을
                    pagination으로 개선하여 사용자의 경험을 높임
                  </BackCardListli>
                  <BackCardListli>
                    테이블의 컬럼을 추가하고 삭제하는 기능 개발
                  </BackCardListli>
                  <BackCardListli>
                    elasticsearch, kafka로 10만개 이상의 로그데이터를 처리하기
                    위한 서버 구축 MVC 패턴으로 백엔드 구축 및 테스트를 위한
                    로그생성 컴포넌트 개발
                  </BackCardListli>
                </BackCardList>
              </BackCard>
            </CardAnimation>
          </Flip>
          <Flip
            onClick={() => {
              setRotatePosition2(!rotatePosition2);
            }}
          >
            <CardAnimation animation={rotatePosition2}>
              <FrontCard>
                {/* <FrontImage src={Profile} /> */}
                <FrontText>
                  펫페오톡에서 <br />
                  2022.01.03 ~ 2022.06.31
                </FrontText>
              </FrontCard>
              <BackCard>
                <BackCardName>펫페오톡</BackCardName>
                <BackCardTitle>기간</BackCardTitle>
                <BackCardText>2022.01.03 ~ 2022.06.31</BackCardText>
                <BackCardTitle>부서</BackCardTitle>
                <BackCardText>프론트엔드 개발팀</BackCardText>
                <BackCardTitle>기술스택</BackCardTitle>
                <BackCardText>
                  React, ReactNative, Vue.js, Typescript, Recoil
                </BackCardText>
                <BackCardTitle>업무내용</BackCardTitle>
                <BackCardList>
                  6개월동안 AI 반려견 행동분석 서비스 '도기보기' 기능 추가 및
                  유지보수
                  <BackCardListli>
                    로그를 확인할 수 있는 테이블에 적용된 무한스크롤 기능을
                    pagination으로 개선하여 사용자의 경험을 높임
                  </BackCardListli>
                  <BackCardListli>
                    테이블의 컬럼을 추가하고 삭제하는 기능 개발
                  </BackCardListli>
                  <BackCardListli>
                    elasticsearch, kafka로 10만개 이상의 로그데이터를 처리하기
                    위한 서버 구축 MVC 패턴으로 백엔드 구축 및 테스트를 위한
                    로그생성 컴포넌트 개발
                  </BackCardListli>
                </BackCardList>
              </BackCard>
            </CardAnimation>
          </Flip>
        </CardContainer>
      </MainContainer>
    </>
  );
};
export default Works;
