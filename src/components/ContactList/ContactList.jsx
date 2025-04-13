import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { green } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AssignmentIcon from "@mui/icons-material/Assignment";
import css from "./ContactList.module.css";

export default function ContactList() {
    return (
        <div className={css.list}>
            <Card sx={{ width: 320 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: green[500] }}>
                            <AssignmentIcon />
                        </Avatar>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                    action={
                        <IconButton onClick={() => console.log("clicked")}>
                            <DeleteIcon />
                        </IconButton>
                    }
                />
            </Card>
            <Card sx={{ width: 320 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: green[500] }}>
                            <AssignmentIcon />
                        </Avatar>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                    action={
                        <IconButton onClick={() => console.log("clicked")}>
                            <DeleteIcon />
                        </IconButton>
                    }
                />
            </Card>
            <Card sx={{ width: 320 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: green[500] }}>
                            <AssignmentIcon />
                        </Avatar>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                    action={
                        <IconButton onClick={() => console.log("clicked")}>
                            <DeleteIcon />
                        </IconButton>
                    }
                />
            </Card>
            <Card sx={{ width: 320 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: green[500] }}>
                            <AssignmentIcon />
                        </Avatar>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                    action={
                        <IconButton onClick={() => console.log("clicked")}>
                            <DeleteIcon />
                        </IconButton>
                    }
                />
            </Card>
            <Card sx={{ width: 320 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: green[500] }}>
                            <AssignmentIcon />
                        </Avatar>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                    action={
                        <IconButton onClick={() => console.log("clicked")}>
                            <DeleteIcon />
                        </IconButton>
                    }
                />
            </Card>
            <Card sx={{ width: 320 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: green[500] }}>
                            <AssignmentIcon />
                        </Avatar>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                    action={
                        <IconButton onClick={() => console.log("clicked")}>
                            <DeleteIcon />
                        </IconButton>
                    }
                />
            </Card>
            <Card sx={{ width: 320 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: green[500] }}>
                            <AssignmentIcon />
                        </Avatar>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                    action={
                        <IconButton onClick={() => console.log("clicked")}>
                            <DeleteIcon />
                        </IconButton>
                    }
                />
            </Card>
            <Card sx={{ width: 320 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: green[500] }}>
                            <AssignmentIcon />
                        </Avatar>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                    action={
                        <IconButton onClick={() => console.log("clicked")}>
                            <DeleteIcon />
                        </IconButton>
                    }
                />
            </Card>
            <Card sx={{ width: 320 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: green[500] }}>
                            <AssignmentIcon />
                        </Avatar>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                    action={
                        <IconButton onClick={() => console.log("clicked")}>
                            <DeleteIcon />
                        </IconButton>
                    }
                />
            </Card>
        </div>
    );
}
