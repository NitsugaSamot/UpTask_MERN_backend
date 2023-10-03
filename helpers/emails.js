import nodemailer from 'nodemailer'

export const emailRegistro = async (datos) => {

    const {email, nombre, token} = datos

    
    // Se crea un objeto transport utilizando nodemailer.createTransport(). Este objeto se configura con los datos de autenticación del servidor de correo electrónico (host, puerto, usuario y contraseña) que se obtienen de las variables de entorno (process.env).
    const transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

      //Informacion del emailq|1<h1


// A continuación, se define un objeto info que contiene la información del correo electrónico a enviar. El correo electrónico incluye un remitente, destinatario, asunto, texto plano y contenido HTML. Se utiliza el enlace ${process.env.FRONTEND_URL}/confirmar/${token} para generar un enlace de confirmación de cuenta en el contenido HTML del correo electrónico. El token se inserta en el enlace y se enviará al usuario para que pueda confirmar su cuenta haciendo clic en él.

      const info = await transport.sendMail({
            from: '"UpTask - Administrador de Proyectos" <cuentas@uptask.com>',
            to: email,
            subject: "UpTask - Confirma tu cuenta",
            text: 'Confirma tu cuenta en UpTask',
            html: `<p>Hola: ${nombre} Confirma tu cuenta en UpTask</p>
                <p>Tu cuenta ya esta casi lista, solo debes comprobarla en el siguiente enlace</p>

                <a href="${process.env.FRONTEND_URL}/#/confirmar/${token}">Confirmar Cuenta</a>

                <p>Si tu no creaste esta cuenta, ignora este mensaje</p>
            `
      })
}

export const emailOlvidePassword= async (datos) => {

    const {email, nombre, token} = datos

    const transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

      //Informacion del email

      const info = await transport.sendMail({
            from: '"UpTask - Administrador de Proyectos" <cuentas@uptask.com>',
            to: email,
            subject: "UpTask - Reestablece tu Contraseña",
            text: 'Reestablece tu Contraseña en UpTask',
            html: `<p>Hola: ${nombre} Reestablece tu Contraseña en UpTask</p>
                <p>Sigue el siguiente enlace para generar un nuevo password: </p>

                <a href="${process.env.FRONTEND_URL}/#/olvide-password/${token}">Reestablecer Password</a>

                <p>Si tu no solicitaste esto ignora este email</p>
            `
      })
}