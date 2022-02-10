import React from "react";
import {
  Stack,
  Box,
  TextField,
  Button,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const SignUp = (props) => {
  const label = { inputProps: { "aria-label": "Hello" } };
  const validationSchema = Yup.object({
    pass: Yup.string("Enter your password")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"
      )
      .required("Password is required"),
    confirmPass: Yup.string()
      .oneOf([Yup.ref("pass"), null], "Passwords must match")
      .required("Please Confirm Password"),
    email: Yup.string().email("Invalid email format").required("Required"),
    fName: Yup.string()
      .required("This field is Required!")
      .matches(/^[aA-zZ\s]+$/, "Invalid input for first name!"),
    lName: Yup.string().matches(/^[aA-zZ\s]+$/, "Invalid input for last name!"),
    terms: Yup.bool().oneOf(
      [true],
      "You must accept the pricing policy terms and conditions"
    ),
  });
  const formik = useFormik({
    initialValues: {
      fName: "",
      lName: "",
      pass: "",
      email: "",
      confirmPass: "",
      terms: false,
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const formFields = [
    {
      id: "fName",
      props: {
        name: "fName",
        fullWidth: true,
        label: "First Name",
        value: formik.values.fName,
        error: formik.touched.fName && Boolean(formik.errors.fName),
        helperText: formik.touched.fName && formik.errors.fName,
      },
    },
    {
      id: "lName",
      props: {
        name: "lName",
        fullWidth: true,
        label: "Last Name",
        value: formik.values.lName,
        error: formik.touched.lName && Boolean(formik.errors.lName),
        helperText: formik.touched.lName && formik.errors.lName,
      },
    },
    {
      id: "email",
      props: {
        fullWidth: true,
        name: "email",
        label: "E-mail",
        value: formik.values.email,
        error: formik.touched.email && Boolean(formik.errors.email),
        helperText: formik.touched.email && formik.errors.email,
      },
    },
    {
      id: "pass",
      props: {
        fullWidth: true,
        name: "pass",
        type: "password",
        label: "Password",
        value: formik.values.pass,
        error: formik.touched.pass && Boolean(formik.errors.pass),
        helperText: formik.touched.pass && formik.errors.pass,
      },
    },
    {
      id: "confirmPass",
      props: {
        fullWidth: true,
        name: "confirmPass",
        label: "Confirm Password",
        type: "password",
        value: formik.values.confirmPass,
        error: formik.touched.confirmPass && Boolean(formik.errors.confirmPass),
        helperText: formik.touched.confirmPass && formik.errors.confirmPass,
      },
    },
  ];
  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack spacing={2}>
        {formFields.map((field) => (
          <TextField
            onChange={formik.handleChange}
            key={field.id}
            {...field.props}
          />
        ))}
      </Stack>
      <Box>
        <FormControl error={formik.touched.terms && formik.errors.terms}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  id="terms"
                  name="terms"
                  checked={formik.values.terms}
                  onChange={formik.handleChange}
                  {...label}
                />
              }
              label="I accept the Terms and Conditions"
            />
          </FormGroup>
          {formik.touched.terms && formik.errors.terms && (
            <FormHelperText>Please click the checkbox above!</FormHelperText>
          )}
        </FormControl>
      </Box>
      <Stack justifyContent="center" direction="row" sx={{ mt: 2 }}>
        <Button
          color="primary"
          variant="contained"
          sx={{ width: "8rem" }}
          type="submit"
        >
          Register
        </Button>
      </Stack>
    </form>
  );
};

export default SignUp;
