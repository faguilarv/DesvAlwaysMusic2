import { Alumnos } from "../models/alumno.model.js";

export const getAllAlumno = async (req, res) => {
  try {
    const alumnos = await Alumnos.findAll();
    return res.json(alumnos);
  } catch (error) {
    return res.status(500).json({ ok: false });
  }

  // res.send("Hello World!");
};

export const getAlumno = async (req, res) => {
  try {
    const { rut } = req.params;
    const alumnos = await Alumnos.findOneByRut(rut);
    return res.json(alumnos);
  } catch (error) {
    return res.status(500).json({ ok: false });
  }
};

export const createAlumno = async (req, res) => {
  try {
    const { nombre, rut, curso, nivel } = req.body;
    const newAlumno = await Alumnos.create({
      nombre,
      rut,
      curso,
      nivel,
    });
    return res.json(newAlumno);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false });
  }
};

export const updateAlumno = async (req, res) => {
  try {
    const { rut } = req.params;
    const { curso, nivel } = req.body;
    const newAlumno = {
      rut,
      curso,
      nivel,
    };
    const alumno = await Alumnos.update(newAlumno);
    return res.json(alumno);
  } catch (error) {
    return res.status(500).json({ ok: false });
  }
};

export const removeAlumno = async (req, res) => {
  try {
    const { rut } = req.params;
    const alumno = await Alumnos.remove(rut);
    return res.json(alumno);
  } catch (error) {
    return res.status(500).json({ ok: false });
  }
};
