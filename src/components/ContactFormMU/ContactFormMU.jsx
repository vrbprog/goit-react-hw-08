import { useDispatch } from "react-redux";
import { TextField, Button, Box, Switch, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { object, string } from "yup";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import { login } from "../../redux/auth/operations";
import s from "./ContactFormMU.module.css";
import { useState } from "react";
import css from "./ContactFormMU.module.css";

const initalValues = {
    name: "",
    phone: "",
};

const ContactFormMU = () => {
    const [check, setCheck] = useState(false);
    const handleChange = (event) => {
        console.log(event.target.checked);
        setCheck(event.target.checked);
    };

    const dispatch = useDispatch();
    return (
        <div className={s.formWrapper}>
            <Formik
                initialValues={initalValues}
                validationSchema={object({
                    name: string()
                        .required("Please enter name")
                        .min(2, "Name too short"),
                    phone: string()
                        .required("Please enter phone")
                        .min(7, "Name too phone"),
                })}
                onSubmit={(values, actions) => {
                    //
                    console.log(values);
                    actions.resetForm();
                }}
            >
                {({ errors, isValid, touched, dirty }) => (
                    <Form>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#21035a",
                            }}
                        >
                            <h4 className={check && css.disabled}>
                                Find contact
                            </h4>
                            <Switch
                                checked={check}
                                onChange={handleChange}
                                inputProps={{ "aria-label": "controlled" }}
                            />
                            <h4 className={!check && css.disabled}>
                                New contact
                            </h4>
                        </div>
                        <Box height={24} />
                        {check ? (
                            <>
                                <Field
                                    name="name"
                                    type="name"
                                    as={TextField}
                                    variant="outlined"
                                    color="primary"
                                    label="Name"
                                    fullWidth
                                    error={
                                        Boolean(errors.name) &&
                                        Boolean(touched.name)
                                    }
                                    helperText={
                                        Boolean(touched.name) && errors.name
                                    }
                                />
                                <Box height={14} />
                                <Field
                                    name="phone"
                                    type="phone"
                                    as={TextField}
                                    variant="outlined"
                                    color="primary"
                                    label="Phone"
                                    fullWidth
                                    error={
                                        Boolean(errors.phone) &&
                                        Boolean(touched.phone)
                                    }
                                    helperText={
                                        Boolean(touched.phone) && errors.phone
                                    }
                                />
                                <Box height={44} />

                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    disabled={!isValid || !dirty}
                                >
                                    Add contact
                                </Button>
                            </>
                        ) : (
                            <>
                                <Field
                                    name="filter"
                                    type="filter"
                                    as={TextField}
                                    variant="outlined"
                                    color="primary"
                                    label="Filter"
                                    fullWidth
                                    onChange={(e) => {
                                        console.log(e.target.value);
                                    }}
                                />
                                <Box height={150} />
                            </>
                        )}
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ContactFormMU;
