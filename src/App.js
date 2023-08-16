import './App.css';
import MainPage from './pages/main/index';
import Introduce from './pages/introduce/introduce';
import { Switch, Route } from 'react-router-dom';
import Works from './pages/works/works';
import { useRef } from 'react';
import Project from './pages/projects/project';
import Works2 from './components/works2/works2';

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
          <Introduce />
          <Works />
          <Works2 />
          <Project />
        </Route>
      </Switch>
      <button onClick={onHomeClick}>
        <img src={require('./images/icons/arrow.png')} className="moveTopBtn" />
      </button>
    </div>
  );
}

export default App;
