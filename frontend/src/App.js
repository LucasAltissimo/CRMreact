import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import ServiceOrder from './components/ServiceOrder';
import Quote from './components/Quote';
import Part from './components/Part';

function Home() {
  return <h2>Welcome to the CRM</h2>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>CRM for Electronics Repair</h1>
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service-orders" element={<ServiceOrder />} />
            <Route path="/quotes" element={<Quote />} />
            <Route path="/inventory" element={<Part />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
