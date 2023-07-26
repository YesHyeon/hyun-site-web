import styled from '@emotion/styled';
import roomStartBack from '../../images/banners/background1.png';

export const MainContainer = styled.div`
  display: flex;

  position: relative;
  width: 100%;
  height: 100vh;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;

  background-size: cover;

  border-bottom: 3px solid black;
  overflow-x: hidden;
  overflow-y: hidden;
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
  background-color: pink;
  position: absolute;
  top: 100px;
  transform: rotate(-2deg);
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

export const Main = styled.div``;
