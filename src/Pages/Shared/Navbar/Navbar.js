import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../Assets/Easy_Cart-removebg-preview.png";
import "./Navbar.css";
import { AuthContext } from '../../Contexts/AuthProvider';
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
      logOut()
          .then(() => { })
          .catch(err => console.log(err));
  }
    const menuItems =
    <React.Fragment>
              <li><Link to="/">Home</Link></li>
             
              {user?.uid ?
            <>
             <li><Link to="/product">Product </Link></li>
              <li><Link to="/cart"> <FontAwesomeIcon className=''icon={faCartShopping}></FontAwesomeIcon></Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><button onClick={handleLogOut}>Sign out</button></li>
            </>
            : <li><Link to="/login">Login</Link></li>}

    </React.Fragment>
    return (
        <div className="navbar  bg-orange-500 flex justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
             {menuItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl"><img className='logo' src={logo} alt="" srcset="" /></Link>
        </div>
        <div className="navbar-center text-lg text-white hidden lg:flex">
          <ul className="menu menu-horizontal px-2">
          {menuItems}
          </ul>
        </div>
       
      </div>
    );
};

export default Navbar;