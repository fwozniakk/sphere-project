import { Link } from "react-router-dom"

const Navbar = () => {


  return (
      <>
        <div>
            <Link to="/" >Sphere</Link>
        </div>
        <div>
          <Link to="/compilers">Compilers</Link>

          <Link to="/problems">Problems</Link>

          <Link to="/containers">Containers</Link>
        </div>
      </>
  );
}

export default Navbar