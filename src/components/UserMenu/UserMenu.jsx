import { FaUserCircle } from "react-icons/fa";
import ActiveUser from "../ActiveUser/ActiveUser";
import css from "./UserMenu.module.css";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";

export default function UserMenu() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const handleLogout = () => {
        dispatch(logout());
        console.log("Logout action dispatched");
    };
    return (
        <>
            <FaUserCircle color="#21035a" size={66} />
            <ActiveUser user={user} />
            <span className={css.separator}>|</span>
            <button type="button" onClick={handleLogout}>
                Log out
            </button>
        </>
    );
}
