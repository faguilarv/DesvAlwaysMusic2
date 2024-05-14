import { Router } from "express";
import {
  createAlumno,
  getAllAlumno,
  getAlumno,
  removeAlumno,
  updateAlumno,
} from "../controllers/alumno.controller.js";

const router = Router();

//consultar todos los alumnos.
router.get("/", getAllAlumno);

//consultar un alumno por su rut
router.get("/:rut", getAlumno);

//crear alumno
router.post("/", createAlumno);

//ACTUALIZAMOS EL ESTUDIANTE
router.put("/:rut", updateAlumno);

router.delete("/:rut", removeAlumno);

export default router;
