import { Request, Response } from "express";
import { getUnEjercicioByID } from "../database";
import { postUnEjercicioByID } from "../database";
import { putUnEjercicioByID } from "../database";
import { deleteUnEjercicioByID } from "../database";

class UnEjercicioController {
  constructor() {}

  async consultar(req: Request, res: Response) {
    try {
      const ejercicio_id = Number(req.params.ejercicio_id);
      if (isNaN(ejercicio_id)) {
        return res.status(400).json({ error: "ID de músculo inválido" });
      }

      const ejercicio = await getUnEjercicioByID(ejercicio_id);
      res.json(ejercicio);
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
      const { nombre, descripcion, id_musculo, video_urls } = req.body;

      if (isNaN(Number(id_musculo))) {
        return res
          .status(400)
          .json({ error: "ID de ejercicio o músculo inválido" });
      }

      const result = await postUnEjercicioByID(
        nombre,
        descripcion,
        Number(id_musculo),
        video_urls
      );
      res.json(result);
    } catch (err) {
      if (err instanceof Error) {
        console.error("Error al insertar el ejercicio:", err);
        res
          .status(500)
          .json({ error: "Hubo un error al procesar la solicitud" });
      }
    }
  }

  async actualizar(req: Request, res: Response) {
    try {
      const ejercicio_id = Number(req.params.ejercicio_id);
      const { nombre, descripcion, id_musculo, video_urls } = req.body;

      if (isNaN(ejercicio_id) || isNaN(Number(id_musculo))) {
        return res
          .status(400)
          .json({ error: "ID de ejercicio o músculo inválido" });
      }

      const result = await putUnEjercicioByID(
        ejercicio_id,
        nombre,
        descripcion,
        Number(id_musculo),
        video_urls
      );
      res.json(result);
    } catch (err) {
      if (err instanceof Error) {
        console.error("Error al actualizar el ejercicio:", err);
        res
          .status(500)
          .json({ error: "Hubo un error al procesar la solicitud" });
      }
    }
  }

  async borrar(req: Request, res: Response) {
    try {
      const ejercicio_id = Number(req.params.ejercicio_id);

      console.log("ID recibido para eliminar:", ejercicio_id);

      if (isNaN(ejercicio_id)) {
        console.error("ID de ejercicio inválido:", ejercicio_id);
        return res.status(400).json({ error: "ID de ejercicio inválido" });
      }

      const result = await deleteUnEjercicioByID(ejercicio_id);
      res.json(result);
    } catch (err) {
      if (err instanceof Error) {
        console.error("Error al eliminar el ejercicio:", err);
        res
          .status(500)
          .json({ error: "Hubo un error al procesar la solicitud" });
      }
    }
  }
}

export default new UnEjercicioController();
