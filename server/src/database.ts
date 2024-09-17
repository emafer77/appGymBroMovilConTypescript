import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

export async function getMusculoByID(id_musculo: number) {
  try {
    console.log("Buscando el músculo número: " + id_musculo);

    // Consulta SQL para obtener el músculo con el ID proporcionado
    const query = `SELECT * FROM musculos WHERE id_musculo = ?`;

    // Ejecutar la consulta con el ID proporcionado como parámetro
    const [rows] = await pool.query(query, [id_musculo]);

    // Devolver el primer resultado (suponiendo que solo esperas un resultado)
    return rows;
  } catch (error) {
    // Manejo de errores
    console.error("Error al obtener el músculo:", error);
    throw error; // Lanzar el error para que pueda ser manejado externamente
  }
}

export async function getEjerciciosByID(id_musculo: number) {
  try {
    console.log("Buscando los ejercicios: " + id_musculo);

    // Consulta SQL para obtener el ejercicio con el ID proporcionado
    const query = `SELECT * FROM ejercicios WHERE id_musculo = ?`;

    // Ejecutar la consulta con el ID proporcionado como parámetro
    const [rows] = await pool.query(query, [id_musculo]);

    // Devolver el primer resultado (suponiendo que solo esperas un resultado)
    return rows;
  } catch (error) {
    // Manejo de errores
    console.error("Error al obtener el ejercicio:", error);
    throw error; // Lanzar el error para que pueda ser manejado externamente
  }
}

export async function getUnEjercicioByID(ejercicio_id: number) {
  try {
    console.log("Buscando los ejercicio: " + ejercicio_id);

    // Consulta SQL para obtener el ejercicio con el ID proporcionado
    const query = `SELECT * FROM ejercicios WHERE ejercicio_id = ?`;

    // Ejecutar la consulta con el ID proporcionado como parámetro
    const [rows] = await pool.query(query, [ejercicio_id]);

    // Devolver el primer resultado (suponiendo que solo esperas un resultado)
    return rows;
  } catch (error) {
    // Manejo de errores
    console.error("Error al obtener el ejercicio:", error);
    throw error; // Lanzar el error para que pueda ser manejado externamente
  }
}

export async function postUnEjercicioByID(
  nombre: string,
  descripcion: string,
  id_musculo: number,
  video_urls: object
) {
  try {
    console.log("Insertando nuevo ejercicio");

    // Convertir el objeto video_urls a una cadena JSON
    const video_urls_json = JSON.stringify(video_urls);

    // Consulta SQL para insertar un nuevo ejercicio
    const query = `INSERT INTO ejercicios ( nombre, descripcion, id_musculo, video_urls) VALUES ( ?, ?, ?, ?)`;

    // Ejecutar la consulta con los valores proporcionados como parámetros
    const [result] = await pool.query(query, [
      nombre,
      descripcion,
      id_musculo,
      video_urls_json,
    ]);

    // Devolver el resultado de la inserción
    return result;
  } catch (error) {
    // Manejo de errores
    console.error("Error al insertar el ejercicio:", error);
    throw error; // Lanzar el error para que pueda ser manejado externamente
  }
}

export async function putUnEjercicioByID(
  ejercicio_id: number,
  nombre: string,
  descripcion: string,
  id_musculo: number,
  video_urls: object
) {
  try {
    console.log("Actualizando el ejercicio con ID:", ejercicio_id);

    // Convertir el objeto video_urls a una cadena JSON
    const video_urls_json = JSON.stringify(video_urls);

    // Consulta SQL para actualizar un ejercicio existente
    const query = `
      UPDATE ejercicios 
      SET nombre = ?, descripcion = ?, id_musculo = ?, video_urls = ?
      WHERE ejercicio_id = ?
    `;

    // Ejecutar la consulta con los valores proporcionados como parámetros
    const [result] = await pool.query(query, [
      nombre,
      descripcion,
      id_musculo,
      video_urls_json,
      ejercicio_id,
    ]);

    // Devolver el resultado de la actualización
    return result;
  } catch (error) {
    // Manejo de errores
    console.error("Error al actualizar el ejercicio:", error);
    throw error; // Lanzar el error para que pueda ser manejado externamente
  }
}

export async function deleteUnEjercicioByID(ejercicio_id: number) {
  try {
    console.log("Eliminando el ejercicio con ID:", ejercicio_id);

    // Consulta SQL para eliminar un ejercicio existente
    const query = `DELETE FROM ejercicios WHERE ejercicio_id = ?`;

    // Ejecutar la consulta con el ID del ejercicio como parámetro
    const [result] = await pool.query(query, [ejercicio_id]);

    // Devolver el resultado de la eliminación
    return result;
  } catch (error) {
    // Manejo de errores
    console.error("Error al eliminar el ejercicio:", error);
    throw error; // Lanzar el error para que pueda ser manejado externamente
  }
}

export async function getEjerciciosEnCasaByID(id_musculo: Number) {
  try {
    console.log("Buscando los ejercicios en casa: " + id_musculo);

    // Consulta SQL para obtener el ejercicio con el ID proporcionado
    const query = `SELECT * FROM ejercicios_en_casa WHERE zona_ejercicio = ?`;

    // Ejecutar la consulta con el ID proporcionado como parámetro
    const [rows] = await pool.query(query, [id_musculo]);

    // Devolver el primer resultado (suponiendo que solo esperas un resultado)
    return rows;
  } catch (error) {
    // Manejo de errores
    console.error("Error al obtener el ejercicio:", error);
    throw error; // Lanzar el error para que pueda ser manejado externamente
  }
}
