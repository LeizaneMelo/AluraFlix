import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import CadastroVideo from './pages/Cadastro/Video';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import correto do 'react-router-dom'
import CadastroCategoria from './pages/Cadastro/Categoria';

const root = ReactDOM.createRoot(document.getElementById('root')); // Usando 'createRoot' em vez de 'render'

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro/video" element={<CadastroVideo />} />
        <Route path="/cadastro/categoria" element={<CadastroCategoria />} />
        <Route path="*" element={<div>Página 404</div>} /> {/* Ajuste para página 404 */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

