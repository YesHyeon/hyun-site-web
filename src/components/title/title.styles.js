import styled from '@emotion/styled';

export const MainContainer = styled.header`
  position: sticky;
  text-align: center;
  top: 0px;
  font-size: 150px;
  font-family: 'MontserratBold';
  margin: 0 auto;
  height: 150px;

  font-size: 100px;
  color: #fff;
  animation: neonGlow 2s infinite alternate;

  &:before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    color: #000;
    z-index: -1;
  }

  @keyframes neonGlow {
    0% {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #00bbff,
        0 0 30px #00bbff, 0 0 40px #00bbff, 0 0 50px #00bbff, 0 0 60px #00ff15;
    }
    20% {
      text-shadow: none;
    }
    100% {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #00bbff,
        0 0 40px #00bbff, 0 0 50px #00bbff, 0 0 60px #00bbff, 0 0 70px #00bbff;
    }
  }
`;
