import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import LatestNews from './LatestNews';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LatestNews />
  </StrictMode>,
);
