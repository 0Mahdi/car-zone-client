import { NavLink, Outlet } from "react-router-dom";
import { FaWallet, FaHome, FaBars, FaCartPlus, FaUsers, FaFile, FaBook, FaPeopleArrows,} from 'react-icons/fa';
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const DashBoard = () => {

    const [cart] = useCart();

    //todo
    const [isAdmin] = useAdmin();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            
            </div> 
            <div className="drawer-side bg-[#33FF77]">
                <label htmlFor="my-drawer-2"className="drawer-overlay"></label> 
                <ul className="menu p-4 w-80">

                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/home"><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/addCar"><FaFile></FaFile> Add Car</NavLink></li>
                            <li><NavLink to="/dashboard/makeAdmin"><FaPeopleArrows></FaPeopleArrows> Make Admin</NavLink></li>
                           
                            <li><NavLink to="/dashboard/allBookings"><FaBook></FaBook> Manage Bookings</NavLink></li>
                            <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li>
                           
                        </> : <>
                            <li><NavLink to="/dashboard/home"><FaHome></FaHome> User Home</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li>
                            <li>
                                <NavLink to="/dashboard/mycart"><FaCartPlus></FaCartPlus> My Car
                                <div className="badge badge-secondary">+{cart?.length || 0}</div>
                                </NavLink>
                            </li>
                        </>
                    }

                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to="/carCategories"><FaBars></FaBars> Car Categories</NavLink></li>
                    <li><NavLink to="/cars/bmw">Cars Zone</NavLink></li>


                </ul>
            
            </div>
        </div>
    );
};

export default DashBoard;