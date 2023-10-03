const generarId = () => {
    const random = Math.random().toString(32).substring(2)
    const fecha = Date.now().toString(32)
    return random + fecha
}

export default generarId


// Se define una función llamada generarId que no toma argumentos.
// Dentro de la función, se genera un valor aleatorio alfanumérico mediante Math.random() y se convierte a una cadena en base 32.
// Luego, se obtiene la fecha actual en milisegundos mediante Date.now(), y también se convierte a una cadena en base 32.
// Finalmente, se concatena el valor aleatorio y la fecha actual para formar un ID único y se devuelve este ID.