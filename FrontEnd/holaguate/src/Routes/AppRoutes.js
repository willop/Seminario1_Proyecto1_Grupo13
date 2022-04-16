import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../Components/Login'
import Home from '../Components/Home'
import VisitaLugar from '../Components/VistaLugar'
import React from 'react';



export default function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/edit" element={<Login/>}></Route>
            <Route path="/prueba/:id" element={<VisitaLugar/>} ></Route>
        </Routes>
    </BrowserRouter>
  )
}
