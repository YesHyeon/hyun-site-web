import React from "react";
import "./gallery.css";
import axios from "axios";

const GalleryPage = () => {
  const [photos, setPhotos] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("https://4f9c32a1-8ce8-438a-8543-7ffc29e830b3.mock.pstmn.io/gallery")
      .then((result) => {
        setPhotos(result.data.jejudo);
      })
      .catch((error) => {
        console.log("에러발생", error);
      });
  }, []);

  return (
    <div id="gallery-body">
      <h1>Welcome JEJU!</h1>
      <div id="photo-list">
        {photos.map((photo, index) => {
          // eslint-disable-next-line jsx-a11y/alt-text
          return <img key={index} src={photo.imgUrl} />;
        })}
      </div>
      <h1>Welcome Busan!</h1>
      <div id="photo-list">
        {photos.map((photo, index) => {
          // eslint-disable-next-line jsx-a11y/alt-text
          return <img key={index} src={photo.imgUrl} />;
        })}
      </div>
      <h1>Welcome Gangneung!</h1>
      <div id="photo-list">
        {photos.map((photo, index) => {
          // eslint-disable-next-line jsx-a11y/alt-text
          return <img key={index} src={photo.imgUrl} />;
        })}
      </div>
    </div>
  );
};
export default GalleryPage;
