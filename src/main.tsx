import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/fcc" Component={App}/>
        <Route path="/" Component={App}/>
      </Routes>
    </Router>
  </React.StrictMode>,
)
