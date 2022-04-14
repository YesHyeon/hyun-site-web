import "./App.css";
import MainPage from "./main";
import GalleryPage from "./gallery/gallery.js";
import IntroducePage from "./introduce/introduce";

function App() {
  const $topBtn = document.querySelector(".moveTopBtn");

  // 버튼 클릭 시 맨 위로 이동

  // $topBtn.onclick = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  return (
    <div>
      <MainPage />
      <IntroducePage />
      <GalleryPage />
      <img src="/images/icons/arrow.png" className="moveTopBtn" />
    </div>
  );
}

export default App;
