import express from "express";
const router = express.Router();
import ejerciciosEnCasaController from "../controllers/ejerciciosEnCasaController";
router
  .route("/:id_musculo")
  .get(ejerciciosEnCasaController.consultar)
  .post(ejerciciosEnCasaController.ingresar)
  .put(ejerciciosEnCasaController.actualizar)
  .delete(ejerciciosEnCasaController.borrar);

export default router;
