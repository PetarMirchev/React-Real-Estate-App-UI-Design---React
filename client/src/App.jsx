import './layout.scss';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/homePage/HomePage';
import listPage from './pages/listPage/listPage';

import {createBrowserRouter,RouterProvider,} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
    },
    {
      path: "/list",
      element: <listPage/>,
    },
  ]);


  return (
    // <div className="layout">
    //   <div className="navbar">
    //     <Navbar/>
    //   </div>
    //   <div className="content">
    //     <HomePage/>
    //   </div>
    // </div>
    <RouterProvider router={router}/>
  );
}

export default App;