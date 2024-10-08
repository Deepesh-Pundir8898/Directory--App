import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AddPerson from './AddPerson';
import RetrieveInfo from './RetrieveInfo';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header>
          <h2>Deepesh Pundir Directory App</h2>
        </header>
        <nav>
          <ul>
            <li>
              <Link to="/">Add New Person</Link>
            </li>
            <li>
              <Link to="/retrieve">Retrieve Information</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<AddPerson />} />
          <Route path="/retrieve" element={<RetrieveInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
