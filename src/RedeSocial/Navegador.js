import React, { Component } from 'react';
import iconwhite from './iconwhite.svg';
import './Navegador.css';

class Navegador extends Component {
    state = {  }
    render() { 
        return ( 
            <nav>
            <img src={iconwhite} className="icon" alt="icon" />
            <div className="botoes"><button>Linha do Tempo</button> <button>Perfil</button></div>
            <p className="user">Olá, Fulano</p>
            </nav>
         );
    }
}
 
export default Navegador;