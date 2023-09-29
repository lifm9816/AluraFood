export const ValidarEmail = (email) =>
{
    if(email.length > 8 && email.includes("@"))
    {
        return {
            email: {
                error: false,
                message: ""
            }
        }
    }
    else{
        if(email.length < 8)
        {
            return {
                email: {
                    error: true,
                    message: "El correo electrónico debe contener al menos 8 caracteres"
                }
            }
        }
        else{
            return {
                email: {
                    error: true,
                    message: "El correo electrónico debe llevar el signo @"
                }
            }
        }
    }
}

export const ValidarPassword = (password) =>
{
    if(password.length > 8)
    {
        return {
            password: {
                error: false,
                message: ""
            }
        }
    }
    else
    {
        return {
            password: {
                error: true,
                message: "La contraseña debe contener al menos 8 caraceteres"
            }
        }
    }
}

export const ValidarNombre = (name) =>
{
    if(name.length > 2)
    {
        return {
            name: {
                error: false,
                message: ""
            }
        }
    }
    else
    {
        return {
            name: {
                error: true,
                message: "El campo nombre debe llevar al menos 3 caracteres"
            }
        }
    }
}

export const ValidarApellido = (lastname) =>
{
    if(lastname.length != 0)
    {
        return {
            lastname: {
                error: false,
                message: ""
            }
        }
    }
    else
    {
        return {
            lastname: {
                error: true,
                message: "El campo apellido no puede estar vacío"
            }
        }
    }
}

export const ValidarNumero = (number) =>
{
    if(number.length === 10)
    {
        return {
            number: {
                error: false,
                message: ""
            }
        }
    }
    if(number.length === null)
    {
        return {
            number: {
                error: true,
                message: "El campo número telefónico no puede estar vacío"
            }
        }
    }
    if(number.length < 10 || number.length > 10)
    {
        return {
            number: {
                error: true,
                message: "El número telefónico no debe ser menor o mayor a 10 dígitos"
            }
        }
    }
}

export const ValidarDireccion = (address) =>
{
    if(address === null || address.length < 3)
    {
        return {
            address: {
                error: true,
                message: "El campo dirección no puede estar vacío y debe ser mayor a 3 caracteres"
            }
        }
    }
    else
    {
        return {
            address: {
                error: false,
                message: ""
            }
        }
    }
}

export const ValidarCiudad = (city) =>
{
    if(city === null || city.length < 3)
    {
        return {
            city: {
                error: true,
                message: "El campo ciudad no puede estar vacío y debe ser mayor a 3 caracteres"
            }
        }
    }
    else
    {
        return {
            city: {
                error: false,
                message: ""
            }
        }
    }
}

export const ValidarEstado = (state) =>
{
    if(state === null || state.length < 3)
    {
        return {
            state: {
                error: true,
                message: "El campo estado no puede estar vacío y debe ser mayor a 3 caracteres"
            }
        }
    }
    else
    {
        return{
            state: {
                error: false,
                message: ""
            }
        }
    }
}