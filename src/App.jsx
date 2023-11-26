import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './Components/NavBarComponent/NavBar.jsx';
import Home from './Pages/Home';
import Brand from './Pages/Brand';
import Apple from './Brands/Apple';
import Samsung from './Brands/Samsung';

function App() {
    return (
        <Router>
            <div>
                <NavBar />
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/brands" element={<Brand />} />
                    <Route path="/brands/apple" element={<Apple />} />
                    <Route path="/brands/samsung" element={<Samsung />} />
                    <Route path="*" element={<Navigate to="/home" />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
