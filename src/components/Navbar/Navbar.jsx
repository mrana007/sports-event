import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.error(error);
        })
    }

    const navLinks =<>
        <li>
          <NavLink className="text-white" to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink className="text-white" to='/feature'>Featured Games</NavLink>
        </li>
        <li>
          <NavLink className="text-white" to='/blog'>Blog</NavLink>
        </li>
        
    </>
    return (
        <div className="navbar bg-black fixed z-10 top-0 mx-auto bg-opacity-40 shadow-lg rounded-md">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl font-extrabold text-fuchsia-600">Gaming Burst</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    {
        user ?
            <>
            <span className="pr-4"><img className="rounded-full w-11 h-11" src={user.photoURL} alt="" /></span>
            <span className="pr-4 text-white">{user.displayName}</span>
            <button onClick={handleLogOut} className="btn btn-secondary md:w-36 text-lg normal-case text-white">Log Out</button>
            </>
            :
            <Link to='/login'>
                <button className="btn btn-secondary md:w-36 text-lg normal-case text-white">Login</button>
            </Link>
    }
    
  </div>
</div>
    );
};

export default Navbar;