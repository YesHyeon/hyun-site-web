import styled from '@emotion/styled';

export const MainContainer = styled.div`
  display: flex;
  position: fixed;
  top: 30px;
  left: 0;
  z-index: 100;

  flex-direction: column;
  align-items: center;

  width: calc(100vw - 200px);
  height: calc(100vh - 100px);
  margin: 0 auto;
  left: 0px;
  right: 0px;

  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.2);
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;

  .button {
    width: 10px;
    font-size: 20px;
    padding-right: 50px;
    cursor: pointer;
  }
`;

export const BodyContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding-left: 30px;
`;

export const TextContainer = styled.div`
  width: 50%;
  font-size: 15px;
  font-family: 'NanumSquareR';
  height: 100%;

  overflow-y: scroll;
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const SnsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const Sns = styled.img`
  width: 30px;
  cursor: pointer;

  :hover {
    transform: scale(1.2);
    transition: 0.5s;
  }
`;

export const Profile = styled.img`
  width: 200px;
  height: 200px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  .kr {
    font-family: 'BlackHanSans';
    font-size: 30px;
    margin-right: 10px;
  }

  .title {
    font-family: bold;
  }

  .date {
    color: grey;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  padding: 30px;

  font-family: 'NanumSquareR';

  .description {
    font-weight: bold;
  }

  .description-list {
    white-space: pre-line;
  }
`;

export const DescriptionText = styled.li``;
