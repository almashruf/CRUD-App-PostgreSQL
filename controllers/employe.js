import { query } from "../utils/connectToDB.js";
import {
  createRoleQuery,
  createEmployeTableQuery,
  getAllEmployeQuery,
  createEmployeQuery,
} from "../utils/sqlQuery.js";

import { createError } from "../utils/error.js";

export async function getAllEmploye(req, res, next) {
  try {
    const response = await query(`
            SELECT to_regclass('employe_details');`);
    console.log(response);
    if (!response.rows[0].to_regclass) {
      await query(createRoleQuery);
      await query(createEmployeTableQuery);
    }
    const { rows } = await query(getAllEmployeQuery);
    //throw new Error("hi")
    res.status(200).json(rows);
  } catch (error) {
    console.log(error.message);
    return next(createError(400, "Couldn't get employe details!"));
  }
}
export async function createEmploye(req, res, next) {
  try {
    const { name, role, salary, age, email } = req.body;
    if (!name || !role || !salary || !age || !email) {
      return res.status(400).json({ error: "Missing fields" });
    }
    const data = await query(createEmployeQuery, [
      name,
      email,
      age,
      role,
      salary,
    ]);
    res.status(201).json(data.rows[0])
  } catch (error) {
    console.log(error.message);
    return next(createError(400, error.message));
  }
}
export async function deleteEmploye(req, res, next) {}
export async function updateEmploye(req, res, next) {}
export async function getEmploye(req, res, next) {}
