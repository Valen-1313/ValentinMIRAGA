var express = require("express");
var router = express.Router();
var usuarioModel = require('../../models/usuariomodels');

router.get('/', function (req, res, next) {
  res.render('admin/login',{
    layout:'admin/layout',
    error: 'true'
  });
});

router.get('/logout',function(req,res,next) {
 req.session.destroy();
 res.render('/admin/login'),{
  layout: 'admin/login'
 } 
})

router.post('/', async (req, res, next ) => {
  try {
    console.log(req.body);
    var usuario = req.body.usuario;
    var password = req.body.password;

    var data = await usuarioModel.getUserByUsernameAndPassword(usuario,password);

    if (data != undefined){
      req.session.id_usuario = data.id; //nombre de la columna bd
      req.session.nombre = data.usuario;
      res.redirect('/admin/novedades');
    } else {
      res.render('admin/login', {
        layout: 'admin/layout',
        error: true
      });
    }
  } catch(error) {
    console.log(error)
  }
});

module.exports = router;