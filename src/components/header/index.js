import { Link } from 'react-scroll';
import {
  MainContainer,
  HeaderWrapper,
  HeaderList,
  LeftWrapper,
  RightWrapper,
} from './index.styles';

const Headers = () => {
  return (
    <MainContainer className="header">
      <HeaderWrapper>
        <LeftWrapper>Hyun</LeftWrapper>
        <RightWrapper>
          <Link to="IntroduceBody" spy={true} smooth={true} offset={-51}>
            <HeaderList>Introduce</HeaderList>
          </Link>
          <HeaderList>Work</HeaderList>
          <HeaderList>Project</HeaderList>
          <HeaderList>Activity</HeaderList>
          <HeaderList>Certificate</HeaderList>
          <HeaderList>Education</HeaderList>
        </RightWrapper>
      </HeaderWrapper>
    </MainContainer>
  );
};
export default Headers;
