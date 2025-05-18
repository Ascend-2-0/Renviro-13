import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faApple, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import renviroLogo from "/src/assets/Logo.png";


const LoginForm = () => {

    const [dark, setDark] = React.useState(false);
    return (
        <div
            data-theme={dark ? "dark" : "light"}
            className=" h-screen flex flex-col items-center justify-center bg-base-300 px-4"
        >
            <div className="w-full max-w-sm bg-white shadow-xl rounded-xl px-6 pb-6 pt-2 z-10">
                <div className="text-center mb-6">
                    <div className="flex justify-center">
                        <Link to="/">
                            <img src={renviroLogo} className="w-auto h-[90px]" alt="logo" />
                        </Link>
                    </div>

                    <h1 className="text-2xl -mt-3 font-semibold text-gray-800">Welcome back</h1>
                    <p className="text-sm text-gray-500">Please enter your details to sign in</p>
                </div>

                {/* Social Login */}
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

                <form className='space-y-4'>
                    <div className="form-control">
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
                            <input type="email" placeholder="Email" required />
                        </label>

                    </div>

                    <div className="form-control">
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
                                minlength="8"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                            />
                        </label>
                    </div>
                    <div className="form-control mt-6  ">
                        <button className="btn btn-primary w-full">Login</button>
                    </div>
                </form>

                <p className="text-center text-sm text-gray-500 mt-4">
                    Don’t have an account?{' '}
                    <Link
                        to="/register"
                        className="text-purple-600 hover:underline"            >
                        Create account
                    </Link>
                </p>
            </div>

        </div>
    );
};

export default LoginForm;
