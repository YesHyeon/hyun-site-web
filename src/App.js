import './App.css';
import MainPage from './components/main/index';
import GalleryPage from './components/gallery/gallery.js';
import IntroducePage from './components/introduce/introduce';
import { Switch, Route } from 'react-router-dom';
import GalleryMainPage from './components/video/video.js';

function App() {
  const $topBtn = document.querySelector('.moveTopBtn');

  // 버튼 클릭 시 맨 위로 이동

  // $topBtn.onclick = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  return (
    <div id="Main">
      <Switch>
        <Route exact={true} path={'/'}>
          <MainPage />
          <IntroducePage />
          <GalleryMainPage />
          <GalleryPage />
        </Route>
      </Switch>
      <img src="images/icons/arrow.png" className="moveTopBtn" />
    </div>
  );
}

export default App;
