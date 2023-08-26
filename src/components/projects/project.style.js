import styled from '@emotion/styled';
import { floatAnimation } from '../../utils/floatingAnimation';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  height: 100%;
  margin-top: 100px;
`;

export const Header = styled.div`
  width: 105vw;
  margin: 0 auto;
  font-family: BlackHanSans;
  font-size: 2.5rem;

  top: 200px;
  position: sticky;

  display: flex;
  flex: 0 0 auto;
  white-space: nowrap;
  overflow: hidden;
  transition: 0.3s;
  font-size: 15rem;
  font-weight: bold;

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
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 60vw;
  margin: 0 auto;
  gap: 30px;
  flex-wrap: wrap;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 310px;
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
    background-color: #9da7ff;
    box-shadow: 10px 25px 3px 0px rgba(0, 0, 0, 0.3);
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
`;

export const Card = styled.div`
  width: 500px;
  height: 400px;
  background-color: black;
`;

export const CardDescriptionContainer = styled.div`
  width: calc(50% - 100px);
  display: flex;
  flex-direction: column;
`;

export const CardText = styled.div`
  background-color: red;
  font-family: 'NanumSquareR';
  font-size: 20px;
  color: black;
`;

export const CardLinkContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
`;
