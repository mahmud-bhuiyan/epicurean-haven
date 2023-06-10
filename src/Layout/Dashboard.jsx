import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaCalendarAlt,
  FaHome,
  FaBars,
  FaShoppingBag,
  FaRegEnvelope,
} from "react-icons/fa";
import useCart from "../Hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();

  return (
    <div>
      <div className="drawer drawer-mobile ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-[#D1A054] text-base-content">
            {/* Sidebar content here */}
            <li>
              <NavLink to="/dashboard/home">
                <FaHome />
                Users Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/mycart">
                <FaShoppingCart />
                My Cart
                <span className="badge">{cart?.length || 0}</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/history">
                <FaWallet />
                Payment History
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/reservations">
                <FaCalendarAlt />
                Reservations
              </NavLink>
            </li>
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu">
                <FaBars />
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/order/salad">
                <FaShoppingBag />
                Order
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                <FaRegEnvelope />
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
