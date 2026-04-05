import { Routes, Route } from 'react-router-dom';
// Importas tu landing actual
import {LandingLayout} from './components/Landing/Landing-layout';

import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import { Profile } from './components/Profile/Profile';


export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<LandingLayout />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
    </Routes>
  );
}