import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./ContactsPage.module.css";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import { selectLoading } from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";

export default function ContactsPage() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div className={css.wrapper}>
            <div className={css.container}>
                <ContactForm />
                <ContactList />
            </div>
        </div>
    );
}
