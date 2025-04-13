import ContactForm from "../../components/ContactForm/ContactForm";
import css from "./ContactsPage.module.css";
import ContactList from "../../components/ContactList/ContactList";

export default function ContactsPage() {
    return (
        <div className={css.wrapper}>
            <div className={css.container}>
                <ContactForm />
                <ContactList />
            </div>
        </div>
    );
}
