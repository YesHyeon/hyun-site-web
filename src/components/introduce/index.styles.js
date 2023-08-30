import styled from '@emotion/styled';
import card from '../../assets/images/introduce/card.png';
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

  scale: 1;
`;

export const Title = styled.div`
  margin-left: 20px;
  font-family: 'BlackHanSans';
  font-size: 300px;
  line-height: 280px;
  transform: rotate(-10deg);
  color: transparent;
  white-space: pre-line;

  :hover {
    cursor: pointer;
    content: 'Click';
  }

  ::after {
    position: absolute;
    left: 1px;
    top: 10px;
    content: 'About Me';
    color: transparent;
    -webkit-text-stroke: 3px green;
  }

  ::before {
    position: absolute;
    left: 1px;
    top: -10px;
    content: 'About Me';
    color: transparent;
    -webkit-text-stroke: 3px red;
  }

  .introduce-title-animation {
    animation: titleAnimation 1s linear;
  }

  @keyframes titleAnimation {
    0% {
      font-size: 240px;
    }

    100% {
      font-size: 50px;
      transform: rotate(0deg);
    }
  }

  ${media.mobile} {
    font-size: 5rem;
    line-height: 9rem;

    ::before {
      -webkit-text-stroke: 3px rgba(0, 0, 0, 0.5);
    }
  }
`;

export const Hand = styled.img`
  width: 700px;
  position: absolute;
  right: -10px;

  height: ${(props) => props.scrollPosition};

  animation: ${slideRightHandAnimation} 1s linear;

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
  animation-duration: 1s, 6s;
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
