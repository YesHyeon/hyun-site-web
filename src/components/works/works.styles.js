import styled from '@emotion/styled';

export const MainContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: white;
`;

export const CardContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding-top: 200px;
  padding-left: 90px;
  gap: 30px;
`;

export const Flip = styled.div`
  width: 450px;
  height: 550px;
  position: relative;
  perspective: 1100px;
`;

export const Card = styled.div`
  position: relative;
  transition: 1s;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  cursor: pointer;

  /* :hover {
    transform: rotateY(180deg);
  } */

  animation: lota 2s ease 1;

  transform: rotateY(0deg);

  /* @keyframes lota {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(-180deg);
    }
  } */
`;

export const CardAnimation = styled.div`
  position: relative;
  transition: 1s;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  cursor: pointer;

  /* :hover {
    transform: rotateY(180deg);
  } */

  animation: lota 2s ease 1;

  transform: rotateY(180deg);

  @keyframes lota {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(-180deg);
    }
  }
`;

export const FrontCard = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  box-shadow: 8px 50px 50px 0px rgba(155, 103, 0, 0.7);
`;

export const BackCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  background: royalblue;

  transform: rotateY(180deg);

  box-shadow: 8px 16px 100px 0px rgba(155, 103, 0, 0.7);
`;

export const DescriptionTitle = styled.div`
  font-size: 30px;
  font-family: 'NanumSquareR';
  font-weight: bold;
  border-bottom: 2px solid white;
  padding-bottom: 3px;
`;

export const DescriptionText = styled.div`
  padding-top: 5px;
  font-size: 16px;
  font-family: 'NanumSquareR';
`;
