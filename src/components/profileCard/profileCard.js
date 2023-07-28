import '../../fonts/index';
import profileImage from '../../images/introduce/profile.png';
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
} from './profileCard.styles';
import github from '../../images/icons/github.svg';
import blog from '../../images/icons/blog.svg';
import email from '../../images/icons/email.svg';

const ProfileCard = (props) => {
  return (
    <MainContainer>
      <Header>
        <CloseButton onClick={() => props.setCardPosition(false)}>
          X
        </CloseButton>
      </Header>
      <BodyContainer>
        <ImageContainer>
          <Profile
            width="300"
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
            <Name>노현</Name>
            <Job>Front-End Developer</Job>
          </TitleContainer>
          <Description>
            <DescriptionText>
              안녕하세요 프론트엔드 개발자 노현입니다.
            </DescriptionText>
            <DescriptionText>
              평소 UI/UX의 문제점을 발견하여 개선하는 일에 관심이 많습니다.
            </DescriptionText>
            <DescriptionText>
              산업공학 출신으로 인간공학적인 측면으로 사용자의 경험을 높이다가,
              <br />
              현재는 프론트엔드 개발을 통해 사용자의 경험을 높이고 있습니다.
            </DescriptionText>
            <DescriptionText>
              활발하고 긍정적인 성격으로 팀원들과 협업하는 것을 좋아하고,
              <br />
              긍정적인 에너지를 전파하고 싶어합니다.
            </DescriptionText>
            <DescriptionText>
              도전하는 즐거움과 가치를 깨달으며 다양한 활동을 했습니다.
            </DescriptionText>
            <DescriptionText>
              감성이 풍부하여 예술적인 활동에 관심이 많고,
              <br />
              기술 블로그와 스터디를 통해 생각을 정리하는 것을 생활화합니다.
            </DescriptionText>
          </Description>
        </TextContainer>
      </BodyContainer>
    </MainContainer>
  );
};

export default ProfileCard;