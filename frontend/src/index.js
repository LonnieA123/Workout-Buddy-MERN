import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {WorkoutsContext} from "./context/WorkoutContext";
//make app context child
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>


      <WorkoutsContext>
          <App />
      </WorkoutsContext>
  </React.StrictMode>
);

