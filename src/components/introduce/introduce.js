import {
  MainContainer,
  Hand,
  ProfileCardWrapper,
  LeftContainer,
  DescriptionContainer,
  DescriptionTitle,
  DescriptionText,
  DescriptionWrapper,
} from './introduce.styles';
import { useState, useEffect, useRef, useCallback } from 'react';
import hand from '../../images/introduce/hand.svg';
import ProfileCard from '../profileCard/profileCard';
import Title from '../title/title';
import { Description } from '../profileCard/profileCard.styles';

function Introduce() {
  const [scrollPosition, setScrollPosition] = useState(false);
  const [cardPosition, setCardPosition] = useState(false);

  const dom = useRef();

  const handleScroll = useCallback(([entry]) => {
    const { current } = dom;

    if (entry.isIntersecting) {
      setScrollPosition(true);
    } else {
      setScrollPosition(false);
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

  console.log('ccc', cardPosition);

  return (
    <MainContainer ref={dom}>
      <Title />
      <LeftContainer>
        <DescriptionContainer>
          <DescriptionWrapper>
            <DescriptionTitle>Name</DescriptionTitle>
            <DescriptionText># 노현</DescriptionText>
          </DescriptionWrapper>

          <DescriptionWrapper>
            <DescriptionTitle>Work</DescriptionTitle>
            <DescriptionText>
              # NHN 클라우드 - 로그플랫폼 개발팀
            </DescriptionText>
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

        <DescriptionContainer>
          <DescriptionWrapper>
            <DescriptionTitle>Position</DescriptionTitle>
            <DescriptionText># 프론트엔드 개발자</DescriptionText>
          </DescriptionWrapper>

          <DescriptionWrapper>
            <DescriptionTitle>Activity</DescriptionTitle>
            <DescriptionText># 정보통신기획평가원 - KSW Square</DescriptionText>
            <DescriptionText># IT연합동아리 DND</DescriptionText>
            <DescriptionText># Cloud탐구동아리 ASC</DescriptionText>
          </DescriptionWrapper>

          <DescriptionWrapper>
            <DescriptionTitle>Certification</DescriptionTitle>
            <DescriptionText># SQLD</DescriptionText>
            <DescriptionText># ADSP</DescriptionText>
            <DescriptionText># 컴퓨터활용능력 1급</DescriptionText>
          </DescriptionWrapper>
        </DescriptionContainer>
      </LeftContainer>
      {scrollPosition ? (
        <>
          <Hand src={hand} />
          <ProfileCardWrapper
            onClick={() => {
              setCardPosition(!cardPosition);
            }}
          />
        </>
      ) : null}
      {cardPosition ? <ProfileCard setCardPosition={setCardPosition} /> : null}
    </MainContainer>
  );
}
export default Introduce;
