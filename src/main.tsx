import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LandingLayout } from './components/Landing/Landing-layout'
//import { Layout } from './components/Layout/Layout'
//import { Down } from './down'

//uncomment when web is ready and comment the other createRoot also uncomment the layout import
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LandingLayout/>
  </StrictMode>
)

//uncomment whenever the page is under maintainance, also uncomment the down import 
/* createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Down/>
  </StrictMode>,
)*/
