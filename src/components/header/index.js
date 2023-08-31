import { Link } from 'react-scroll';
import {
  MainContainer,
  HeaderWrapper,
  HeaderList,
  LeftWrapper,
  RightWrapper,
} from './index.styles';

const LIST = ['Introduce', 'Work', 'Project', 'Activity', 'Education'];

const Headers = (props) => {
  const handleListClick = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <MainContainer className="header">
      <HeaderWrapper>
        <LeftWrapper>Hyun</LeftWrapper>
        <RightWrapper>
          {LIST.map((item, index) => {
            return (
              <HeaderList
                onClick={() => {
                  handleListClick(props.refs[index]);
                }}
              >
                {item}
              </HeaderList>
            );
          })}
        </RightWrapper>
      </HeaderWrapper>
    </MainContainer>
  );
};
export default Headers;
