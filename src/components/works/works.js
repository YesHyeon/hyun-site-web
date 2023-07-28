import './video.css';
import jejudo1 from '../../images/gallery/jejudo3.jpeg';
import jejudo2 from '../../images/gallery/jejudo8.jpeg';
import busan1 from '../../images/gallery/jejudo6.jpeg';
import busan2 from '../../images/gallery/busan1.jpeg';
import RightMenu from '../rightMenu/rightMenu';
import {
  MainContainer,
  CardContainer,
  Card,
  FrontCard,
  BackCard,
  Flip,
} from './works.styles';
import Title from '../title/title';
import Profile from '../../images/introduce/profile.png';

const Works = () => {
  return (
    <MainContainer>
      <Title text={'Works'} />
      <RightMenu />
      <CardContainer>
        <Flip>
          <Card>
            <FrontCard src={Profile}></FrontCard>
            <BackCard></BackCard>
          </Card>
        </Flip>
        <Flip>
          <Card>
            <FrontCard src={Profile}></FrontCard>
            <BackCard></BackCard>
          </Card>
        </Flip>
      </CardContainer>
      <div id="gallery-bod">
        <div className="gallery-index">
          <text>-------------------------------------</text>
          <text className="gallery-title">
            2021
            <br />
            Busan
          </text>
          <text className="gallery-description">
            MinKyu HyunWoo WooHyun <br />
            Haewoondae Gwangan-ri
          </text>
        </div>
        <img src={busan1} />
        <img src={busan2} />
      </div>
    </MainContainer>
  );
};
export default Works;
