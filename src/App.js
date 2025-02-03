import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AllRequests from './components/AllRequests';
import Gandu from './components/Gandu';
import NewGandu from './components/NewGandu';
import Orders from "./components/Orders"
import Accepted from './components/Accepted';
import Rejected from './components/Rejected';
import AcceptedRejected from './components/AcceptedRejected';
import LowStockProducts from './components/LowStockProducts';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LowStockProducts />} />
      <Route path="/allrequest" element={<AllRequests />} />
      <Route path="/accepted" element={<Accepted />} />
      <Route path="/rejected" element={<Rejected />} />
      <Route path="/accepted-rejected" element={<AcceptedRejected />} />
    </Routes>
  );
}

export default App;
