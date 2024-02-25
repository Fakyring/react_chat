import './App.css';
import {Route, Routes} from 'react-router-dom';
import Footer from "./components/footer";
import About from './components/About';
import React from "react";
import Header from "./components/header";
import Home from "./components/home";
import Dialog from "./components/dialogs";

function App() {
    return (
        <div className="container">
            <Header/>
            <Routes>
                <Route path="/dialogs/:dialogId" element={<Dialog/>} />
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='*' element={<About/>}></Route>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
