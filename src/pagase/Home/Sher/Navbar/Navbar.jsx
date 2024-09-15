

 

  import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { PuffLoader } from 'react-spinners';
import { AoutContext } from '../../../../provaider/AoutProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AoutContext)

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const localTheme = localStorage.getItem('theme') || 'light';
    setTheme(localTheme);
    document.querySelector('html').setAttribute('data-theme', localTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.querySelector('html').setAttribute('data-theme', theme);
  }, [theme]);

  const handleToggle = (e) => {
    setTheme(e.target.checked ? 'synthwave' : 'light');
  };

  return (
    <div className="navbar p-3" >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="z-50 menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li className='font-bold text-1xl'><NavLink to="/">Home</NavLink></li>
            {user && <li className='font-bold text-1xl'><NavLink to="/Foods">AvailableFoods</NavLink></li>}
            {user && <li className='font-bold text-1xl'><NavLink to="/AddFood">Add Food</NavLink></li>}
            {user && <li className='font-bold text-1xl'><NavLink to="/ManageFood">Manage My Foods</NavLink></li>}
            {user && <li className='font-bold text-1xl'><NavLink to="/MyFoodRequest">My Food Request</NavLink></li>}
            <li>
              {user ? (
                <button onClick={() => logOut()} className="text-xl text-white relative px-5 py-2 font-semibold group">
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-[18deg] bg-[#188d18] group-hover:bg-[#32CC32] group-hover:skew-x-[18deg]"></span>
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-[18deg] bg-[#32CC32] group-hover:bg-[#188d18] group-hover:-skew-x-[18deg]"></span>
                  <span className="flex items-center justify-center gap-2 relative">
                    <span>logOut</span>{" "}
                  </span>
                </button>
              ) : (
                <NavLink className="btn bg-[#23BE0A]" to="/login">login</NavLink>
              )}
            </li>
          </ul>
        </div>
        <img className='lg:h-14' src="/Logo.png" alt="Logo" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="font-bold text-1xl"><NavLink to="/">Home</NavLink></li>
          <li className='font-bold text-1xl'><NavLink to="/Foods">Available Foods</NavLink></li>
          {user && <li className='font-bold text-1xl'><NavLink to="/AddFood">Add Food</NavLink></li>}
          {user && <li className='font-bold text-1xl'><NavLink to="/ManageFood">Manage My Foods</NavLink></li>}
          {user && <li className='font-bold text-1xl'><NavLink to="/MyFoodRequest">My Food Request</NavLink></li>}
        </ul>
      </div>
      <div className="navbar-end flex">
        <label className="cursor-pointer grid place-items-center mr-6">
          <input onChange={handleToggle} type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" checked={theme === 'synthwave'} />
          <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
          <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </label>
        {user ? (
          <>
            <div className='relative'>
              <div className='absolute -top-[13px] right-[10px]'>
                <PuffLoader color='blue' size={75} />
              </div>
              <div className="avatar mr-6">
                <div title={user.displayName} className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user.photoURL} alt="User Avatar" />
                </div>
              </div>
            </div>
            <div className='hidden md:inline'>
              <button onClick={() => logOut()} className='btn btn-outline border-b-8 border-t-8 border-[1px] border-green-600 text-black'>logOut</button>
            </div>
          </>
        ) : (
          <NavLink to="/login">
            <button onClick={() => logOut()} className='btn btn-outline border-b-8 border-t-8 border-[1px] border-green-600 text-black'>login</button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
