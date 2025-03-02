import React from 'react';
import ReactDOM from 'react-dom/client';
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import CreateAccount from './createaccount'; // Make sure the filename and import is correct
import  PageFirst from './firstpage'; 
import  CarPage from './cardetail'; 
import  LandPage from './landdetails'; 
import  BulldPage from './buildingdetail'; 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/hari-tPage" element={<PageFirst />} />
            <Route path="/car-Page" element={<CarPage />} />
            <Route path="/land-Page" element={<LandPage />} />
            <Route path="/building-Page" element={<BulldPage />} />
        </Routes>
    </BrowserRouter>
);
