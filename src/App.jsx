
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Main from './Components/Main';
import Desh from './Components/Desh';
import Home from './Components/Home';
;

import Product from './Components/Product';
import Dashbord from './Components/Dashbord';
import Part1 from './Components/Header/Part1';
import Part2 from './Components/Header/Part2';
import Part3 from './Components/Header/Part3';




function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      
      children: [
       
       
        {
          path: "/",
          element:<Home />,
          
        },
        {
          path:"/order",
          element:<Product />

        },
      
      ],
    },
    {
      path: "/deshbord",
      element: <Desh />,
      children:[
        {
          path:"/deshbord/part1",
          element: <Part1 />
        },
        {
          path:"/deshbord/part2",
          element: <Part2 />
        },
        {
          path:"/deshbord/part3",
          element: <Part3 />
        },
      ]
    }
   
  ]);
  

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
