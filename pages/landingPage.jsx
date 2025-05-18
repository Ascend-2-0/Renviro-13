import { useState } from "react";
import { Link } from 'react-router-dom';
import renviroLogo from "/src/assets/Logo.png";
import landingPage from "/src/assets/Bg-Landing.png";
import "/src/App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <body>
      <div className="h-screen w-full overflow-hidden">
        <img
          src={landingPage}
          className="h-full w-full object-cover object-top"
          alt="bg"
        />
      </div>
      <div className="navbar  absolute top-0 shadow-sm bg-white/50 px-25">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-red-500 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link
            to="/">
            <img src={renviroLogo} className="w-[auto] h-[117px]" alt="logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8">
            <li>
              <Link
                to="/ecoact"
                className="btn rounded-[20px] text-[20px] px-[55px] font-bold py-6 bg-brand-100 text-brand-700 border-none hover:bg-brand-200"             >
                EcoAct
              </Link>
            </li>
            <li>
              <Link
                to="/donate"
                className="btn rounded-[20px] text-[20px] px-[55px] font-bold py-6 bg-brand-100 text-brand-700 border-none hover:bg-brand-200"             >
                Donate
              </Link>
            </li>
            <li>
              <Link
                to="/history"
                className="btn rounded-[20px] text-[20px] px-[55px] font-bold py-6 bg-brand-100 text-brand-700 border-none hover:bg-brand-200"             >
                History
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <Link
            to="/login"
            className="btn rounded-[20px] text-[20px] px-[55px] font-bold py-6 bg-brand-700 text-brand-100 border-none hover:bg-brand-900"
          >
            Login
          </Link>
        </div>
      </div>
    </body>
  );
}
export default App;
