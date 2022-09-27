import React from 'react';
import './App.css';

function Carta(props) {
	return(
		<div className='carta'>
			<div className='fila'>
				<div className='columna'>
					<h2>Pregunta {props.numero + 1} / 4</h2>
					<div className='pregunta'>
						{props.texto}
					</div>
				</div>
				<div className='columna respuestas'>
					<div className='respuesta' onClick={() => props.proxima(0)}>
						{props.respuesta[0].respuesta}
					</div>
					<div className='respuesta' onClick={() => props.proxima(1)}>
						{props.respuesta[1].respuesta}
					</div>
					<div className='respuesta' onClick={() => props.proxima(2)}>
						{props.respuesta[2].respuesta}
					</div>
					<div className='respuesta' onClick={() => props.proxima(3)}>
						{props.respuesta[3].respuesta}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Carta