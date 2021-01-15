import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Wrapper from'./components/Wrapper/Wrapper'
import Main from './components/Main/Main'


function App() {

  return (
    <div className="Directory">
      <Wrapper > 
        <Header />
        <Main />
      </Wrapper>
    </div>
  );
}

export default App;
