import { Link } from "react-router-dom";
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
    <div className="navbar bg-teal-50 shadow h-28 p-3">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link>HOme</Link></li>
            <li>
              <li><Link to="AvailableFoods">AvailableFoods</Link></li>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><Link>Services</Link></li>
            <div className="navbar-end">
            {
              user? <>
                <li><Link to="/orders">my orders</Link></li>
                <li><button onClick={handelesignOut}>logOut</button></li>
              </> :
                <li><Link to="/Login">Login</Link></li>

            }
            </div>
           
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl">

          <img className="w-16 h-14 rounded-full" src="https://image.similarpng.com/very-thumbnail/2020/08/Fresh-food-logo-design-on-transparent-background-PNG.png" alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1">
          <li><Link>HOme</Link></li>
          <li><Link to="AvailableFoods">AvailableFoods</Link></li>
      
          {
            user ? <>
              <li><Link to="/orders">my orders</Link></li>
              <li><button onClick={handelesignOut}>signOut</button></li>
            </> :
              <li><Link to="/Login">Login</Link></li>}
        </ul>
<div className="navbar-center hidden lg:flex ">
{
            user &&

            <img className="w-12 rounded-full ml-44" referrerPolicy="no-referrer" src={user.photoURL} />


          }
</div>
        
      
      </div>

    </div>
  );
};

export default Navbar;


