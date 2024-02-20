import './App.css';
import {BrowserRouter as Router, Switch, Route, Routes, BrowserRouter} from 'react-router-dom';
import Footer from "./components/footer";
import Chat_list from "./components/chat_list";
import About from './components/About';
import React from "react";
import Header from "./components/header";
import Home from "./components/home";

function App() {
    return (
        <div className="container">
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='*' element={About}></Route>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
