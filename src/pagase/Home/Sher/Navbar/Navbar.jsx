import { Link } from "react-router-dom";
import logo from "../../../../assets/icons/logo.svg"
import { useContext } from "react";
import { AoutContext } from "../../../../provaider/AoutProvider";


const Navbar = () => {
  const { user, logOut } = useContext(AoutContext);

  const handelesignOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error))
  }

  return (
    <div className="navbar bg-base-100 h-28 p-3">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link>HOme</Link></li>
            {/* <li> */}
            <li><Link>About</Link></li>
            {/* <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul> */}
            {/* </li> */}
            {/* <li><Link>Services</Link></li>
            <li><Link>Contact</Link></li> */}
            {/* <li><Link>Blog</Link></li>
            <li><Link>Blog</Link></li> */}
            {
              user?.email ? <>
                <li><Link to="/orders">my orders</Link></li>
                <li><button onClick={handelesignOut}>logOut</button></li>
              </> :
                <li><Link to="/Login">Login</Link></li>

            }
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link>HOme</Link></li>
          <li><Link>About</Link></li>
     
          {/* <li><Link>Contact</Link></li>
            <li><Link>Blog</Link></li> */}
          {
            user ? <>
              <li><Link to="/orders">my orders</Link></li>
              <li><button onClick={handelesignOut}>signOut</button></li>
            </> :
              <li><Link to="/Login">Login</Link></li>
          }
            {
        user &&
     
         <img className="w-12 rounded-full" referrerPolicy="no-referrer" src={user.photoURL} />
  
         
      }
        </ul>
      </div>
    
    </div>
  );
};

export default Navbar;