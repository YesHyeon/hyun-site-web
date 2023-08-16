import styled from '@emotion/styled';

export const MainContainer = styled.div`
  width: 100%;
  height: 150rem;
  position: sticky;
  top: 10rem;
  align-self: center;

  padding: 0 4.2rem;
  box-sizing: border-box;
  max-width: 144rem;
`;

export const Title = styled.div`
  position: sticky;
  text-align: center;
  top: 0px;
  font-size: 100px;
  font-family: 'MontserratBold';
  margin: 0 auto;

  background: url(https://i.ibb.co/RDTnNrT/animated-text-fill.png) repeat-y;
  -webkit-background-clip: text;

  -webkit-text-fill-color: transparent;

  -webkit-animation: aitf 80s linear infinite;
`;

export const Title2 = styled.div`
  width: 100%;
  height: 70rem;
  position: sticky;
  top: 10rem;
`;

export const Title3 = styled.div`
  letter-spacing: 0;
  padding: 0.25em 0 0.325em;
  display: block;
  margin: 0 auto;
  text-shadow: 0 0 80px rgba(255, 255, 255, 0.5);

  background: url(https://i.ibb.co/RDTnNrT/animated-text-fill.png) repeat-y;
  -webkit-background-clip: text;
  background-clip: text;

  -webkit-text-fill-color: transparent;
  -webkit-animation: aitf 80s linear infinite;

  -webkit-transform: translate3d(0, 0, 0);
  -webkit-backface-visibility: hidden;
`;
