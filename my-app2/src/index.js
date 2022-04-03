import React from 'react';
 import ReactDOM from 'react-dom/client';
 import './index.css';
 import App from './App';
 import reportWebVitals from './reportWebVitals';
 import styled, {createGlobalStyle} from 'styled-components';

 const Global = createGlobalStyle`
 * {
   margin:0;
   padding:0;
   box-sizing: border-box;
   font-family: consolas;
 }`
 const container = document.getElementById('root');
 const root = ReactDOM.createRoot(container);
 root.render(
     <>
     <Global />
     <App />
     </>
      );

 reportWebVitals();
