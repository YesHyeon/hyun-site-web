import './App.css';
import MainPage from './components/main/index';
import Headers from './components/header/header';
import GalleryPage from './components/gallery/gallery.js';
import ProfileCard from './components/profileCard/profileCard';
import Introduce from './components/introduce/introduce';
import { Switch, Route } from 'react-router-dom';
import GalleryMainPage from './components/video/video';
import { useRef } from 'react';

function App() {
  const homeRef = useRef(HTMLDivElement);
  const onHomeClick = () => {
    homeRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="Main">
      <Switch>
        <Route exact={true} path={'/'}>
          <div ref={homeRef}>
            <MainPage />
          </div>
          <div>
            <Introduce />
            <Headers />
            <GalleryMainPage />
            <GalleryPage />
          </div>
        </Route>
      </Switch>
      <button onClick={onHomeClick}>
        <img src={require('./images/icons/arrow.png')} className="moveTopBtn" />
      </button>
    </div>
  );
}

export default App;
