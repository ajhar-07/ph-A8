
import { createBrowserRouter } from "react-router";
import Mainlayout from "../Layouts/Mainlayout";
import Home from "../pages/Home";
import Showlessapp from "../pages/Showlessapp";
import Allapps from "../pages/Allapps";
import Apps from "../pages/Apps";
 export const router = createBrowserRouter([
  {
    path: "/",
   element:<Mainlayout/>,
   children:[
    
    {path:'/',element:<Home/>},

    {path:'/apps',element:<Apps/>}


   ]

  },
]);
