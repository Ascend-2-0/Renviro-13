import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faApple, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import renviroLogo from "/src/assets/Logo.png";

const RegisterForm = () => {

  const [dark, setDark] = React.useState(false);


  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setError(e.target.value !== password ? "Passwords do not match" : "");
  };




  return (
    <div
      data-theme={dark ? "dark" : "light"}
      className="h-screen flex flex-col items-center justify-center bg-base-300 px-4"
    >
      <div className="w-full max-w-sm bg-white shadow-xl rounded-xl px-6 pb-6 pt-2 z-10">
        <div className="text-center mb-6">
          <div className="flex justify-center">
            <Link to="/">
              <img src={renviroLogo} className="w-auto h-[90px]" alt="logo" />
            </Link>
          </div>

          <h1 className="text-2xl -mt-3 font-semibold text-gray-800">Create an Account</h1>
          <p className="text-sm text-gray-500">Enter your details to register</p>
        </div>

        {/* Social Register */}
        <div className="flex justify-center gap-3 mb-6">
          <button className="btn btn-outline btn-md w-[80px] h-12 rounded-lg">
            <FontAwesomeIcon icon={faGoogle} size="lg" />
          </button>
          <button className="btn btn-outline btn-md w-[80px] h-12 rounded-lg">
            <FontAwesomeIcon icon={faApple} size="lg" />
          </button>
          <button className="btn btn-outline btn-md w-[80px] h-12 rounded-lg">
            <FontAwesomeIcon icon={faFacebookF} size="lg" />
          </button>
        </div>

        <div className="divider text-sm text-gray-400">or</div>

        <form className='space-y-2'>
          <label className="input validator">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </g>
            </svg>
            <input
              type="text"
              required
              placeholder="Username"
              pattern="[A-Za-z][A-Za-z0-9\-]*"
              minLength="3"
              maxLength="30"
              title="Only letters, numbers, or dash"
            />
          </label>


          <label className="input validator">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <g fill="none">
                <path
                  d="M7.25 11.5C6.83579 11.5 6.5 11.8358 6.5 12.25C6.5 12.6642 6.83579 13 7.25 13H8.75C9.16421 13 9.5 12.6642 9.5 12.25C9.5 11.8358 9.16421 11.5 8.75 11.5H7.25Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 1C4.61929 1 3.5 2.11929 3.5 3.5V12.5C3.5 13.8807 4.61929 15 6 15H10C11.3807 15 12.5 13.8807 12.5 12.5V3.5C12.5 2.11929 11.3807 1 10 1H6ZM10 2.5H9.5V3C9.5 3.27614 9.27614 3.5 9 3.5H7C6.72386 3.5 6.5 3.27614 6.5 3V2.5H6C5.44771 2.5 5 2.94772 5 3.5V12.5C5 13.0523 5.44772 13.5 6 13.5H10C10.5523 13.5 11 13.0523 11 12.5V3.5C11 2.94772 10.5523 2.5 10 2.5Z"
                  fill="currentColor"
                ></path>
              </g>
            </svg>
            <input
              type="tel"
              className="tabular-nums"
              required
              placeholder="Phone"
              pattern="[0-9]*"
              minlength="8"
              maxlength="15"
              title="Must be 8-15 digits"
            />
          </label>

          <label className="input validator">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input type="email" placeholder="mail@site.com" required />
          </label>

          <label className="input validator">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                ></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>
            <input
              type="password"
              required
              placeholder="Password"
              minLength="8"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>

          {/* Input Konfirmasi Password */}
          <label className="input validator">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                ></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>
            <input
              type="password"
              required
              placeholder="Confirm Password"
              id="confirmPassword"
              pattern={password}
              onChange={handleConfirmPasswordChange}
              onInvalid={(e) => e.target.setCustomValidity("Passwords do not match")}
              onInput={(e) => e.target.setCustomValidity("")}
            />

          </label>

          {/* Pesan error */}
          {error && <p className=" pt-1 text-xs text-red-500">{error}</p>}




          <div className="form-control mt-6">
            <button className="btn btn-primary w-full">Register</button>
          </div>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-purple-600 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;