import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import './css/card.css';

const AppWithRouter = () => (
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  )  
  
  ReactDOM.render(<AppWithRouter />, document.getElementById('root'))