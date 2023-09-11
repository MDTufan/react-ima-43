import { Link } from "react-router-dom"
import"./Dashbord.css"
import Part1 from "./Header/Part1"

const Dashbord = () => {
  return (
    <div>
        <div className="row">
            <div className="col-2">
            <div className="xxx">
            <ul>
                <li><button type="button" class="btn ggbb mt-4"><Link to="/deshbord/part1">part1</Link ></button></li>
                <li> <button type="button" class="btn ggbb mt-4"><Link  to="/deshbord/part2">part2</Link ></button> </li>
                <li> <button type="button" class="btn ggbb mt-4"><Link  to="/deshbord/part3">part3</Link ></button></li>
                <li> <button type="button" class="btn ggbb mt-4"><Link  to="/">Go HomePage</Link ></button></li>
            </ul>
        </div>
            </div>
            <div className="col-10">
            <h1 className="p-3 text-center bg-info text-black xxx-xxx">This is React-Router area</h1>
            </div>
        </div>
    </div>
  )
}

export default Dashbord