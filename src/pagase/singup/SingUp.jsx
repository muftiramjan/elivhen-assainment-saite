
import { Link } from "react-router-dom";
import login from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AoutContext } from "../../provaider/AoutProvider";


const SingUp = () => {
    const { createuser } = useContext(AoutContext);

    const handelsingup = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const Password = form.Password.value;
        console.log(name, email, Password)

        createuser(email, Password)
            .then(Result => {
                const user = Result.user;
                console.log(user)
                if(user.providerId){
                    alert('usre creat cmplite')
                }
            })
            .catch(error => (console.log(error)))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row ">

                <div className="text-center lg:text-left w-1/2">

                    <img src={login} alt="" />
                </div>

                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-2xl font-bold mr-10">Register  now!</h1>
                        <form onSubmit={handelsingup} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">name</span>
                                </label>
                                <input type="name" placeholder="name" name="name" className="input input-bordered"  />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered"  />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password" name="Password" className="input input-bordered"  />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">

                                <input className="btn bg-[#ff3411]" type="submit" value="singup" />
                            </div>
                        </form>
                        <p className="p-3 text-center">alredy have acount?<Link className="font-bold text-orange-300" to="/Login">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;