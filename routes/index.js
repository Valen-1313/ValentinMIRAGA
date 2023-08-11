var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

console.log(req.body)// captura los datos??

router.post('/', async (req, res, next) => {
  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var gmail =req.body.gmail;
  var telefono =req.body.telefono;

var obj = {
  to: 'vallenmiragaya@gmail.com',
  subject: 'contacto desde la web',
  html: nombre + '' + apellido + 'Se contacto a traves y quiere mas informacion a este correo' + gmail + '.<br> su tel es' + telefono
} // cierra var obj

var transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
  user:  process.env.SMTP_USER,
  pass:  process.env.SMTP_PASS,
  }

}) // Cierra transporter

var info = await transporter.sendMail(obj);

res.render('index', {
  message: 'mensaje enviado correctamente',
});

}); //cierra peticion del POST

 




module.exports = router;
