import styled from '@emotion/styled';

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;

  position: absolute;
  width: 100vw;
  height: 100vh;

  overflow-y: hidden;
`;

export const RainItem = styled.div`
  font-size: 30px;

  animation: fallrain 3s linear;

  animation-delay: ${(props) => props.delay2};

  @keyframes fallrain {
    0% {
      opacity: 0;
    }
    30% {
      opacity: 0.4;
    }
    90% {
      opacity: 0.9;
    }
    100% {
      opacity: 1;
      transform: translateY(100%);
    }
  }
`;
