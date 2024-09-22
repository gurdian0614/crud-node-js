import { pool } from "../db.js";

export const getEmployees = async(req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM employee")
        res.json(rows)
    } catch (error) {
        return res.status(500).json({ message: error })
    }
}

export const getEmployee = async(req, res) => {
    try {
        const { id } = req.params;
        const [ rows ] = await pool.query("SELECT * FROM employee WHERE id = ?", [ id ])

        if (rows.length <= 0) {
            return res.status(404).json({ message: "Employee not found" })
        }

        res.json(rows[0])
    } catch (error) {
        return res.status(404).json({ message: error })
    }
}

export const createEmployee = async (req, res) => {
    try {
        const { name, salary } = req.body

        const [ rowEmployee] = await pool.query("SELECT * FROM employee WHERE name = ?", 
            [name])

        if (rowEmployee.length > 0) {
            return res.status(200).json({ message: "Ya existe el empleado" })
        }

        if(!req.body.hasOwnProperty('name')) {
            return res.status(200).json({ message: "No existe el atributo name, favor agregar en la petición" })
        }
        
        await pool.query("INSERT employee(name, salary) VALUES(?, ?)",
            [name, salary]
        )
        res.status(201).json({ message: "Empleado creado correctamente" })
    } catch (error) {
        return res.status(500).json({ message: error })
    }
}

export const updateEmployee = async (req, res) => {
    try {
        const { id } = req.params
        const { name, salary } = req.body

        const [ result ] = await pool.query(
            "UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?",
            [name, salary, id]
        )

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "No se pudo actualizar el empleado" })
        }

        res.json({ message: "Empleado actualizado correctamente"})
    } catch (error) {
        return res.status(500).json({ message: error })
    }
}

export const deleteEmployee = async(req, res) => {
    try {
        const { id } = req.params
        const [ rows ] = await pool.query("DELETE FROM employee WHERE id = ?", [ id ])

        if (rows.affectedRows <= 0) {
            return res.status(404).json({ message: "No se pudo eliminar el empleado" })
        }

        res.json({ message: "Empleado eliminado correctamente" })
    } catch (error) {
        return res.status(500).json({ message: error })
    }
}