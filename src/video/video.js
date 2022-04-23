import "./video.css";

const GalleryMainPage = () => {
  return (
    <div id="gallery">
      <div id="gallery-bod">
        <img src="/images/gallery/jejudo3.jpeg" />
        <img src="/images/gallery/jejudo8.jpeg" />
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
        <img src="/images/gallery/busan1.jpeg" />
        <img src="/images/gallery/busan6.jpeg" />
      </div>
    </div>
  );
};
export default GalleryMainPage;
