import styled from '@emotion/styled';
import roomStartBack from '../../assets/images/banners/background1.png';
import card from '../../assets/images/introduce/card.png';
import { floatAnimation } from '../../utils/floatingAnimation';
import introduceBackground from '../../assets/images/introduce/introduceBackground.svg';

export const MainContainer = styled.div`
  display: flex;

  position: relative;
  width: 100%;
  height: 100vh;

  flex-direction: row;

  align-items: center;
  gap: 20px;

  border-bottom: 3px solid black;

  background-image: url(${introduceBackground});
  background-color: black;
  overflow-x: hidden;
  overflow-y: hidden;

  scale: 1;
`;

export const Hand = styled.img`
  width: 800px;
  position: absolute;
  right: -10px;

  height: ${(props) => props.scrollPosition};

  animation: open 1s linear;

  @keyframes open {
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

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  height: 100%;
  padding-top: 150px;
  padding-right: 20px;
`;

export const DescriptionWrapper = styled.div`
  color: white;
`;

export const DescriptionTitle = styled.div`
  font-size: 30px;
  font-family: 'MontserratBold';
  border-bottom: 2px solid white;
  padding-bottom: 3px;

  transition: 2s;
`;

export const DescriptionText = styled.div`
  padding-top: 5px;
  font-size: 15px;
  font-family: 'NanumSquareR';
`;
