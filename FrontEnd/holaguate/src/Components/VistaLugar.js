import React from 'react';
import { useParams } from 'react-router-dom';

export default function VistaLugar() {
    const {id}=useParams();
    console.log(id)
    return (
        <div>
            <h1>
                VistaLugar 
            </h1>
        </div>
    )
}
