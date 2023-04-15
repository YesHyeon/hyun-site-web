import './video.css';
import jejudo1 from '../../images/gallery/jejudo3.jpeg';
import jejudo2 from '../../images/gallery/jejudo8.jpeg';
import busan1 from '../../images/gallery/jejudo6.jpeg';
import busan2 from '../../images/gallery/busan1.jpeg';

const GalleryMainPage = () => {
  return (
    <div id="gallery">
      <div id="gallery-bod">
        <img src={jejudo1} />
        <img src={jejudo2} />
        <div className="gallery-index">
          <text>-------------------------------------</text>
          <text className="gallery-title">
            2021
            <br />
            JEJUDO
          </text>
          <text className="gallery-description">
            HyunWoo WooHyun YeongEun <br />
            Aewol Seogwipo Woodo Handong-ri
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
    </div>
  );
};
export default GalleryMainPage;
