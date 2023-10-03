import mongoose from "mongoose"
import bcrypt from "bcrypt"

const usuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    token: {
        type: String
    },
    confirmado: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
    }
)

usuarioSchema.pre('save', async function(next){
    if(!this.isModified('password')) {
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

usuarioSchema.methods.comprobarPassword = async function(passwordFormulario) {
    return await bcrypt.compare (passwordFormulario, this.password)
}

const Usuario = mongoose.model('Usuario', usuarioSchema)
export default Usuario





















// Usuario.js:

// Se importa mongoose y bcrypt.
// Se define el esquema de datos del modelo de usuario utilizando Mongoose. El esquema contiene las propiedades nombre, password, email, token y confirmado.
// Se utiliza un pre-hook para encriptar la contraseña antes de guardarla en la base de datos. Esto garantiza que la contraseña del usuario esté protegida.
// usuariosRoutes.js:

// Se importa express y se crea un router utilizando express.Router().
// Se importan todos los controladores de usuario (registrar, autenticar, confirmar, olvidePassword, comprobarToken, nuevoPassword y perfil).
// Se importa el middleware checkAuth.
// Se definen las rutas para las diversas acciones relacionadas con los usuarios, como registro, inicio de sesión, confirmación de cuenta, recuperación de contraseña y acceso al perfil del usuario.