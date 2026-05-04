import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Phase1 from './pages/Phase1';
import './styles/globals.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/phase-1" replace />} />
        <Route path="/phase-1" element={<Phase1 />} />
        {/* Phase 2 & 3 will be added later */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
