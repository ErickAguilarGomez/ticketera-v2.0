import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './assets/App.css';
import Contex from './Context/Contex';


const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));
const Details = lazy(() => import('./Pages/Details'));

function App() {
  return (
    <Contex>
        <Suspense fallback={<div>Cargando...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </Suspense>
    </Contex>
  );
}

export default App;
