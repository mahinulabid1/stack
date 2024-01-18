import React from 'react'
import ReactDOM from 'react-dom/client'
import './globalCssStyles.css'
import { RouterProvider } from "react-router-dom";
import router from './routeHandler.tsx';
import { store } from './store/store.tsx'
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
