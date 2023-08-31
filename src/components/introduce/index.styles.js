import styled from '@emotion/styled';
import card from '../../assets/images/introduce/card.webp';
import { floatAnimation } from '../../utils/floatingAnimation';
import { Container, media } from '../../styles/theme';
import {
  slideRightCardAnimation,
  slideRightCardAnimationForMobile,
} from '../../utils/slideRightCardAnimation';
import { slideRightHandAnimation } from '../../utils/slideRightHandAnimation';

export const MainContainer = styled(Container)`
  display: flex;

  flex-direction: row;

  align-items: center;

  overflow-x: hidden;
  overflow-y: hidden;

  font-size: 280px;

  ${media.mobile} {
    font-size: 100px;
  }
  scale: 1;
`;

export const Title = styled.div`
  margin-left: 20px;
  font-size: 280px;
  margin-top: 60px;
  line-height: 280px;

  transform: rotate(-8deg);
  white-space: pre-line;

  animation: titleAnimation 1s forwards;

  @keyframes titleAnimation {
    0% {
      font-size: 1em;
    }

    100% {
      font-size: 1.2em;
      transform: rotate(0deg);
    }
  }

  ${media.mobile} {
    line-height: 24rem;
  }
`;

export const Hand = styled.img`
  width: 700px;
  position: absolute;
  right: -10px;

  height: ${(props) => props.scrollPosition};

  animation: ${slideRightHandAnimation} 0.7s linear;

  ${media.mobile} {
    width: 20rem;
  }
`;

export const ProfileCardWrapper = styled.div`
  right: 300px;
  background-color: white;
  background-image: url(${card});
  background-size: cover;
  width: 280px;
  height: 140px;
  rotate: 45deg;
  position: absolute;
  object-fit: cover;
  box-shadow: 0 3px 3px 0px rgba(0, 0, 0, 0.7);

  cursor: pointer;

  animation-fill-mode: forwards;
  animation-name: ${slideRightCardAnimation}, ${floatAnimation};
  animation-delay: 0s, 1s;
  animation-duration: 0.7s, 6s;
  animation-timing-function: linear, ease-in-out;
  animation-iteration-count: 1, infinite;

  :hover {
    width: 320px;
    height: 160px;
    box-shadow: 10px 25px 3px 0px rgba(0, 0, 0, 0.3);
    transition: 1s;
  }

  ${media.mobile} {
    width: 150px;
    height: 80px;

    animation-name: ${slideRightCardAnimationForMobile}, ${floatAnimation};
  }
`;

export const LeftContainer = styled.div`
  width: 750px;
  height: 100%;
  display: flex;
  flex-direction: row;
  margin-left: 50px;
  opacity: 0;

  transition: 1s;
`;
