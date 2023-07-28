import styled from '@emotion/styled';
import roomStartBack from '../../images/banners/background1.png';
import profle from '../../images/introduce/emojiProfile.svg';

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

  animation: open 3s;

  @keyframes open {
    0% {
      right: -150px;
    }

    100% {
      right: 0px;
    }
  }
`;
