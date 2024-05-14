import "dotenv/config";
import express from "express";
import alumnosRoutes from "./routes/alumno.route.js";

const app = express();

//para habilitar req.body crear este middleware
app.use(express.json());
//si mandan formularios nativos de html usar urlencoded
app.use(express.urlencoded({ extended: true }));

//ruta /alumno
app.use("/alumno", alumnosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Conectado exitosamente  al PORT ${PORT}`);
});
