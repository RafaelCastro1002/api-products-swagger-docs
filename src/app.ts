import cors from "cors";
import express from "express";
import logger from "morgan";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

import { swaggerOptions } from "./config/swagger";
import "./data-source";
import { productsRouter } from "./routes/products";

export const app = express();

app.use(cors());
app.use(express.json());
app.use(logger("dev"));

app.use("/products", productsRouter);

const specs = swaggerJSDoc(swaggerOptions);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));
app.get("/", (_, res) => res.send("Products API"));
