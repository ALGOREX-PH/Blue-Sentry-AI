import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/Home';
import { MissionPage } from './pages/Mission';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-deep-900">
        <div className="fixed inset-0 bg-gradient-radial -z-10" />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mission" element={<MissionPage />} />
        </Routes>
      </div>
    </Router>
  );
}