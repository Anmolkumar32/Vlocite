import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Ensure using Routes instead of Switch
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Vlogs from "./pages/Vlogs";
import Extras from "./pages/Extras";
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

const App = () => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsAdminLoggedIn(true);
  };

  return (
    <Router>
      <Header />
      <Routes>
        {/* Default route is now Home */}
        <Route path="/" element={<Home />} />

        {/* Admin login route */}
        <Route path="/login" element={isAdminLoggedIn ? <AdminDashboard /> : <AdminLogin onLogin={handleLogin} />} />
        
        {/* Other routes */}
        <Route path="/about" element={<About />} />
        <Route path="/vlogs" element={<Vlogs />} />
        <Route path="/extras" element={<Extras />} />
      </Routes>
    </Router>
  );
};

export default App;
