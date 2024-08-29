import { NavLink, Outlet } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa6";
import { IoReorderThreeOutline, IoWalletSharp } from "react-icons/io5";
import { VscPreview } from "react-icons/vsc";
import { TbBrandBooking } from "react-icons/tb";
import { IoMdHome } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";
import useCart from "../hooks/useCart";
import { AiFillHome } from "react-icons/ai";
import { ImSpoonKnife } from "react-icons/im";
import { FaBook, FaUsers } from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
    const { cart } = useCart()
    console.log(cart.length)
    const { isAdmin } = useAdmin()
    console.log(isAdmin)
    return (
        <div>

            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                        Open drawer
                    </label>
                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="bg-[#D1A054] menu sidebar  text-base-content min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        {
                            isAdmin?.admin === true ? <><li><NavLink to={'/dashboard/adminHome'}><AiFillHome />
                                <p>Admin Home</p></NavLink></li>
                                <li><NavLink to={'/dashboard/additems'}><ImSpoonKnife />Add Items</NavLink></li>
                                <li><NavLink to={'/dashboard/manageitems'}><IoReorderThreeOutline />
                                    Manage Items</NavLink></li>
                                <li><NavLink to={'/dashboard/booking'}><FaBook /> Manage Bookings</NavLink></li>
                                <li><NavLink to={'/dashboard/allUsers'}><FaUsers /> All Users</NavLink></li>
                            </> : <>
                            <li><NavLink to={'/dashboard/userhome'}><AiFillHome /> User Home</NavLink></li>
                            <li><NavLink to={'/dashboard/mycart'}><FaCartArrowDown></FaCartArrowDown>
                                <p>mycart</p> <p className="bg-rose-800 px-4 py-2 rounded">{cart ? cart.length : 0}</p> </NavLink></li>
                                <li><NavLink to={'/dashboard/payment'}><IoWalletSharp></IoWalletSharp>Payment</NavLink></li>
                                <li><NavLink to={'/dashboard/review'}><VscPreview></VscPreview>Add Review</NavLink></li>
                                <li><NavLink to={'/dashboard/booking'}><TbBrandBooking></TbBrandBooking> My Booking</NavLink></li></>
                        }

                        <hr className="h-1 bg-slate-700" />
                        <li><NavLink to={'/'}><IoMdHome></IoMdHome> Home</NavLink></li>
                        <li><NavLink to={'/ourmenu'}><IoIosMenu></IoIosMenu> Menu</NavLink></li>
                        <li><NavLink to={'/shop'}><FaBagShopping></FaBagShopping> Shop</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;