import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { FoodCategoryProvider } from './contexts/FoodCategoryContext.tsx';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FoodCategoryProvider>
      <App />
    </FoodCategoryProvider>
  </StrictMode>
);
