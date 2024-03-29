import styled from '@emotion/styled';
import { Container, media } from '../../styles/theme';

export const MainContainer = styled(Container)`
  display: flex;

  flex-direction: row;
  justify-content: center;

  align-items: center;
  gap: 20px;

  overflow-x: hidden;
  overflow-y: hidden;

  background-color: white;

  ${media.mobile} {
    flex-direction: column;
  }
`;

export const ProfileImage = styled.img`
  width: 350px;

  ${media.mobile} {
    width: 200px;
  }
`;

export const OpacityBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.5;
`;

export const Title = styled.div`
  font-family: 'Babylonica', cursive;
  font-size: 200px;
`;

export const Description = styled.div`
  font-family: 'BlackHanSans';
  font-size: 3rem;

  color: ${(props) =>
    props.index === 0
      ? '#761F1F'
      : props.index === 1 || props.index === 2
      ? '#14118A'
      : props.index === 3
      ? '#14461C'
      : 'black'};

  ${media.mobile} {
    font-size: 1.8rem;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${media.mobile} {
    align-items: center;
    gap: 10px;
  }
`;

export const TypingWrapper = styled.div`
  display: flex;
  height: 4.4rem;

  ${media.mobile} {
    height: 2.5rem;
  }
`;

export const Blink = styled.div`
  border-right: 0.2rem solid black;

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
`;

export const Flag = styled.div`
  display: flex;
  flex-direction: low;
  width: 4000px;
  height: 50px;
  align-items: center;

  background-color: black;
  color: white;
  position: absolute;
  bottom: 100px;

  gap: 10px;
`;

export const FlagText = styled.div`
  font-size: 20px;
  animation: left 10s ease-in-out infinite;
  font-family: 'BlackHanSans';

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
