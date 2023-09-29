import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { ValidarDireccion, ValidarCiudad, ValidarEstado } from "../DatosUsuario/Validaciones";

const DatosEntrega = ({ updateStep }) => {

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const [errorAddress, setErrorAdress] = useState(
    {
      address: {
        error: false,
        message: ""
      }
    }
  )

  const [errorCity, setErrorCity] = useState(
    {
      city: {
        error: false,
        message: ""
      }
    }
  );

  const [errorState, setErrorState] = useState(
    {
      state: {
        error: false,
        message: ""
      }
    }
  );

  return (
    <Box
      component="form"
      autocomplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onSubmit = { (e) => {
        e.preventDefault()
        if( !errorAddress.address.error && !errorCity.city.error && !errorState.state.error)
        {
          updateStep(3)
        }
        else
        {
          alert("Por favor corrige los errores para continuar");
        }
      }}
    >
      <TextField
        label="Dirección"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error = {errorAddress.address.error}
        helperText = {errorAddress.address.error ? errorAddress.address.message : ""}
        value = {address}
        onBlur = { (e) => 
        {
          setErrorAdress(ValidarDireccion(e.target.value));
        }}
        onChange = {(e) => {
          setAddress(e.target.value);
        }}
      />
      <TextField
        label="Ciudad"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error = {errorCity.city.error}
        helperText = {errorCity.city.error ? errorCity.city.message : ""}
        value = {city}
        onBlur = {(e) => {
          setErrorCity(ValidarCiudad(e.target.value));
        }}
        onChange = {(e) => {
          setCity(e.target.value);
        }}
      />
      <TextField
        label="Estado/Provincia"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error = {errorState.state.error}
        helperText = {errorState.state.error ? errorState.state.message : ""}
        value = {state}
        onBlur = {(e) => {
          setErrorState(ValidarEstado(e.target.value));
        }}
        onChange = {(e) => 
        {
          setState(e.target.value);
        }}
      />
      <Button variant="contained" type="submit">
        Crear cuenta
      </Button>
    </Box>
  );
};

export default DatosEntrega;
