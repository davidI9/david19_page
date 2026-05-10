import { Routes, Route } from 'react-router-dom';
// Importas tu landing actual
import {LandingLayout} from './components/Landing/Landing-layout';

import { XP } from './components/XP/Xp';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import { About } from './components/About/About';


export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<LandingLayout />} />
        <Route path="/xp" element={<XP />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
    </Routes>
  );
}