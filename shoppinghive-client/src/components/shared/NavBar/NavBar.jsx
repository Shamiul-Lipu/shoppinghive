import mainLogo from "../../../assets/bag.png";
import Container from "../../container/Container";
import { Link, NavLink } from "react-router-dom";

import { FaUser, FaUserCheck } from "react-icons/fa6";

const NavBar = () => {
  const user = null;
  const navItem = (
    <ul className="flex flex-row gap-1 font-medium justify-center items-center">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-amber-300 px-4 py-2 rounded-md text-blue-950 font-bold hover:bg-amber-300"
              : "px-4 py-2 rounded-lg text-blue-950 hover:bg-amber-300"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive
              ? "bg-amber-300 px-4 py-2 rounded-lg text-blue-950 font-bold hover:bg-amber-300"
              : "px-4 py-2 rounded-lg text-blue-950 hover:bg-amber-300"
          }
        >
          Products
        </NavLink>
      </li>
      <li>
        {user ? (
          <button className="bg-blue-950 px-4 py-2 rounded-lg text-amber-300 font-bold hover:bg-amber-500 hover:text-blue-950 transition-colors">
            Logout
          </button>
        ) : (
          <>
            <Link className="hover:underline">Login</Link>
            {"/"}
            <Link className="hover:underline">Register</Link>
          </>
        )}
      </li>
    </ul>
  );

  const userFunctionalityList = (
    <ul
      tabIndex={0}
      className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-amber-100 rounded-box w-52 "
    >
      <li>
        <Link className="justify-between">
          Dashboard
          <span className="badge bg-amber-400"></span>
        </Link>
      </li>
      <li>
        <button>Logout</button>
      </li>
    </ul>
  );

  return (
    <>
      <section className="bg-amber-200 py-2">
        <Container>
          <nav className="flex flex-col md:flex-row justify-between items-center">
            {/* logo and brand name */}
            <div className="flex flex-row items-center gap-3">
              <img
                className="w-10"
                src={mainLogo}
                alt="main logo of the shoppinghive"
              />
              <h3 className="font-bold text-2xl">Shoppinghive</h3>
            </div>
            {/* nav items for medium and large screen */}
            <div>{navItem}</div>
          </nav>
        </Container>
      </section>

      <section className="bg-amber-50 py-3">
        <Container>
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-5 justify-center items-center">
            {/* search functionality */}
            <div className="order-2 sm:order-1">
              <input
                type="text"
                placeholder="Search here"
                className="input input-bordered input-warning w-full max-w-xs"
              />
            </div>
            {/* user dashboard and profile */}
            <div className="flex order-1 sm:order-2 gap-1 justify-center items-center bg-amber-100 rounded-xl p-1">
              <button className="btn btn-ghost bg-amber-200 hover:bg-amber-300">
                Dashboard
              </button>
              <div className="flex items-center">
                {/* user cart */}
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle hover:bg-amber-300"
                  >
                    <div className="indicator">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span className="badge badge-sm indicator-item">8</span>
                    </div>
                  </label>
                  <div
                    tabIndex={0}
                    className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
                  >
                    <div className="card-body">
                      <span className="font-bold text-lg">8 Items</span>
                      <span className="text-info">Subtotal: $999</span>
                      <div className="card-actions">
                        <button className="btn btn-primary btn-block">
                          View cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* user profile */}
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className={`btn btn-ghost btn-circle hover:bg-amber-300 avatar ${
                      user ? "online" : "offline"
                    } `}
                  >
                    <div className="w-8 rounded-full border-[2px] border-amber-950">
                      {user && user ? (
                        <FaUserCheck className="w-7 h-7 bg-lime-400" />
                      ) : (
                        <FaUser className="w-7 h-7 " />
                      )}
                    </div>
                  </label>
                  {userFunctionalityList}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default NavBar;
