import './App.css';
import MainPage from './components/main/index';
import Introduce from './components/introduce/introduce';
import Records from './components/records/records';
import { Switch, Route } from 'react-router-dom';
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
          <Introduce />
          <Records />
        </Route>
      </Switch>
      <button onClick={onHomeClick}>
        <img
          src={require('./assets/images/icons/arrow.png')}
          className="moveTopBtn"
        />
      </button>
    </div>
  );
}

export default App;
