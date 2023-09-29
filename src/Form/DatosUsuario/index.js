import React from "react";
import { TextField, Button, Box } from "@mui/material";
import { useState } from "react";
import { ValidarEmail, ValidarPassword } from "./Validaciones";


//Estructura básica de una clase
class ComponenteClase extends React.Component
{
  render()
  {
    return <>Componente</>
  }
}

const ComponenteFuncion = () => {
  return <>Contenido</>
}

const DatosUsuario = ({ updateStep }) => 
{
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setError] = useState(
    {
      email:{
        error: false,
        message: ""
      },
    }
  )

  const [errorP, setErrorP] = useState(
    {
        password: {
        error: false,
        message: ""
      }
    }
  )


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
        onSubmit={(e) => {
          e.preventDefault();
          if( !errors.email.error && !errorP.password.error)
          {
            updateStep(1);
          }
          else
          {
            alert("Por favor corrige los errores para continuar")
          }
        }}
      >
        <TextField
          label="Correo electrónico"
          variant="outlined"
          fullWidth
          margin="dense"
          type="email"
          error={errors.email.error}
          helperText={errors.email.error ? errors.email.message : ""}
          onBlur = { (e) =>
            {
              setError(ValidarEmail(e.target.value))
            }
          }
          value = { email }
          onChange = {(e) => {
            setEmail(e.target.value)
          }}
        />
        <TextField
          label="Contraseña"
          variant="outlined"
          fullWidth
          margin="dense"
          type="password"
          error = {errorP.password.error}
          helperText = {errorP.password.error ? errorP.password.message : ""}
          value = { password }
          onChange = {(e) => 
          {
            setPassword(e.target.value)
          }}
          onBlur = {(e) => {
            setErrorP(ValidarPassword(e.target.value))
          }}
        />
        <Button variant="contained" type="submit">
          Siguiente
        </Button>
      </Box>
    );
}

export default DatosUsuario;
