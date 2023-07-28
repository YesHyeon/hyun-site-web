import styled from '@emotion/styled';
import roomStartBack from '../../images/banners/background1.png';
import card from '../../images/introduce/card.png';

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

  padding-left: 150px;
`;

export const Hand = styled.img`
  width: 800px;
  position: absolute;
  right: 0px;

  height: ${(props) => props.scrollPosition};

  animation: open 1s linear;

  @keyframes open {
    0% {
      right: calc(-100vw);
    }

    100% {
      right: 0px;
    }
  }
`;

export const ProfileCardWrapper = styled.div`
  right: 300px;
  background-color: white;
  background-image: url(${card});
  background-size: cover;
  width: 280px;
  height: 140px;
  transform: rotate(45deg);
  position: absolute;
  object-fit: cover;
  box-shadow: 2px 2px black;
  cursor: pointer;

  animation: open2 1s linear;

  @keyframes open2 {
    0% {
      right: calc(-80vw);
    }

    100% {
      right: 300px;
    }
  }

  :hover {
    background-color: black;
    width: 320px;
    height: 160px;
    box-shadow: 4px 4px gray;
    transition: 1s;
  }
`;
