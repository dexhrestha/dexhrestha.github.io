import { createBrowserRouter } from 'react-router-dom';
import  App  from '../App';
import Counter from  "../components/Counter/Counter"
import ErrorPage from '../components/ErrorPage/error404';


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
  ]);

export default router;