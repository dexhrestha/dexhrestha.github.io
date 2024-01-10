// import {Root} from './routes/root'
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
// import { RouterProvider } from "react-router-dom";
import { RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";
import router from './routes/routes';

import { ThemeProvider } from './contexts/theme';



ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
)


