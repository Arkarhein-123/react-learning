import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Add this line to import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css' 
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)