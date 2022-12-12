import { Router } from "express";
import {
    createCategoryController,
    deleteCategoryController,
    getCategoriesController,
    retrieveSpecificCategoryController,
    updateCategoryController,
} from "../controllers/categories.controllers";
import { checkIfExistsMiddleware } from "../middlewares/checkIfExists.middleware";

import { ensureCategoryExistsMiddleware } from "../middlewares/ensureCategoryExists.middleware";
import { validSchemaMiddleware } from "../middlewares/validSchema.middleware";
import { createCategoryShape, returnedData } from "../schemas/category.schemas";
import { updateProductShape } from "../schemas/products.schemas";

export const categoriesRoutes = Router();
const route = "categories";
categoriesRoutes.get("", getCategoriesController);
categoriesRoutes.post(
    "",
    validSchemaMiddleware(createCategoryShape),
    ensureCategoryExistsMiddleware,
    createCategoryController
);
categoriesRoutes.get(
    "/:id",
    checkIfExistsMiddleware(route),
    validSchemaMiddleware(returnedData),
    retrieveSpecificCategoryController
);
categoriesRoutes.patch(
    "/:id",
    checkIfExistsMiddleware(route),
    validSchemaMiddleware(updateProductShape),
    updateCategoryController
);
categoriesRoutes.delete(
    "/:id",
    checkIfExistsMiddleware(route),
    deleteCategoryController
);
