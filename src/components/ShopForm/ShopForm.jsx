/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* REACT */
import { useState } from 'react';

/* MUI */
import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik, Form } from "formik";

/* YUP */
import * as yup from "yup";

/* FIREBASE */
import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";


/* COMPONENTS */
import ShopMsg from "../ShopMsg/ShopMsg"

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
    emailConfirm: yup
    .string()
    .oneOf([yup.ref('email'), null], 'Los emails no coinciden')
    .required('Campo requerido')
});

const ShopForm = ({cart, setCart}) => {

    const [purchaseID, setPurchaseID] = useState("");


  const submitHandle = async (values, resetForm) => {

    const docRef = await addDoc(collection(db, "purchases"), {
      values,
      cart,
    });

    resetForm();
    setPurchaseID(docRef.id);
    setCart([]);
  };

  return (
    <Box>
      <Typography
        align="center"
        variant="button"
        sx={{ fontSize: "30px", display: "flex", justifyContent: "center",mt:2,mb:5 }}>
        Ingresá tus datos
      </Typography>
      <Formik
        initialValues={{ name: "", lastName: "", email: "", emailConfirm: "" }}
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
            <TextField
              name="emailConfirm"
              value={values.emailConfirm}
              onChange={handleChange}
              sx={{ mb: "8px" }}
              placeholder="Escribir Email de vuelta"
            />
            {errors.emailConfirm && (
              <span
                style={{
                  color: "red",
                  fontStyle: "italic",
                  marginBottom: "12px",
                }}>
                {errors.emailConfirm}
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

      {purchaseID.length ? <ShopMsg purchaseID={purchaseID}/> : null}
    </Box>
  );
};

export default ShopForm;
