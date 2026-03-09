import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Layout } from './components/Layout/Layout'
//import { Down } from './down'

//uncoment when web is ready and comment the other createRoot also uncomment the layout import
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Layout/>
  </StrictMode>,
)

/* createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Down/>
  </StrictMode>,
)*/
