import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";

export default function () {
    const activeLink = ({ isActive }) => {
        return clsx(css.link, isActive && css.active);
    };
    return (
        <>
            <NavLink to="/login" className={activeLink}>
                Log in
            </NavLink>
            <span className={css.separator}>|</span>
            <NavLink to="/registartion" className={activeLink}>
                Registration
            </NavLink>
        </>
    );
}
