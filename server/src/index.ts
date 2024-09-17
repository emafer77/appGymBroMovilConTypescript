import express from "express";
import cors from "cors";

import musculosRoutes from "./routes/musculoRoutes";
import ejerciciosRoutes from "./routes/ejerciciosRoutes";
import ejerciciosEnCasaRoutes from "./routes/ejerciciosEnCasaRoutes";
import unEjercicioRoutes from "./routes/unEjercicioRoutes";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/musculos", musculosRoutes);
app.use("/ejercicios", ejerciciosRoutes);
app.use("/ejercicios_en_casa", ejerciciosEnCasaRoutes);
app.use("/unEjercicio", unEjercicioRoutes);

app.listen(8080, () => {
  console.log("Server activo");
});
