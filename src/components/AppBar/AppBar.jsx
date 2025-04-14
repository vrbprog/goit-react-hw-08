import css from "./AppBar.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";

export default function AppBar() {
    const isLoggin = useSelector(selectIsLoggedIn);

    return (
        <div className={css.container}>
            <nav className={css.navigation}>
                <Navigation />
                <div className={css.auth}>
                    {isLoggin ? <UserMenu /> : <AuthNav />}
                </div>
            </nav>
        </div>
    );
}
