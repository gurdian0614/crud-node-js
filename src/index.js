import express from 'express'

const app = express()

/**
 * Llamado del metodo http
 * Primer parametro: ruta
 * Segundo parametro: callback
 * req: llamada
 * res: respuesta
 */
app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get('/usuarios', (req, res) => res.send('Estas en usuarios'))

/**
 * Configuracion del servidor
 */
app.listen(3000, () => console.log("Server listening on port 3000"))