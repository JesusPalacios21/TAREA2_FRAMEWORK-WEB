const express = require('express');
const router = express.Router();
const path = require('path');
const pool = require('../config/db');

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/create', async (req, res) => {
  try {
    const [productos] = await pool.query('SELECT * FROM productos');
    res.render('create', { productos });
  } catch (error) {
    console.error('Error al obtener productos:', error);
    res.status(500).send('Error interno del servidor');
  }
});

// Ruta para guardar el producto creado
router.post('/create', async (req, res) => {
  const { nombre, descripcion, precio } = req.body;

  try {
    await pool.query(`
      INSERT INTO productos
      (nombre, descripcion, precio)
      VALUES (?, ?, ?)
    `, [nombre, descripcion, precio]);

    res.redirect('/listar');  // Asegúrate de tener esta ruta definida
  } catch (error) {
    console.error('Error al registrar el producto:', error);
    res.status(500).send('Error al guardar producto');
  }
});

//Para listar productos
router.get('/listar', async (req, res) => {
  const [productos] = await pool.query('SELECT * FROM productos');
  res.render('listar', { productos });
});


//Para eliminar un producto
router.get('/producto/eliminar/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM productos WHERE id = ?', [id]);
    res.redirect('/listar');
  } catch (error) {
    console.error('Error al eliminar el producto:', error);
    res.status(500).send('Error al eliminar producto');
  }
});

//Edición
router.get('/producto/edit/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [producto] = await pool.query('SELECT * FROM productos WHERE id = ?', [id]);
        if (producto.length > 0) {
            res.render('edit', { producto: producto[0] });
        } else {
            res.redirect('/listar'); // O maneja el error de otra forma
        }
    } catch (error) {
        console.error('Error al obtener el producto para editar:', error);
        res.status(500).send('Error interno del servidor');
    }
});


router.post('/producto/edit/:id', async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, precio } = req.body;
    try {
        await pool.query('UPDATE productos SET nombre = ?, descripcion = ?, precio = ? WHERE id = ?', [nombre, descripcion, precio, id]);
        res.redirect('/listar');
    } catch (error) {
        console.error('Error al actualizar el producto:', error);
        res.status(500).send('Error al actualizar producto');
    }
});

module.exports = router;
