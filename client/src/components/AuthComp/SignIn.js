import React from "react";
import { Stack, Box, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const SignIn = (props) => {
  const label = { inputProps: { "aria-label": "Hello" } };
  const validationSchema = yup.object({
    username: yup.string("Enter your username").required("Username required!"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack spacing={2}>
        <TextField
          fullWidth
          id="username"
          name="username"
          label="Username"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Box>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox {...label} />}
              label="Remember me"
            />
          </FormGroup>
        </Box>
        <Stack justifyContent="center" direction="row">
          <Button
            color="primary"
            variant="contained"
            sx={{ width: "8rem" }}
            type="submit"
          >
            Log in
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};

export default SignIn;
