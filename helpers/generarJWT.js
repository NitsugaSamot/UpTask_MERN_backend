import jwt from 'jsonwebtoken'

const generarJWT = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET , {
        expiresIn: '30d',

    } )
}

export default generarJWT

// Se importa la biblioteca jsonwebtoken.
// Se define una función llamada generarJWT que toma un argumento id.
// Dentro de la función, se utiliza jwt.sign() para generar un token JWT firmado con el ID proporcionado y utilizando la clave secreta process.env.JWT_SECRET. El token generado tendrá una duración de validez de 30 días.
// Se devuelve el token JWT generado.