import React from "react";
import { useState } from "react";
import { ValidarNombre, ValidarApellido, ValidarNumero } from "../DatosUsuario/Validaciones";
import { TextField, Button, Box } from "@mui/material";

const DatosPersonales = ({ updateStep }) => {

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [number, setNumber] = useState();

  const [errorN, setErrorN] = useState(
    {
      name: {
        error: false,
        message: ""
      }
    }
  );

  const [errorLn, setErrorLn] = useState(
    {
      lastname: {
        error: false,
        message: ""
      }
    }
  );

  const [errorNum, setErrorNum] = useState(
    {
      number: {
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
        e.preventDefault();
        if( !errorN.name.error && !errorLn.lastname.error && !errorNum.number.error)
        {
          updateStep(2);
        }
        else
        {
          alert("Por favor corrige los errores para continuar");
        }
      }}
    >
      <TextField
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error = {errorN.name.error}
        helperText = {errorN.name.error ? errorN.name.message : ""}
        value = {name}
        onBlur = { (e) => {
          setErrorN(ValidarNombre(e.target.value));
        }}
        onChange = {(e) =>
        {
          setName(e.target.value);
        }}
      />
      <TextField
        label="Apellidos"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error = {errorLn.lastname.error}
        helperText = {errorLn.lastname.error ? errorLn.lastname.message : ""}
        value = {lastname}
        onBlur = { (e) => {
          setErrorLn(ValidarApellido(e.target.value));
        }}
        onChange = {(e) => 
        {
          setLastname(e.target.value);
        }}
      />
      <TextField
        label="Número telefónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="number"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        error = {errorNum.number.error}
        helperText = {errorNum.number.error ? errorNum.number.message : ""}
        value = {number}
        onBlur = { (e) => {
          setErrorNum(ValidarNumero(e.target.value));
        }}
        onChange = {(e) => {
          setNumber(e.target.value);
        }}
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );
};

export default DatosPersonales;
