import styled from '@emotion/styled';

import { media } from '../../styles/theme';

export const MainContainer = styled.div`
  width: 100%;
  height: 150rem;
  top: 10rem;
  align-self: center;
  box-sizing: border-box;
  max-width: 144rem;

  .background-title {
    height: 100vh;
    font-size: 300px;
    position: sticky;
    top: 30px;
    /* font-family: 'BlackHansans'; */
    display: flex;
    justify-content: center;
    transition: 2s;

    opacity: 0;

    font-size: 300px;

    color: black;

    ${media.mobile} {
      font-size: 100px;
      top: 200px;
    }

    @keyframes up {
      0% {
        transform: translateY(1000px);
      }
      100% {
        transform: translateY(0px);
        opacity: 1;
      }
    }

    @keyframes down {
      0% {
        transform: translateY(0px);
        opacity: 1;
      }
      100% {
        transform: translateY(300px);
        font-size: 500px;
        /* align-items: flex-end; */
        color: rgba(0, 0, 0, 0.1);
        opacity: 1;

        ${media.mobile} {
          font-size: 100px;
        }
      }
    }
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 120rem;
  padding-top: 50px;
  padding-right: 20px;
  flex-grow: 1 1;
  transition: 3s;
`;

export const DescriptionWrapper = styled.div`
  color: black;
  width: 50%;
  position: sticky;
  top: 100px;
  height: 100vh;
  transition: 1s;
  padding-left: 30px;

  &:nth-child(1) {
    align-items: start;
  }
  &:nth-child(2) {
    flex-direction: column;
    align-items: end;
    left: 50%;

    ${media.mobile} {
      left: 0%;
      background-color: white;
    }
  } /* &:nth-child(3) {
    display: flex;
    flex-direction: column;
    
  } */
  ${media.mobile} {
    width: 100%;
    top: 55px;
  }

  .box {
    font-family: 'MontserratBold';
  }

  .company-wraaper {
    ${media.mobile} {
      display: flex;
      flex-direction: row;
    }
  }

  .title {
    font-size: 50px;
    font-family: 'MontserratBold';
    border-bottom: 2px solid black;
    margin-bottom: 10px;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    background-image: linear-gradient(
      180deg,
      #ffb6ff,
      #b344ff 10%,
      #ae38ff 33%,
      #ffb6ff 45%,
      #ffe3ff 50%,
      #ffb6ff 66%,
      #b344ff
    );
    background-size: 100% 300%;

    animation: gradient 2s infinite ease-in;

    @keyframes gradient {
      from {
        background-position-y: 0%;
      }
      to {
        background-position-y: 100%;
      }
    }
    /* animation: gradient 1s ease infinite; */

    /* @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    } */
  }

  .company {
    padding-top: 5px;
    font-size: 30px;
    font-family: 'MontserratBold';
    font-weight: bold;

    ${media.mobile} {
      padding-top: 20px;
      padding-left: 20px;
    }
  }

  .date,
  .team,
  .stack {
    font-family: 'MontserratSemibold';
  }

  .info {
    height: 270px;
  }

  .main {
    font-weight: bold;
    font-family: 'NanumSquareR';
    margin-bottom: 20px;
    box-shadow: inset 0 -10rem 0 #dbdbdbeb;
  }

  .sub {
    font-weight: 400;
    font-family: 'NanumSquareR';
    white-space: pre-line;
    padding-bottom: 10px;
  }
`;

export const DescriptionTitle = styled.text`
  font-size: 30px;
  font-family: 'MontserratBold';
  border-bottom: 2px solid white;
  padding-bottom: 3px;
  box-shadow: inset 0 -20px 0 #ffff6f;

  transition: 2s;
`;

export const DescriptionText = styled.div`
  padding-top: 5px;
  font-size: 15px;
  font-family: 'NanumSquareR';
`;
