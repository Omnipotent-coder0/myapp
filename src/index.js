import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './bootstrap.css'
import App from './App';
import About from './screens/About';
import Contact from './screens/Contact';
import Register from './screens/Register';
import UserList from './screens/UserList';
import UseEffect from './screens/UseEffect';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <UseEffect/> */}
    <About title = "main page"/>
    <Register/>
    <UserList/>
    <App />
    <Contact />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
