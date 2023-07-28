import '../../fonts/index';
import './profileCard.css';
import profileImage from '../../images/introduce/hyun-profile.png';
import {
  Header,
  BodyContainer,
  MainContainer,
  CloseButton,
  Description,
  ImageContainer,
  Profile,
} from './profileCard.styles';

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
          ></Profile>
        </ImageContainer>
        <Description>
          <div id="TitleContainer">
            <div className="Name">
              <div>노현</div>
            </div>
            <div className="Job">Front-End Engineer</div>
          </div>
          <div>
            <div className="Description2">"Fearless Hero in life"</div>
            <div>
              두려움이 없는 인생의 주인공이라는 신념 하나로 <br /> 늘 새로움에
              도전하고, 발전해나갑니다.
              <br />
              밝고 긍정적인 저로 인해 주변 사람들이 행복해하면 활력을 얻습니다 :
              )
              <br />
              그리고 반려견 삼순이와 함께 즐거운 인생을 살아갑니다 !
            </div>
          </div>
          <div>--------------------------------------------------</div>
          <div>🏛 EDUCATION | KyungHee Univ. IE & SW</div>
          <div>
            🐱 GITHUB | 예스현, 깃허브
            <a href="https://github.com/YesHyeon"> ⇢ </a>
          </div>
          <div>
            📚 TISTORY | 로현, 청춘의 개발
            <a href="https://yeshyun.tistory.com/"> ⇢ </a>
          </div>
          <div>
            🍀 NAVER | 로현, 청춘의 기록
            <a href="https://blog.naver.com/hyun_record"> ⇢ </a>
          </div>
          <div>📞 CONTACT | shgus1224@naver.com</div>
        </Description>
      </BodyContainer>
    </MainContainer>
  );
};

export default ProfileCard;
