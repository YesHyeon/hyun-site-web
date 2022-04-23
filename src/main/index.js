import "./index.css";
import { Link } from "react-scroll";

function MainPage() {
  return (
    <div id="body">
      <div id="menu">
        <ul>
          <Link to="IntroduceBody" spy={true} smooth={true} offset={-51}>
            <li>Introduce</li>
          </Link>
          <li>Award</li>
          <li>Certification</li>
          <li>Activity</li>
          <li>Project</li>
          <li>SNS</li>
          <Link to="gallery-body" spy={true} smooth={true} offset={-81}>
            <li>Gallery</li>
          </Link>
        </ul>
      </div>
      <div id="main">
        <div className="title">Hyun</div>
      </div>
    </div>
  );
}
export default MainPage;
