import { useDispatch } from "react-redux";
import { TextField, Button, Box } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { object, string } from "yup";
import { FaLock } from "react-icons/fa";
import { login } from "../../redux/auth/operations";

const initalValues = {
  email: "",
  password: "",
};

const MaterialForm = () => {

  const dispatch = useDispatch();
  return (
    <div className="MaterialForm">
      <Formik
        initialValues={initalValues}
        validationSchema={object({
          email: string().required("Please enter email").email("Invalid email"),
          password: string()
            .required("Please enter password")
            .min(7, "Password should be minimum 7 characters long"),
        })}
        onSubmit={(values, actions) => {
          dispatch(login(values));
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
                <h2>Login</h2>
                <FaLock size={38}/>
            </div>
            
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
              Log in
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MaterialForm;
