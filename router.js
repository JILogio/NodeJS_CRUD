const express = require('express');
const axios = require('axios')
const router = express.Router();

const conexion = require('./database/db');

//Mostrar los registros
router.get('/',(req,res)=>{
    
    conexion.query('SELECT * FROM users',(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('index',{results:results})
        }
    })
})

//Ruta crear registros    
router.get('/create',(req, res) =>{
    res.render('create');
})

//Ruta editar registros
router.get('/edit/:id',(req, res)=>{
    const id = req.params.id;
    conexion.query('SELECT * FROM users WHERE id=?',[id],(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('edit', {user:results[0]});
        }
    })
})

//Ruta para eliminar
router.get('/delete/:id',(req,res)=>{
    const id = req.params.id;
    conexion.query('DELETE FROM users WHERE id = ?',[id],(error,results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/');
        }
    })
    
})

const crud = require('./controllers/crud');
router.post('/save',crud.save);
router.post('/update',crud.update);

//Rutas de decriptación y encriptacion
router.get('/encrypt', (req, res) => {
  res.render('encrypt', { ciphertext: null,plaintext: null });
});
  
  router.post('/encrypt', async (req, res) => {
    const { text } = req.body;
    try {
      const response = await axios.post('http://localhost:3900/api/encrypt', { text });
      res.render('encrypt', { ciphertext: response.data.ciphertext.data, plaintext: null });
    } catch (error) {
      console.error('Error encriptando texto:', error.message);
      res.status(500).send(error.message);
    }
  });
  
  router.post('/decrypt', async (req, res) => {
    const { ciphertext } = req.body;
    try {
      const response = await axios.post('http://localhost:3900/api/decrypt', { ciphertext } );
      res.render('encrypt', { ciphertext: null, plaintext: response.data.plaintext });
    } catch (error) {
      console.error('Error desencriptando texto:', error.message);
      res.status(500).send(error.message);
    }
  });

module.exports = router;