import './App.css';
import {Navigate, Route, Routes} from 'react-router-dom';
import Footer from "./components/outer/footer";
import About from './components/About';
import React from "react";
import Header from "./components/outer/header";
import Home from "./components/home";
import Dialog from "./components/chat/dialogs";
import Auth from "./components/authorizations/auth";
import Apitest from "./components/api/apitest";

function App() {
    return (
        <div className="container">
            <Header/>
            <Routes>
                <Route path="/dialogs/:dialogId" element={<Dialog/>}/>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/api' element={<Apitest/>}></Route>
                <Route path='/auth' element={<Auth/>}></Route>
                <Route path='*' element={<Home/>}></Route>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
