//https://fontawesome.com/ diseños para las estrellas

import React from 'react'
import './styles.css'

export default function indes({stars}) {
  // Máxima cantidad de estrellas
const maxStars = 5;

// Obtenemos el valor completo
const starPercentage = (stars / maxStars) * 100;

// Redondeamos el resultado si es decimal
const starPercentageRounded = Math.round(starPercentage);

// Creamos el estilo para que las estrellas amarillas
// se vean según el número que recibimos.
const StarStyles = () => {
    return {
        width: starPercentageRounded + "%"
    };
};


return (
    <div class="stars-gray">
        <div class="stars-yellow" style={StarStyles()}></div>
    </div>
);
}
