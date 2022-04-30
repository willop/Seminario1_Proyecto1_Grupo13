import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../Components/Login'
import Home from '../Components/Home'
import VisitaLugar from '../Components/VistaLugar'
import User from '../Components/User'
import React from 'react';
import NuevoUsuario from '../Components/NuevoUsuario'
import LoginCamara from '../Components/LoginCamara'
import Chat from '../Components/ComponenteChat/Chat'



export default function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/edit" element={<Login/>}></Route>
            <Route path="/prueba/:id" element={<VisitaLugar/>} ></Route>
            <Route path="/user/:name" element={<User/>} ></Route>
            <Route path="/loginCamara" element={<LoginCamara/>}></Route>
            <Route path="/crearUsuario" element={<NuevoUsuario/>}></Route>
            <Route path="/chat" element={<Chat/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}
