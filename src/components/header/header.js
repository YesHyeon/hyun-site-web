import { Link } from 'react-scroll';
import profileImage from '../../images/introduce/hyun-profile.png';
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
        <HeaderList>Activity</HeaderList>
        <HeaderList>Project</HeaderList>
        <HeaderList>SNS</HeaderList>
      </HeaderWrapper>
    </MainContainer>
  );
}
export default Headers;
