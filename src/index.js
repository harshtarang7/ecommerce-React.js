import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import Aboutus from './Aboutus';
import CartList from './CartList';
import Maincontext from './context/Maincontext';
import Header from './common/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/ProductDetails/:id',
    element:<ProductDetails/>
  },
  {
    path:'/about',
    element:<Aboutus/>
  },
  {
    path:'/Cart',
    element:<CartList/>
  }
  
])
root.render(
  <React.StrictMode>
    <Maincontext>
   
    <RouterProvider router={router}/>
    </Maincontext>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
