import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";
import { RiContactsBook3Line } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import ActiveUser from "../ActiveUser/ActiveUser";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, selectIsLoggedIn } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

export default function Navigation() {
    const dispatch = useDispatch();

    const isLoggin = useSelector(selectIsLoggedIn);
    const user = useSelector(selectUser);
    const isRefreshing = false;
    const isLogging = !isRefreshing && isLoggin;

    const activeLink = ({ isActive }) => {
        return clsx(css.link, isActive && css.active);
    };

    const handleLogout = () => {
        dispatch(logout());
        console.log("Logout action dispatched");
    }

    return (
        <div className={css.container}>
            <nav className={css.navigation}>
                <div>
                    <NavLink to="/" className={activeLink}>
                        Home
                    </NavLink>
                    {isLogging &&
                        <NavLink to="/contacts" className={activeLink}>
                            Contacts<RiContactsBook3Line />
                        </NavLink>
                    }
                </div>
                <div className={css.auth}>
                    {isLogging ?
                        <>
                            <FaUserCircle color="#21035a" size={66}/>
                            <ActiveUser user={user}/>
                            <span className={css.separator}>|</span>
                            {/* <Button >Log out</Button> */}
                            <button type="button" onClick={handleLogout}>
                                Log out
                            </button>
                        </> :
                        <>
                            <NavLink to="/login" className={activeLink}>
                            Log in
                            </NavLink>
                            <span className={css.separator}>|</span>
                            <NavLink to="/registartion" className={activeLink}>
                                Registration
                            </NavLink>
                        </>
                    }
                </div>
            </nav>
        </div> 
    );
}
