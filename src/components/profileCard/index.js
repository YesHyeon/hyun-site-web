import { useEffect } from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';

import '../../assets/fonts/index';
import profileImage from '../../assets/images/introduce/profile.png';
import {
  Header,
  BodyContainer,
  MainContainer,
  CloseButton,
  TextContainer,
  ImageContainer,
  Profile,
  TitleContainer,
  Name,
  Job,
  Description,
  DescriptionText,
  SnsContainer,
  Sns,
  Wrapper,
} from './index.styles';
import github from '../../assets/images/icons/github.svg';
import blog from '../../assets/images/icons/blog.svg';
import email from '../../assets/images/icons/email.svg';
import { PROFILE } from '../../constants/profileCard';

const ProfileCard = (props) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  const handleCloseClick = () => {
    document.body.style.overflow = 'unset';
    props.setCardPosition(false);
  };

  return (
    <Wrapper>
      <MainContainer>
        <Header>
          <CloseButton onClick={handleCloseClick}>X</CloseButton>
        </Header>
        <BodyContainer>
          <ImageContainer>
            <Profile
              width="250px"
              className="profile1"
              src={profileImage}
              alt="profile"
            />
            <SnsContainer>
              <Sns
                src={github}
                onClick={() => window.open('https://github.com/YesHyeon')}
              ></Sns>
              <Sns
                src={blog}
                onClick={() => window.open('https://yeshyun.tistory.com')}
              ></Sns>
              <Sns
                src={email}
                onClick={() => window.open('https://yeshyun.tistory.com')}
              ></Sns>
            </SnsContainer>
          </ImageContainer>
          <TextContainer>
            <TitleContainer>
              <Name>{PROFILE.name}</Name>
              <Job>{PROFILE.position}</Job>
            </TitleContainer>
            <Description>
              {PROFILE.description.map((item) => {
                return <DescriptionText>{item}</DescriptionText>;
              })}
            </Description>
          </TextContainer>
        </BodyContainer>
      </MainContainer>
    </Wrapper>
  );
};

export default ProfileCard;
