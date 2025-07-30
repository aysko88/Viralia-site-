import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import des composants
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PacksPage from './pages/PacksPage';
import WhyAIPage from './pages/WhyAIPage';
import DashboardsPage from './pages/DashboardsPage';
import ContactPage from './pages/ContactPage';
import PaymentPage from './pages/PaymentPage';
import Footer from './components/Footer';
import FloatingCharacter from './components/FloatingCharacter';

function App() {
  return (
    <Router>
      <div className="App relative min-h-screen bg-dark-900 text-white overflow-x-hidden">
        <Navbar />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/packs" element={<PacksPage />} />
            <Route path="/why-ai" element={<WhyAIPage />} />
            <Route path="/dashboards" element={<DashboardsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/payment" element={<PaymentPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingCharacter />
      </div>
    </Router>
  );
}

export default App;