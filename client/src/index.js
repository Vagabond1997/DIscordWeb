import React from 'react';
import ReactPlayer from 'react-player';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import VideoPage from './Pages/VideoPage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';

import {
  createBrowserRouter,
  RouterProvider,
  route
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

  {
    path: "/videos",
    element: <VideoPage/>,
  },
  {
    path: "/aboutus",
    element: <AboutPage/>,
  },

  {
    path: "/contact",
    element: <ContactPage/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
);


