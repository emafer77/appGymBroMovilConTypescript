import express from "express";
const router = express.Router();
import unEjercicioController from "../controllers/unEjercicioController";

router.route("/").post(unEjercicioController.ingresar);

router
  .route("/:ejercicio_id")
  .get(unEjercicioController.consultar)
  .put(unEjercicioController.actualizar)
  .delete(unEjercicioController.borrar);

export default router;
