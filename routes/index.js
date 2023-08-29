var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var novedadesModel= require('../models/novedadesModel');

/* GET home page. */
router.get('/', async function(req, res, next) {
  var novedades = await novedadesModel.getNovedades()
  res.render('index', {
    novedades
  });
});

router.post('/', async (req, res, next) => {

console.log(req.body) 

  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var gmail = req.body.gmail;
  var telefono = req.body.telefono;

  var obj = {
    to: "vallenmiragaya@gmail.com",
    subject: "contacto desde la web",
    html:
      `${nombre}${apellido}Se contacto a traves y quiere mas informacion a este correo${gmail}.<br> su tel es${telefono}`,
  }; // cierra var obj

  var transporter = nodemailer.createTransport({
    host:process.env.SMTP_HOST,
    port:process.env.SMTP_PORT,
    auth: {
    user:process.env.SMTP_USER,
    pass:process.env.SMTP_PASS,
    },
  }); // Cierra transporter

  var info = await transporter.sendMail(obj);

  res.render('index', {
    message: 'mensaje enviado correctamente',
  });

}); //cierra peticion del POST

module.exports = router;
