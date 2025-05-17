import { useState } from "react";

import renviroLogo from "./assets/Logo.png";
import landingPage from "./assets/Bg-Landing.png";
import "./App.css";

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
      <div className="navbar  absolute top-0 shadow-sm px-25">
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
          <a href="">
            <img src={renviroLogo} className="w-auto h-20" alt="logo" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
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

        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </body>
  );
}
export default App;
