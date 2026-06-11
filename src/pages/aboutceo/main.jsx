import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AboutCeo from './AboutCeo';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AboutCeo />
  </StrictMode>,
);
