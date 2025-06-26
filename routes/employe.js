import express from 'express';
import { getAllEmploye, getEmploye, deleteEmploye, updateEmploye, createEmploye } from '../controllers/employe.js';

const router = express.Router();

router.get('/', getAllEmploye)

router.post('/', createEmploye)

router.get('/:id', getEmploye)

router.delete('/:id', deleteEmploye)

router.put('/:id', updateEmploye)


export default router;