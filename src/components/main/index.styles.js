import styled from '@emotion/styled';
import roomStartBack from '../../images/banners/background1.png';

export const MainContainer = styled.div`
  background-image: url(${roomStartBack});
  background-size: cover;
  width: 100%;
  height: 100vh;
  border-bottom: 3px solid black;
  overflow-x: hidden;
`;

export const Title = styled.div`
  font-family: 'Babylonica', cursive;
  font-size: 200px;
  color: #fff;
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

export const Main = styled.div``;
