import React from 'react';
import reactLogo from '../assets/react.svg'
import logotop from '../assets/logo.png'

const Navbar = ({coin}) => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">
      <img src={logotop} alt="" className='w-[70%]' />
    </a>
  </div>
  <div className="flex justify-center items-center">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>Fixture</a></li>
      <li><a>Teams</a></li>
      <li><a>Schedules</a></li>
      
      
    </ul>
    <div className='flex justify-center items-center gap-2 btn btn-ghost text-xl'>
            <span>{coin} coins </span>
            <img src={reactLogo} alt="" className='max-w-[70%]' />
        </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;