import express from 'express'
import employeesRoutes from './routes/employees.routes.js'

const app = express()

// Middlewares
app.use(express.json())

//Routes
app.use('/', employeesRoutes)
app.use((req, res) => res.status(404).json({ message: "Ruta incorrecta"}))

export default app