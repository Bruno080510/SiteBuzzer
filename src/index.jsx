import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Servicos from './pages/Servicos';
import Post from './pages/posts/Post';
import Post2 from './pages/posts/Post2';
import Post3 from './pages/posts/Post3';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/blog" ,
        element: <Blog />
      },
      {
        path: "/servicos",
        element: <Servicos/>
      },
      {
        path: "/post",
        element: <Post/>
      },
      {
        path: "/post1",
        element: <Post2/>
      },
      {
        path: "/post2",
        element: <Post3/>
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


