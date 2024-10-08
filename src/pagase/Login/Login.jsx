import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/images/login/login.svg";
import { useContext } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";
import { AoutContext } from "../../provaider/AoutProvider";

const Login = () => {
    const { signIn, googleLogin } = useContext(AoutContext)
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {
                toast.success('Google login successfully');
                navigate('/');  
            })
            .catch(error => {
                toast.error(error.message);
                console.log(error);
            });
    };

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);

                // jwt 

                const user = { email };
                axios.post('https://car-doctor-server-nine-gilt.vercel.app/jwt', user, {withCredentials:true })
                    .then(res => {
                        // console.log(res.data);
                        if(res.data.success){

                            navigate('/');  
                        }
                    });
            })
            .catch(error => console.log(error));
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div>
                <Helmet>
                    <title>Login</title>
                </Helmet>
            </div>
            <div className="hero-content flex-col lg:flex-row ">

                <div className="text-center lg:text-left w-1/2">
                    <img src={login} alt="" />
                </div>

                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-2xl font-bold mr-10">Login now!</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password" name="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-[#ff3411]" type="submit" value="Login" />
                            </div>
                        </form>
                        <a href="#" className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <div className="px-4 py-2">
                                <svg className="w-6 h-6" viewBox="0 0 40 40">
                                    <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                                    <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C13.6358 3.33333 8.1158 7.22083 5.25497 12.2425Z" fill="#FF3D00" />
                                    <path d="M20 36.6667C24.2975 36.6667 28.1717 35.0683 31.1258 32.3775L26.0483 27.9917C24.3192 29.345 22.2275 30.0008 20 30C15.6642 30 11.9867 27.2275 10.6017 23.3725L5.14917 27.5533C8.0375 32.6875 13.5175 36.6667 20 36.6667Z" fill="#4CAF50" />
                                    <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.855 24.8858 27.8492 26.24 26.5125 27.2575C26.5142 27.2567 26.5158 27.2558 26.5175 27.2542L31.5542 31.1442C31.1892 31.485 36.6667 27.5 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                                </svg>
                            </div>
                            <span onClick={handleGoogleLogin} className="w-5/6 px-4 py-3 font-bold text-center">Sign in with Google</span>
                        </a>
                        <ToastContainer />
                        <p className="p-3 text-center">New to cars doctor <Link className="font-bold text-orange-300" to="/singUp">Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;
