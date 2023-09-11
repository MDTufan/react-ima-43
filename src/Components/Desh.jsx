
import Dashbord from "./Dashbord"
import { Outlet } from "react-router-dom"
const Desh = () => {
  return (
    <div>
        <Dashbord />  
          <Outlet />
    </div>
  )
}

export default Desh