import styled from '@emotion/styled';

export const MainContainer = styled.div`
  position: absolute;
  width: 300px;
  height: 100%;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  right: 0px;
  background-color: black;

  display: flex;
  justify-content: center;
  align-items: center;

  animation: open 1s;

  @keyframes open {
    0% {
      right: -300px;
    }

    100% {
      right: 0px;
    }
  }
`;

export const MenuTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  color: white;
`;

export const MenuText = styled.div`
  font-family: BlackHanSans;
  font-size: 30px;
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
