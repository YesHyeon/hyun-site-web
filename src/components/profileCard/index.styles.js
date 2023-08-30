import styled from '@emotion/styled';

import { media } from '../../styles/theme';

export const MainContainer = styled.div`
  display: flex;
  position: absolute;

  flex-direction: column;
  width: calc(100vw - 150px);
  height: calc(100vh - 150px);
  margin: 0 auto;
  left: 0px;
  right: 0px;

  align-items: center;
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;

  gap: 50px;

  ${media.mobile} {
    width: calc(100vw - 10px);
    gap: 0px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  /* position: sticky; */
  top: 0px;
  width: 100%;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.2);
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

export const CloseButton = styled.div`
  width: 10px;
  font-size: 20px;
  margin-right: 20px;
  cursor: pointer;
`;

export const BodyContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;

  ${media.mobile} {
    flex-direction: column;
  }
`;

export const TextContainer = styled.div`
  font-size: 15px;
  margin-left: 100px;
  font-family: 'NanumSquareR';

  ${media.mobile} {
    margin-left: 0px;
    padding-inline: 30px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 250px;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-left: 100px;

  ${media.mobile} {
    flex-direction: column;
    gap: 5px;
    margin-top: 300px;
    margin-bottom: 10px;
    margin-left: 0px;
  }
`;

export const SnsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const Sns = styled.img`
  width: 45px;
  cursor: pointer;

  :hover {
    transform: scale(1.2);
    transition: 0.5s;
  }

  ${media.mobile} {
    width: 30px;
  }
`;

export const Profile = styled.img`
  width: 300px;
  border-radius: 30px;

  ${media.mobile} {
    width: 200px;
    height: 200px;
    border-radius: 30px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Name = styled.div`
  font-family: 'BlackHanSans';
  font-size: 50px;
  margin-right: 10px;
`;

export const Job = styled.div`
  font-family: bold;
`;

export const Description = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const DescriptionText = styled.li`
  font-family: 'NanumSquareR';
`;
