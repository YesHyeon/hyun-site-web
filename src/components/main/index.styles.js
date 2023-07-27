import styled from '@emotion/styled';
import roomStartBack from '../../images/banners/background1.png';
import profle from '../../images/introduce/profile.png';

export const MainContainer = styled.div`
  display: flex;

  position: relative;
  width: 100%;
  height: 100vh;

  flex-direction: row;

  align-items: center;
  gap: 20px;

  border-bottom: 3px solid black;
  overflow-x: hidden;
  overflow-y: hidden;

  padding-left: 100px;
`;

export const ProfileImage = styled.img`
  width: 400px;
  height: 400px;
`;

export const OpacityBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background-color: red;
`;

export const Title = styled.div`
  font-family: 'Babylonica', cursive;
  font-size: 200px;
  color: 'black';
`;

export const Description = styled.div`
  font-family: 'BlackHanSans';
  font-size: 50px;
  color: black;

  color: ${(props) =>
    props.index === 0
      ? '#761F1F'
      : props.index === 1 || props.index === 2
      ? '#14118A'
      : props.index === 3
      ? '#14461C'
      : 'black'};
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TypingWrapper = styled.div`
  display: flex;
  height: 70px;
`;

export const Blink = styled.div`
  border-right: 3px solid black;
  animation: blink 1s infinite;
  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
`;

export const Svg = styled.svg`
  width: 229px;
  stroke: black;
  fill: black;
`;

export const RainWrapper = styled.div`
  width: 100%;
  height: 500px;
  background-color: red;
`;

export const Flag = styled.div`
  display: flex;
  flex-direction: low;
  width: 4000px;
  background-color: black;
  color: white;
  position: absolute;
  bottom: 200px;

  gap: 10px;
`;

export const FlagText = styled.div`
  font-size: 20px;
  animation: left 10s linear infinite;

  @keyframes left {
    50% {
      transform: translateX(-100px);
    }
    100% {
      transform: translateX(0px);
    }
  }
`;

export const RightMenu = styled.div`
  position: absolute;
  width: 300px;
  height: 100%;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  right: 0px;
  background-color: black;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  color: white;
`;

export const MenuText = styled.div`
  font-family: BlackHanSans;
  font-size: 30px;
  cursor: pointer;

  :hover {
    color: gray;
    animation: shaking 1s linear infinite;
    transform: scale(1.2);
  }

  @keyframes shaking {
    50% {
      color: #fff7b1;
    }
    100% {
      color: #fff280;
    }
  }
`;

export const Main = styled.div``;
