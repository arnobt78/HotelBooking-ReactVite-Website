import { RoomContext } from './context/RoomContext';
import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'
import './style/index.css';


ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <RoomContext>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </RoomContext>,
  )