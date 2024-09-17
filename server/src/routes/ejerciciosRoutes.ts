import express from "express";
const router = express.Router();
import ejerciciosController from "../controllers/ejerciciosController";
router.route("/:id_musculo").get(ejerciciosController.consultar);

export default router;
