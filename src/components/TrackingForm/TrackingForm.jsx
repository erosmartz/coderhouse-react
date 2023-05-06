/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* REACT */
import { useState } from "react";

/* MUI */
import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik, Form } from "formik";

/* YUP */
import * as yup from "yup";

/* FIREBASE */
import { db } from "../../firebase/firebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";
import TrackingTable from "../TrackingTable/TrackingTable";

const formSchema = yup.object({
  trackingId: yup
    .string()
    .min(3, "Los codigos de tracking tienen 20 caracteres.")
    .max(21)
    .required("Porfavor ingresar el codigo de tracking."),
});

const TrackingForm = () => {
  const [FetchedId, setFetchedId] = useState("");
  const [Queried, setQueried] = useState(false);

  const submitHandle = async (values) => {
    setQueried(false);
    const docRef = doc(collection(db, "purchases"), values.trackingId);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot && docSnapshot.exists()) {
      const docData = docSnapshot.data();
      setFetchedId(docData.cart);
    } else {
      setFetchedId(null);
      setQueried(true);
    }
  };

  return (
    <Box>
      <Typography
        align="center"
        variant="button"
        sx={{
          fontSize: "35px",
          display: "flex",
          justifyContent: "flex-start",
          mt: 2,
        }}>
        Querés ver como va tu pedido?
      </Typography>
      <Typography
        align="center"
        variant="button"
        sx={{
          fontSize: "15px",
          display: "flex",
          justifyContent: "flex-start",
          mb: 4,
        }}>
        Ingresá tu codigo de tracking abajo:
      </Typography>
      <Formik
        initialValues={{ trackingId: "" }}
        onSubmit={(values) => submitHandle(values)}
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
              name="trackingId"
              value={values.trackingId}
              onChange={handleChange}
              sx={{ mb: 3 }}
              placeholder="Código de tu compra (Tracking ID)"
            />
            {errors.name && (
              <span style={{ color: "red", fontStyle: "italic" }}>
                {errors.trackingId}
              </span>
            )}
            <Button
              type="submit"
              disabled={!(isValid && dirty)}
              variant="outlined"
              color="success"
              sx={{
                margin: "auto",
                height: "80px",
                width: "40%",
                fontSize: 20,
              }}>
              Chequear seguimiento
            </Button>
          </form>
        )}
      </Formik>

      {FetchedId !== null && !Queried && FetchedId !== "" ? (
        <Box>
          <Typography
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "25px",
            }}
            align="center"
            variant="button"
            color="success"
            component="div"
            sx={{mt:8, mb:2}}>
              Hemos encontrado tu orden:
            </Typography>
          <TrackingTable trackedOrder={FetchedId} />
          <Typography
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "16px",
            }}
            align="center"
            variant="button"
            color="success"
            component="div"
            sx={{mt:4, mb:2}}>
              Tu pedido esta siendo procesado! <br/> Recibirás tus juegos en un plazo de 3 a 7 días hábiles. <br/> Cualquier duda manda mensaje a juegos@test.com
            </Typography>
        </Box>
      ) : Queried ? (
        <Box>
          <Typography
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              fontSize: "50px",
            }}
            variant="button"
            color="error"
            component="div">
            Whoops!
          </Typography>

          <Typography
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              fontSize: "18px",
            }}
            variant="body2"
            component="div">
            El codigo de ID que pusiste no es correcto, o la órden no ha sido
            encontrada en nuestra base de datos. Chequeá de haberlo ingresado
            correctamente! Si el error persiste, contactá nuestro equipo de
            soporte : soporte@test.com
          </Typography>
        </Box>
      ) : null}
    </Box>
  );
};

export default TrackingForm;
