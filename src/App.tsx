import React from 'react';
import Header from './Header/Header';
import Frontend from './pages/Frontend/Frontend';
import Backend from './pages/Backend/Backend';
import Mobile from './pages/Mobile/Mobile';
import Style from './styles/global';
import Design from './pages/Design/Design';
import { Switch, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Frontend} />
        <Route path="/Backend" exact component={Backend} />
        <Route path="/Mobile" exact component={Mobile} />
        <Route path="/Design" exact component={Design} />
        <Route path="/Frontend" exact component={Frontend} />
      </Switch>
      <Style />
    </>
  );
}

export default App;
