import React, { useState } from 'react';
import './gallery.css';
import axios from 'axios';

const GalleryPage = () => {
  const [images, setImages] = useState([]);
  React.useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/gallery`)
      .then((result) => {
        setImages(result.data);
      })
      .catch((error) => {
        console.log('에러발생', error);
      });
  }, []);

  console.log(images);
  return (
    <div id="gallery-body">
      <h1>Welcome JEJU!</h1>
      <div id="photo-list">
        {images.jejudo &&
          images.jejudo.map((photo, index) => {
            console.log(photo);
            // eslint-disable-next-line jsx-a11y/alt-text
            return (
              // eslint-disable-next-line jsx-a11y/alt-text
              <img
                key={index}
                src={require(`../../images/gallery/${photo.imgUrl}.jpeg`)}
              />
            );
          })}
      </div>
      <h1>Welcome Busan!</h1>
      <div id="photo-list">
        {images.busan &&
          images.busan.map((photo, index) => {
            // eslint-disable-next-line jsx-a11y/alt-text
            return (
              // eslint-disable-next-line jsx-a11y/alt-text
              <img
                key={index}
                src={require(`../../images/gallery/${photo.imgUrl}.jpeg`)}
              />
            );
          })}
      </div>
      <h1>Welcome Gangneung!</h1>
      <div id="photo-list">
        {images.gangneung &&
          images.gangneung.map((photo, index) => {
            // eslint-disable-next-line jsx-a11y/alt-text
            return (
              // eslint-disable-next-line jsx-a11y/alt-text
              <img
                key={index}
                src={require(`../../images/gallery/${photo.imgUrl}.jpeg`)}
              />
            );
          })}
      </div>
    </div>
  );
};
export default GalleryPage;
