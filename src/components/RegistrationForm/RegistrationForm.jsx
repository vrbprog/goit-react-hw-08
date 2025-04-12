
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { TextField, Button, Box } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { object, string } from "yup";
import { FaPenToSquare } from "react-icons/fa6";

const initalValues = {
  email: "",
  name: "",
  password: "",
};

const RegistrationForm = () => {

  const dispatch = useDispatch();

  return (
    <div className="MaterialForm">
      <Formik
        initialValues={initalValues}
        validationSchema={object({
          email: string().required("Please enter email").email("Invalid email"),
          name: string().required("Please enter name").min(2, "Name too short"),
          password: string()
            .required("Please enter password")
            .min(7, "Password should be minimum 7 characters long"),
        })}
        onSubmit={(values, actions) => {
          //console.log(values);
          dispatch(register(values));
          actions.resetForm();
        }}
      >
        {({ errors, isValid, touched, dirty }) => (
        <Form>
            <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#21035a",
                }}>
                <h2>Registration</h2>
                <FaPenToSquare size={38}/>
            </div>

            <Field
              name="name"
              type="name"
              as={TextField}
              variant="outlined"
              color="primary"
              label="Name"
              fullWidth
              error={Boolean(errors.name) && Boolean(touched.name)}
              helperText={Boolean(touched.name) && errors.name}
            />
            <Box height={14} />
            <Field
              name="email"
              type="email"
              as={TextField}
              variant="outlined"
              color="primary"
              label="Email"
              fullWidt
              error={Boolean(errors.email) && Boolean(touched.email)}
              helperText={Boolean(touched.email) && errors.email}
            />
            <Box height={14} />
            <Field
              name="password"
              type="password"
              as={TextField}
              variant="outlined"
              color="primary"
              label="Password"
              fullWidth
              error={Boolean(errors.password) && Boolean(touched.password)}
              helperText={Boolean(touched.password) && errors.password}
            />
            <Box height={44} />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              disabled={!isValid || !dirty}
            >
              Registration
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;