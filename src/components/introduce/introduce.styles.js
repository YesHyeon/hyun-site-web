import styled from '@emotion/styled';
import roomStartBack from '../../assets/images/banners/background1.png';
import card from '../../assets/images/introduce/card.png';
import { floatAnimation } from '../../utils/floatingAnimation';
import introduceBackground from '../../assets/images/introduce/introduceBackground.svg';

export const MainContainer = styled.div`
  display: flex;

  width: 100%;
  height: 100vh;

  flex-direction: row;

  align-items: center;

  overflow-x: hidden;
  overflow-y: hidden;

  scale: 1;
`;

export const Title = styled.div`
  font-family: 'BlackHanSans';
  font-size: 240px;
  transform: rotate(-10deg);
  line-height: 280px;
  color: transparent;

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
`;

export const Hand = styled.img`
  width: 700px;
  position: absolute;
  right: -10px;

  height: ${(props) => props.scrollPosition};

  animation: handOpen 1s linear;

  @keyframes handOpen {
    0% {
      right: calc(-100vw);
    }

    100% {
      right: -10px;
    }
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

  @keyframes cardSlideRightAnimation {
    0% {
      right: calc(-80vw);
    }

    100% {
      right: 300px;
    }
  }

  animation-fill-mode: forwards;
  animation-name: cardSlideRightAnimation, ${floatAnimation};
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
