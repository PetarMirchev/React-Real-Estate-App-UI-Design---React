import HomePage from './pages/homePage/HomePage';
import ListPage from './pages/listPage/listPage';
import Layout from './pages/layout/layout';
import SinglePage from './pages/singlePage/SinglePage';
import AboutPage from './pages/aboutPage/AboutPage';
import ProfilePage from './pages/profilePage/profilePage';

import {createBrowserRouter,RouterProvider,} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <HomePage/>,
        },
        {
          path: "/about",
          element: <AboutPage/>,
        },
        {
          path: "/list",
          element: <ListPage/>,
        },
        {
          path: "/:id",
          element: <SinglePage/>,
        },
        {
          path: "/profilePage",
          element: <ProfilePage/>,
        },
      ]
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


// React Leaflet - for Map locations --> npm install react-leaflet