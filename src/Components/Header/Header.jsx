import { NavLink } from 'react-router-dom';
import './Header.css'
import img from "../../assets/Logo.png"

function Header() {


  return (
    <>
    <section className="header-section">

        <div className="header-container">
            <div className="header-head">
                <div className="icon"><img src={img} alt="" /></div>
                <div className="menu">
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/order">Order</NavLink></li>
                        
                        <li><NavLink to="/deshbord">Dashboard</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>

    </section>
      
    </>
  )
}

export default Header;