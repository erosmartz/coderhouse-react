/* eslint-disable no-unused-vars */
import { collection, addDoc } from "firebase/firestore";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik, Form } from "formik";

import * as yup from "yup";

const formSchema = yup.object({
  name: yup
    .string()
    .min(2, "Cantidad minima de caracteres: 2")
    .max(30)
    .required("Campo requerido."),
  lastName: yup
    .string()
    .min(2, "Cantidad minima de caracteres: 2")
    .max(30)
    .required("Campo requerido."),
  email: yup
    .string()
    .email("Ingrese un mail correcto")
    .required("Campo requerido."),
});

const submitHandle = (values, resetForm) => {
  console.log(values);
  resetForm();
};

const ShopForm = () => {
  return (
    <Box>
      <Formik
        initialValues={{ name: "", lastName: "", email: "" }}
        onSubmit={(values, { resetForm }) => submitHandle(values, resetForm)}
        validationSchema={formSchema}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isValid,
          dirty,
        }) => (
          <form
            className="Form"
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column" }}>
            <TextField
              name="name"
              value={values.name}
              onChange={handleChange}
              sx={{ mb: "8px" }}
              placeholder="Nombre"
            />
            {errors.name && (
              <span style={{ color: "red", fontStyle: "italic" }}>
                {errors.name}
              </span>
            )}
            <TextField
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              sx={{ mb: "8px" }}
              placeholder="Apellido"
            />
            {errors.lastName && (
              <span style={{ color: "red", fontStyle: "italic" }}>
                {errors.lastName}
              </span>
            )}
            <TextField
              name="email"
              value={values.email}
              onChange={handleChange}
              sx={{ mb: "8px" }}
              placeholder="Email"
            />
            {errors.email && (
              <span
                style={{
                  color: "red",
                  fontStyle: "italic",
                  marginBottom: "12px",
                }}>
                {errors.email}
              </span>
            )}
            <Button
              type="submit"
              disabled={!(isValid && dirty)}
              variant="outlined"
              color="success"
              sx={{ height: "50px" }}>
              Confirmar Compra
            </Button>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default ShopForm;
