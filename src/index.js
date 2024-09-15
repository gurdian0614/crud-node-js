import app from './app.js'
import { PORT } from './config.js'

/**
 * Configuracion del servidor
 */
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))