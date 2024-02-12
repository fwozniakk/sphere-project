import { Link } from "react-router-dom"
import sphereLogo from'../../assets/sphere-logo-typography.svg'
import './Navbar.scss'

const Navbar = () => {

  return (
      <div className="navbar">
        <div className="logo">
            <Link to="/" ><img src={sphereLogo}/></Link>
        </div>
        <div className="navlinks-container">
          <Link to="/compilers">Compilers</Link>

          <Link to="/problems">Problems</Link>

          <Link to="/containers">Containers</Link>
        </div>
      </div>
  );
}

export default Navbar