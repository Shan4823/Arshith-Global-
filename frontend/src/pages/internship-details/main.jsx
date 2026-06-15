import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import InternshipDetails from './InternshipDetails';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InternshipDetails />
  </StrictMode>,
);
