import styled from '@emotion/styled';
import roomStartBack from '../../images/banners/background1.png';

export const MainContainer = styled.div`
  display: flex;

  position: relative;
  width: 100%;
  height: 100vh;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  background-image: url(${roomStartBack});
  background-size: cover;

  border-bottom: 3px solid black;
  overflow-x: hidden;

  isolation: isolate;

  ::after {
    content: '';
    position: absolute;
    background: white;
    z-index: -1;
    inset: 0;
    opacity: 0.8;
  }
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

export const Main = styled.div``;
