import logo from './logo.svg';
import './App.css';
import FCClogo from './Imagenes/FCClogo.jpeg';
import {Boton} from './Componentes/Boton'
import { Pantalla } from './Componentes/Pantalla';
import {Clear} from './Componentes/Clear'
import { useState } from 'react';
import {evaluate} from 'mathjs'

function App() {

  const [input, setInput] = useState('')

  const agregarInput = valor => {
    setInput(input + valor)
  };

  const calcularResultado = () => {
    if (input){
      setInput(evaluate(input));
    } else if (input / 0){
        alert('Por favor, divida entre un número distinto a cero')
    } else {
        alert('Ingrese un número para realizar el cálculo')
    }
  };

  return (
    <div className="App">
      <div className='fcc-logo-contenedor'>
        <img 
          src ={FCClogo}
          className='fcc-logo'
          alt = 'Logo FCC' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input = {input}/>
        <div className='fila'>
          <Boton manejarClick = {agregarInput}>1</Boton>
          <Boton manejarClick = {agregarInput}>2</Boton>
          <Boton manejarClick = {agregarInput}>3</Boton>
          <Boton manejarClick = {agregarInput}>+</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClick = {agregarInput}>4</Boton>
        <Boton manejarClick = {agregarInput}>5</Boton>
        <Boton manejarClick = {agregarInput}>6</Boton>
        <Boton manejarClick = {agregarInput}>-</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClick = {agregarInput}>7</Boton>
        <Boton manejarClick = {agregarInput}>8</Boton>
        <Boton manejarClick = {agregarInput}>9</Boton>
        <Boton manejarClick = {agregarInput}>*</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClick = {calcularResultado}>=</Boton>
        <Boton manejarClick = {agregarInput}>0</Boton>
        <Boton manejarClick = {agregarInput}>.</Boton>
        <Boton manejarClick = {agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <Clear manejarClear = {() => setInput('')}>
            Clear</Clear>
        </div>
      </div>
    </div>
  );
}

export default App;
