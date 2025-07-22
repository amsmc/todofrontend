import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import contact from './Contact.jsx'
// import about from './About.jsx'
import Navbar from './components/navbar.jsx'
import { BrowserRouter } from 'react-router-dom'
import AppRoute from './routes/AppRoute.jsx'
import TitleRoute from './routes/TitleRoute.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoute />
      <TitleRoute />
    </BrowserRouter>
  </StrictMode>,
)
