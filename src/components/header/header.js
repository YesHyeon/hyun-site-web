import { Link } from 'react-scroll';
import profileImage from '../../assets/images/introduce/hyun-profile.png';
import { MainContainer, HeaderWrapper, HeaderList } from './header.styles';

function Headers() {
  return (
    <MainContainer>
      <HeaderWrapper>
        <Link to="IntroduceBody" spy={true} smooth={true} offset={-51}>
          <HeaderList>Introduce</HeaderList>
        </Link>
        <HeaderList>Award</HeaderList>
        <HeaderList>Certification</HeaderList>
        <HeaderList style={{ 'font-size': 20 }}>노현의 이력서</HeaderList>
        <HeaderList>Activity</HeaderList>
        <HeaderList>Project</HeaderList>
        <HeaderList>SNS</HeaderList>
      </HeaderWrapper>
    </MainContainer>
  );
}
export default Headers;
