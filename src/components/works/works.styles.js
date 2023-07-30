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

  :hover {
    transform: rotateY(180deg);
  }
`;

export const CardAnimation = styled.div`
  position: relative;
  transition: 1s;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  cursor: pointer;

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

export const FrontCard = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;

  align-items: center;
  color: #fff;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 30px 10px 0px rgba(0, 0, 0, 0.8);
`;

export const FrontImage = styled.img`
  width: calc(100% - 28px);
  padding-left: 10px;
  height: 450px;
  padding-top: 19px;
`;

export const FrontText = styled.div`
  width: 100%;
  color: black;
  padding-top: 30px;
  padding-left: 14px;
`;

export const BackCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;

  border-radius: 10px;
  color: black;
  padding: 30px;

  background-color: white;

  transform: rotateY(180deg);

  box-shadow: 0px 30px 10px 0px rgba(0, 0, 0, 0.8);
`;

export const BackCardName = styled.div`
  font-size: 30px;
`;

export const BackCardTitle = styled.div`
  font-size: 20px;
`;

export const BackCardList = styled.ul``;

export const BackCardListli = styled.li``;

export const BackCardText = styled.div`
  font-size: 15px;
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
