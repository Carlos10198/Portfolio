import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App';

import '../src/styles/fonts.css'
import '../src/styles/root.css'
import '../src/styles/reset.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)