import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';
import useCart from '../../../hooks/useCart';
import useAdmin from '../../../hooks/useAdmin';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)
    const {cart,refetch} = useCart()
    const {isAdmin} = useAdmin()
    console.log('Isadmin',isAdmin)
    console.log('cart',cart)
    // console.log('user',user)
    const commonItems = <>
        <li><Link to={'/'}>HOME</Link></li>
        <li><a>CONTACT US</a></li>
        <li><Link to={`/dashboard/${isAdmin.admin === true?'adminHome':'userhome'}`}>DASHBOARD</Link></li>
        <li><Link to={'/secret'}>SECRET</Link></li>
        <li><Link to={'/ourmenu'}>OUR MENU</Link></li>
        <li><Link to={'/shop'}>OUR SHOP</Link></li>
    </>

    const handlelogout = () => {
        logout()
    }

    return (
        <>
            <div className="navbar fixed z-30 bg-black-rgba text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {commonItems}
                        </ul>

                    </div>
                    <a className="btn btn-ghost text-xl">BISTRO BOSS</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {commonItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to={'/dashboard/myCart'}><div className="indicator mr-5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        {!cart? refetch() : <span className="badge badge-sm indicator-item">{cart.length || 0}</span>}
                    </div></Link>
                    {
                        user ? <button className="btn" onClick={handlelogout}>Logout</button> : <Link to={'/login'}><button className="btn">Login</button></Link>
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;