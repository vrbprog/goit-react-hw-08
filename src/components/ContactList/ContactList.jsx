import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { green } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AssignmentIcon from "@mui/icons-material/Assignment";
import css from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { deleteContact } from "../../redux/contacts/operations";

export default function ContactList() {
    const dispatch = useDispatch();
    const filteredList = useSelector(selectFilteredContacts);

    const handleDelete = (id) => {
        dispatch(deleteContact(id));
    }

    const listItems = filteredList.map((contact) => (
        <Card sx={{ width: 320 }} key={contact.id}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: green[500] }}>
                        <AssignmentIcon />
                    </Avatar>
                }
                title={contact.name}
                subheader={contact.number}
                action={
                    <IconButton onClick={() => handleDelete(contact.id)} aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                }
            />
        </Card>
    ));
    
    return <div className={css.list}>{listItems}</div>;
}
