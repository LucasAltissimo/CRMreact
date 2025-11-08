import React from 'react';
import './App.css';
import ServiceOrder from './components/ServiceOrder';
import Quote from './components/Quote';
import Part from './components/Part';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CRM for Electronics Repair</h1>
      </header>
      <main>
        <ServiceOrder />
        <Quote />
        <Part />
      </main>
    </div>
  );
}

export default App;
