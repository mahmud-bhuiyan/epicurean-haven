import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/cart">
          <FaShoppingCart />
          <span className="badge">3</span>
        </Link>
      </li>
      <li>
        <Link to="/signup">Sign Up</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/logout">Logout</Link>
      </li>
      <li>
        <Link to="/user">
          <FaUser />
        </Link>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 max-w-screen-2xl bg-opacity-30 bg-black text-white">
        <div className="">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 text-black rounded-box w-44"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <span>Epicurean Haven</span>
          </Link>
        </div>
        <div className="ml-auto hidden lg:flex items-center space-x-2">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
