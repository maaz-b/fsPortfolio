import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/font.css'
import './index.css'
import App from './App.jsx'
import './styles/globals.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
