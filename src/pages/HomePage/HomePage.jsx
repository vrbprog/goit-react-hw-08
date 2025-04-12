import css from "./HomePage.module.css";
import image from "../../assets/img/ContactsApp.png";

export default function HomePage() {


    return (
        <div className={css.headerTrending}>
            <img  src={image} />
        </div>
    );
}
