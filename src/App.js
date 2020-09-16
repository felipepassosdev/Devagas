import React from 'react';
import Header from './Header/Header';
import Frontend from './pages/Frontend/Frontend';
import Backend from './pages/Backend/Backend';
import Mobile from './pages/Mobile/Mobile';
import Style from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <Header/>
      <Frontend/>
      <Backend/>
      <Mobile/>
      <Style/>
    </>
  );
}

export default App;
