import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { RiContactsBook3Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import clsx from "clsx";

export default function Navigation() {
    const activeLink = ({ isActive }) => {
        return clsx(css.link, isActive && css.active);
    };
    const isLoggin = useSelector(selectIsLoggedIn);

    return (
        <div>
            <NavLink to="/" className={activeLink}>
                Home
            </NavLink>
            {isLoggin && (
                <NavLink to="/contacts" className={activeLink}>
                    Contacts
                    <RiContactsBook3Line />
                </NavLink>
            )}
        </div>
    );
}
