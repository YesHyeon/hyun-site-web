import "./index.css";
import { Link } from "react-scroll";

function MainPage() {
  return (
    <div id="body">
      <div id="menu">
        <ul>
          <li>Introduce</li>
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
