import styled from '@emotion/styled';

export const MainContainer = styled.div`
  display: flex;
  position: absolute;

  flex-direction: column;
  width: calc(100vw - 150px);
  height: calc(100vh - 100px);
  margin: 0 auto;
  left: 0px;
  right: 0px;

  align-items: center;
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
  z-index: 100;
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
`;

export const CloseButton = styled.div`
  width: 10px;
  font-size: 20px;
  margin-right: 20px;
  cursor: pointer;
`;

export const BodyContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.div`
  font-size: 15px;
  margin-left: 100px;
  font-family: 'NanumSquareR';
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 250px;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const SnsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const Sns = styled.img`
  width: 70px;
  height: 70px;
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
