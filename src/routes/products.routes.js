import { Router } from "express";
import {
    createProductController,
    deleteProductController,
    getProductsController,
    getProductsFromSpecificCategoryController,
    retrieveSpecificProductController,
    updateProductController,
} from "../controllers/products.controllers";
import { checkIfExistsMiddleware } from "../middlewares/checkIfExists.middleware";
import { validSchemaMiddleware } from "../middlewares/validSchema.middleware";
import {
    createProductShape,
    returnedData,
    updateProductShape,
} from "../schemas/products.schemas";

export const productsRoutes = Router();
const route = "products";
productsRoutes.get("", getProductsController);
productsRoutes.post(
    "",
    validSchemaMiddleware(createProductShape),
    createProductController
);

productsRoutes.get(
    "/:id",
    checkIfExistsMiddleware(route),
    validSchemaMiddleware(returnedData),
    retrieveSpecificProductController
);

productsRoutes.patch(
    "/:id",
    checkIfExistsMiddleware(route),
    validSchemaMiddleware(updateProductShape),
    updateProductController
);
productsRoutes.delete(
    "/:id",
    checkIfExistsMiddleware(route),
    deleteProductController
);

productsRoutes.get("/category/:id", getProductsFromSpecificCategoryController);
