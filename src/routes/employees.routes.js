import { Router } from "express";
import { 
    getEmployees,
    getEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee
} from "../controllers/employees.controller.js";

const router = Router()

/**
 * GET all Employees
 */
router.get('/employees', getEmployees)

/**
 * GET Employees by id
 */
router.get('/employees/:id', getEmployee)

/**
 * INSERT an employee
 */
router.post('/employees', createEmployee)

/**
 * PATCH an employee
 */
router.patch('/employees/:id', updateEmployee)

/**
 * DELETE an employee
 */
router.delete('/employees/:id', deleteEmployee)

export default  router