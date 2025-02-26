import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AllRequests from './components/AllRequests';
import Orders from "./components/Orders"
import Accepted from './components/Accepted';
import Rejected from './components/Rejected';
import AcceptedRejected from './components/AcceptedRejected';
import LowStockProducts from './components/LowStockProducts';
import PaymentsTracking from './components/PaymentsTracking';
import VendorSetails from './components/VendorSetails';
import NNN from './components/NNN'
import Orders1 from './components/Orders1';
import Notification from './components/Notification';
import NotificationsOrders from './components/NotificationsOrders';
import Inventry from './components/Inventry';
import NotificationVendor from './components/NotificationVendor';
import NotificationCustomer from './components/NotificationCustomer';
import Dashbord from './components/Dashbord';
import Newcards from './components/Newcards';
import Topvendor from './components/Topvendor';
import Products1 from './components/Products1';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashbord/>} />
      <Route path="/allrequest" element={<AllRequests />} />
      <Route path="/accepted" element={<Accepted />} />
      <Route path="/rejected" element={<Rejected />} />
      <Route path="/accepted-rejected" element={<AcceptedRejected />} />
    </Routes>
  );
}

export default App;
