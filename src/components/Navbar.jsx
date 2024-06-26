import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <img src={logo} alt='logo' className='w-10 h-10 object-contain' />
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/contact' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          Contact me
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
