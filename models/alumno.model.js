import { pool } from "../database/connection.js";

//consultar todos los alumnos de la base.

const findAll = async () => {
  const { rows } = await pool.query("SELECT * FROM alumnos");
  return rows;
};

//consultar un alumno a la base por su rut
const findOneByRut = async (rut) => {
  const query = {
    text: `SELECT * FROM ALUMNOS WHERE RUT = $1`,
    values: [rut],
  };
  const { rows } = await pool.query(query);
  return rows[0];
};
//crearemos un alumno a la base
const create = async ({ nombre, rut, curso, nivel }) => {
  const query = {
    text: `INSERT INTO ALUMNOS (NOMBRE, RUT, CURSO, NIVEL)
    VALUES ($1, $2, $3, $4)
    RETURNING * `,
    values: [nombre, rut, curso, nivel],
  };
  const { rows } = await pool.query(query);
  console.log(rows[0]);
};
//update alumno en la base POR RUT
const update = async (alumno) => {
  const query = {
    text: `UPDATE ALUMNOS
  SET CURSO = $2,
  NIVEL =  $3
  WHERE RUT = $1
  RETURNING *`,
    values: [alumno.rut, alumno.curso, alumno.nivel],
  };
  const { rows } = await pool.query(query);
  return rows[0];
};

//Eliminar Alumnos by RUT
const remove = async (rut) => {
  const query = {
    text: `
          DELETE FROM ALUMNOS WHERE RUT = $1
          RETURNING *
      `,
    values: [rut],
  };

  const { rows } = await pool.query(query);
  return rows[0];
};

export const Alumnos = { findAll, findOneByRut, create, update, remove };
