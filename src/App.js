import React from 'react';
import './App.css';
import Navegador from './RedeSocial/Navegador';
import Galeria from './RedeSocial/Galeria';

class App extends React.Component {
  render(){
    return (
      <div>
        <Navegador></Navegador>
        <Galeria></Galeria>
      </div>
    );
  }
}

export default App;
