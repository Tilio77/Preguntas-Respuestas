import './App.css';
import Carta from './carta';
import { Component } from 'react';

const preguntas = [
  {
    texto: '¿Cuál es el lenguaje mas popular para el desarrollo web?',
    opciones: [
      {respuesta: 'Python', esCorrecta: false},
      {respuesta: 'C++', esCorrecta: false},
      {respuesta: 'Javascript', esCorrecta: true},
      {respuesta: 'Java', esCorrecta: false},
    ]
  },
  {
    texto: '¿Cuál es la capital de los Estados Unidos?',
    opciones: [
      {respuesta: 'Nueva York', esCorrecta: false},
      {respuesta: 'Washington D.C', esCorrecta: true},
      {respuesta: 'Los Angeles', esCorrecta: false},
      {respuesta: 'Philadelfia', esCorrecta: false},
    ]
  },
  {
    texto: '¿Cuál es el lenguaje mas popular para la Ciencia de datos?',
    opciones: [
      {respuesta: 'Python', esCorrecta: true},
      {respuesta: 'C++', esCorrecta: false},
      {respuesta: 'Javascript', esCorrecta: false},
      {respuesta: 'Java', esCorrecta: false},
    ]
  },
  {
    texto: '¿Cuál empresa invento ReactJS?',
    opciones: [
      {respuesta: 'Microsoft', esCorrecta: false},
      {respuesta: 'Google', esCorrecta: false},
      {respuesta: 'Amazon', esCorrecta: false},
      {respuesta: 'Facebook', esCorrecta: true},
    ]
  }
]

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      numero: 0,
      correctas: 0
    }
  }

  p = (numero) => {
    let pregunta = preguntas[this.state.numero]
    for(let i = 0; i < 4; i++)
    {
      if(pregunta.opciones[i].esCorrecta === true && numero === i)
      {
        this.setState({correctas: this.state.correctas + 1})
      }
    }
    this.setState({numero: this.state.numero + 1})
  }

  render(){
    if(this.state.numero < 4)
    {
      return (
        <div className='App'>
          <Carta numero={this.state.numero} texto={preguntas[this.state.numero].texto}
          respuesta={preguntas[this.state.numero].opciones} proxima={this.p}></Carta>
        </div>
      );
    } 
    else 
    { 
      return(
        <div className='App'>
          <div className='carta'>
            <h2>Sacaste {this.state.correctas} / 4 </h2> <br></br>
            <button className='button' onClick={() => this.setState({numero: 0, correctas: 0})}>Reiniciar</button>
          </div>
        </div>
      );
    }
  }
}



export default App;
