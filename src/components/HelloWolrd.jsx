import React from 'react';
import '../assets/styles/App.scss';

const HelloWolrd = (props) => {
    let saludo = props.saludo;
    return (
      <h1>Hola {saludo}</h1>
    );
  }

export default HelloWolrd;