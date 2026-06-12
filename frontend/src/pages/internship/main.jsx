import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Internship from './Internship';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Internship />
  </StrictMode>,
);
