import styled from '@emotion/styled';
import { floatAnimation } from '../../utils/floatingAnimation';
import { Container, media } from '../../styles/theme';

export const MainContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  height: 200rem;
  margin-top: 100px;

  .background-title {
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    font-family: BlackHanSans;

    top: 12.5rem;
    position: sticky;

    display: flex;
    flex: 0 0 auto;
    white-space: nowrap;
    overflow: hidden;
    transition: 0.3s;
    font-size: 15rem;
    font-weight: bold;

    ${media.mobile} {
      font-size: 5rem;
      top: 300px;
    }

    .loop-text {
      padding-right: 10vw;
      animation: textLoop 20s linear infinite;

      @keyframes textLoop {
        0% {
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
        100% {
          -webkit-transform: translate3d(-100%, 0, 0);
          transform: translate3d(-100%, 0, 0);
        }
      }
    }
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 60vw;
  margin: 0 auto;
  gap: 30px;
  flex-wrap: wrap;

  ${media.mobile} {
    grid-template-columns: repeat(1, 1fr);
    width: 100vw;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 20rem;
  margin: 0 auto;
  border-radius: 30px;
  background-color: #ededed;

  animation-fill-mode: forwards;
  animation-name: cardSlideRightAnimation, ${floatAnimation};
  animation-delay: 0s, 1s;
  animation-duration: 1s, 6s;
  animation-timing-function: linear, ease-in-out;
  animation-iteration-count: 1, infinite;

  transition: 1s;

  :hover {
    width: 430px;
    height: 330px;
    cursor: pointer;

    box-shadow: 10px 25px 3px 0px rgba(0, 0, 0, 0.3);

    ${media.mobile} {
      width: 300px;
    }
  }

  img {
    width: 100%;
    height: 200px;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    margin-bottom: 10px;
  }

  .stack {
    display: flex;
    padding-left: 10px;
    margin-block: 10px;
    gap: 4px;
  }

  .stack-item {
    font-size: 13px;
    padding-block: 3px;
    padding-inline: 5px;
    font-family: 'NanumSquareR';
    background-color: black;
    border-radius: 10px;
    color: white;
    text-align: center;
  }

  .kr {
    padding-left: 10px;
    font-family: 'NanumSquareR';
    font-weight: bold;
  }

  .title {
    padding-left: 10px;
    font-family: 'MontserratBold';
    color: #bebcbc;
    font-size: 12px;
  }

  .date {
    padding-right: 10px;
    display: flex;
    flex-direction: column;
    align-items: end;
    font-family: 'MontserratThin';
    font-weight: bold;
  }

  ${media.mobile} {
    width: 300px;
  }
`;
