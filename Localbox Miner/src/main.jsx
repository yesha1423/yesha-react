import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeContexProviderFunction } from './context/ThemeContex.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeContexProviderFunction>
    <App />
  </ThemeContexProviderFunction>,
)
