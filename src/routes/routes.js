import { createBrowserRouter } from 'react-router-dom';
import  App  from '../App';
import Counter from  "../components/Counter/Counter"
import ErrorPage from '../components/ErrorPage/error404';
import Portfolio from '../components/Portfolio/Portfolio';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage /> ,
      
    },
    {
      path:"/dpka",
      element: <Counter />
    }
    // {
    //   path:"/portfolio",
    //   element: <Portfolio />
    // }
  ]);

export default router;