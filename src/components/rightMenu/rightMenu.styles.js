import styled from '@emotion/styled';

export const MainContainer = styled.div`
  position: sticky;
  top: 0px;

  width: 300px;
  height: 100vh;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  left: 0px;
  z-index: 300;
  background-color: white;
  border: 1px solid black;

  animation: open 1s;

  display: flex;
  flex-direction: column;

  @keyframes open {
    0% {
      left: -300px;
    }

    100% {
      left: 0px;
    }
  }
`;

export const MenuTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  color: black;
`;

export const MenuText = styled.div`
  font-family: BlackHanSans;
  font-size: 10px;
  cursor: pointer;

  :hover {
    color: gray;
    animation: shaking 1s linear infinite;
    transform: scale(1.2);
  }

  @keyframes shaking {
    50% {
      color: #fff7b1;
    }
    100% {
      color: #fff280;
    }
  }
`;
