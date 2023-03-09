import React, { useState } from 'react';
import './gallery.css';
import axios from 'axios';

const GalleryPage = () => {
  const [jejudo, setJejudo] = useState([]);
  const [busan, setBusan] = useState([]);
  const [gangneung, setGangneung] = useState([]);
  React.useEffect(() => {
    axios
      .get(
        'http://ec2-13-53-88-5.eu-north-1.compute.amazonaws.com:8082/gallery'
      )
      .then((result) => {
        setJejudo(result.data.jejudo);
        setBusan(result.data.busan);
        setGangneung(result.data.gangneung);
      })
      .catch((error) => {
        console.log('에러발생', error);
      });
  }, []);

  return (
    <div id="gallery-body">
      <h1>Welcome JEJU!</h1>
      <div id="photo-list">
        {jejudo.map((photo, index) => {
          // eslint-disable-next-line jsx-a11y/alt-text
          return <img key={index} src={photo.imgUrl} />;
        })}
      </div>
      <h1>Welcome Busan!</h1>
      <div id="photo-list">
        {busan.map((photo, index) => {
          // eslint-disable-next-line jsx-a11y/alt-text
          return <img key={index} src={photo.imgUrl} />;
        })}
      </div>
      <h1>Welcome Gangneung!</h1>
      <div id="photo-list">
        {gangneung.map((photo, index) => {
          // eslint-disable-next-line jsx-a11y/alt-text
          return <img key={index} src={photo.imgUrl} />;
        })}
      </div>
    </div>
  );
};
export default GalleryPage;
