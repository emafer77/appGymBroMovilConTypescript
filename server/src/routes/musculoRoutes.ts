import express from "express";
const router = express.Router();
import musculoController from "../controllers/musculoController";
router.route("/:id_musculo").get(musculoController.consultar);

export default router;
