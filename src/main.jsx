import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './components/home/home.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import { Card } from 'react-bootstrap'
import CardDetails from './components/cardDetails/cardDetails.jsx'
import CreatorCard from './components/cards/creatorCard.jsx'
import CardEdit from './components/cardEdit/cardEdit.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    
  },
  {
    path: "/createCreator",
    element: <Home />,
  },
  {
    path: "/details/:id",
    element: <CardDetails />,
  },
  {
    path: "/edit/:id",
    element: <CardEdit />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
