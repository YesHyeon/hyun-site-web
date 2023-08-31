import '../../assets/fonts/index';
import 'react-image-gallery/styles/css/image-gallery.css';
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
import { useEffect } from 'react';

const ABOUTME = {
  name: '노현',
  position: 'Frontend Developer',
  description: [
    '안녕하세요 프론트엔드 공부 2년차 개발자 노현입니다.',
    '기술 블로그를 통해 생각을 정리하는 것을 좋아하고, IT 동아리에서 다양한 개발자들과 소통하는 것을 즐깁니다.',
    '긍정적이고 꼼꼼한 성격으로 프로젝트에서 주로 리더를 맡아 팀원들을 이끈 경험이 있습니다.',
    '평소 UI/UX 측면에서 개선점을 찾아 불편함을 해소하고, 최적화 하는 일에 관심이 많습니다.',
    '반복되는 일을 자동화하고 비효율적인 프로세스를 개선하는 등 효율성을 높이는 일을 좋아합니다. ',
    '유지 보수에 용이한 Clean 코드에 대한 고민을 즐깁니다.',
    "현재는 약속 시간 조율을 도와주는 '모두의 시간' 웹서비스와, 유튜브의 자동 자막을 보기 쉽게 제공하는 'CCC' 크롬 익스텐션 서비스를 개발하고 있습니다.",
  ],
};

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
              <Name>{ABOUTME.name}</Name>
              <Job>{ABOUTME.position}</Job>
            </TitleContainer>
            <Description>
              {ABOUTME.description.map((item) => {
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
