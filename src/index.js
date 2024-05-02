// import {Root} from './routes/root'
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
// import { RouterProvider } from "react-router-dom";
import { HashRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";
import router from './routes/routes';

import { ThemeProvider } from './contexts/theme';
import App from './App';



ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
)


