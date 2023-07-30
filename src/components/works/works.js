import './video.css';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import jejudo1 from '../../images/gallery/jejudo3.jpeg';
import jejudo2 from '../../images/gallery/jejudo8.jpeg';
import busan1 from '../../images/gallery/jejudo6.jpeg';
import busan2 from '../../images/gallery/busan1.jpeg';
import RightMenu from '../rightMenu/rightMenu';
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
} from './works.styles';
import Title from '../title/title';
import Profile from '../../images/introduce/profile.png';
const Works = () => {
  const [rotatePosition, setRotatePosition] = useState(false);

  const dom = useRef();

  const handleScroll = useCallback(([entry]) => {
    const { current } = dom;

    if (entry.isIntersecting) {
      setRotatePosition(true);
      console.log('여기야!!');
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
    <MainContainer ref={dom}>
      <Title text={'Works'} />
      <RightMenu />
      <CardContainer>
        <Flip>
          {rotatePosition ? (
            <CardAnimation>
              <FrontCard>
                <FrontImage src={Profile} />
              </FrontCard>
              <BackCard />
            </CardAnimation>
          ) : (
            <Card>
              <FrontCard>
                <FrontImage src={Profile} />
              </FrontCard>
              <BackCard />
            </Card>
          )}
        </Flip>
        <Flip>
          <Card>
            <FrontCard>
              <FrontImage src={Profile}></FrontImage>
            </FrontCard>
            <BackCard>
              <DescriptionTitle>Project</DescriptionTitle>
              <DescriptionText># 개인포트폴리오 사이트</DescriptionText>
            </BackCard>
          </Card>
        </Flip>
      </CardContainer>
      <div id="gallery-bod">
        <div className="gallery-index">
          <text>-------------------------------------</text>
          <text className="gallery-title">
            2021
            <br />
            Busan
          </text>
          <text className="gallery-description">
            MinKyu HyunWoo WooHyun <br />
            Haewoondae Gwangan-ri
          </text>
        </div>
        <img src={busan1} />
        <img src={busan2} />
      </div>
    </MainContainer>
  );
};
export default Works;
