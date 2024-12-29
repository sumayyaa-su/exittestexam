import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; // No need to import BrowserRouter here
import Dashboard from './components/Dashboard';
import AddFeedback from './components/Addfeedback';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <nav>
          <ul>
            <li><a href="/">Dashboard</a></li>
            <li><a href="/add-feedback">Add Feedback</a></li>
          </ul>
        </nav>
        
        {/* Routes are now rendered without wrapping them in <Router> */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-feedback" element={<AddFeedback />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
