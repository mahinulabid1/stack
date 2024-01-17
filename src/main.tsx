import React from 'react'
import ReactDOM from 'react-dom/client'
import './globalCssStyles.css'
import { RouterProvider } from "react-router-dom";
import router from './routeHandler.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
