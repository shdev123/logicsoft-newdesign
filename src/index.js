import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import data from './data'
import { BrowserRouter } from 'react-router-dom'
import './index.css'


ReactDOM.render(
    <BrowserRouter>
      
            <App/>
    
    </BrowserRouter>,
    document.getElementById('root')
);

