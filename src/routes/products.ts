import { Router } from "express";
import { ProductController } from "../controllers/ProductController";
import { Product } from "../entity/Product";

export const productsRouter = Router();
const productCtrl = new ProductController();

productsRouter.post("/", async (req, res) => {
  const { description, price, quantity } = req.body;

  if (!description || !price || !quantity) {
    return res.status(400).json({ message: "Invalid inputs" });
  }

  try {
    const product = new Product();
    product.description = description;
    product.price = price;
    product.quantity = quantity;
    await productCtrl.save(product);
    return res.status(201).json({ message: "Product registered" });
  } catch (err) {
    return res.status(400).json({ message: err });
  }
});

productsRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const product = await productCtrl.findById(Number(id));

    if (!product) {
      throw { message: "Product not found", status: 404 };
    }

    return res.status(200).json({
      product,
    });
  } catch (err) {
    return res.status(err.status).json({ message: err.message });
  }
});

productsRouter.get("/description/:description", async (req, res) => {
  const { description } = req.params;

  try {
    const products = await productCtrl.index({
      description,
    });

    return res.status(200).json({
      products,
    });
  } catch (err) {
    return res.status(400).json({ message: err });
  }
});
