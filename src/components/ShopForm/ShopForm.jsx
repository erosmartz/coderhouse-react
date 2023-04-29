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
});

const ShopForm = () => {

    const [purchaseID, setPurchaseID] = useState("");


  const submitHandle = async (values, resetForm) => {

    const docRef = await addDoc(collection(db, "purchases"), {
      values,
    });

    resetForm();

    setPurchaseID(docRef.id)
  };

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

      {purchaseID.length ? <ShopMsg purchaseID={purchaseID}/> : null}
    </Box>
  );
};

export default ShopForm;
