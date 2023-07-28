import './video.css';
import jejudo1 from '../../images/gallery/jejudo3.jpeg';
import jejudo2 from '../../images/gallery/jejudo8.jpeg';
import busan1 from '../../images/gallery/jejudo6.jpeg';
import busan2 from '../../images/gallery/busan1.jpeg';
import RightMenu from '../rightMenu/rightMenu';
import { MainContainer } from './works.styles';

const Works = () => {
  return (
    <MainContainer>
      <RightMenu />
      <div id="gallery-bod">
        <img src={jejudo1} />
        <img src={jejudo2} />
        <div className="gallery-index">
          <text>-------------------------------------</text>
          <text className="gallery-title">Work</text>
          <text className="gallery-description">
            NHN Cloud <br />
            펫페오톡
          </text>
        </div>
      </div>
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
