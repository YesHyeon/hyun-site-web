import styled from '@emotion/styled';

export const MainContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: black;
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
  width: 400px;
  height: 500px;
  position: relative;
  perspective: 1100px;
`;

export const Card = styled.div`
  position: relative;
  transition: 0.4s;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  cursor: pointer;

  :hover {
    transform: rotateY(180deg);
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
`;
