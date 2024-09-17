import { Request, Response } from "express";
import { getEjerciciosEnCasaByID } from "../database";

class EjerciciosEnCasaController {
  constructor() {}

  async consultar(req: Request, res: Response) {
    try {
      const id_musculo = Number(req.params.id_musculo);
      if (isNaN(id_musculo)) {
        return res.status(400).json({ error: "ID de músculo inválido" });
      }

      const ejercicios = await getEjerciciosEnCasaByID(id_musculo);
      res.json(ejercicios);
    } catch (err) {
      if (err instanceof Error) {
        console.error("Error al obtener el músculo:", err);
        res
          .status(500)
          .json({ error: "Hubo un error al procesar la solicitud" });
      }
    }
  }

  async ingresar(req: Request, res: Response) {
    try {
      const id_musculo = Number(req.params.id_musculo);
      if (isNaN(id_musculo)) {
        return res.status(400).json({ error: "ID de músculo inválido" });
      }

      const ejercicios = await getEjerciciosEnCasaByID(id_musculo);
      res.json(ejercicios);
    } catch (err) {
      if (err instanceof Error) {
        console.error("Error al obtener el músculo:", err);
        res
          .status(500)
          .json({ error: "Hubo un error al procesar la solicitud" });
      }
    }
  }

  async actualizar(req: Request, res: Response) {
    try {
      const id_musculo = Number(req.params.id_musculo);
      if (isNaN(id_musculo)) {
        return res.status(400).json({ error: "ID de músculo inválido" });
      }

      const ejercicios = await getEjerciciosEnCasaByID(id_musculo);
      res.json(ejercicios);
    } catch (err) {
      if (err instanceof Error) {
        console.error("Error al obtener el músculo:", err);
        res
          .status(500)
          .json({ error: "Hubo un error al procesar la solicitud" });
      }
    }
  }

  async borrar(req: Request, res: Response) {
    try {
      const id_musculo = Number(req.params.id_musculo);
      if (isNaN(id_musculo)) {
        return res.status(400).json({ error: "ID de músculo inválido" });
      }

      const ejercicios = await getEjerciciosEnCasaByID(id_musculo);
      res.json(ejercicios);
    } catch (err) {
      if (err instanceof Error) {
        console.error("Error al obtener el músculo:", err);
        res
          .status(500)
          .json({ error: "Hubo un error al procesar la solicitud" });
      }
    }
  }
}

export default new EjerciciosEnCasaController();
