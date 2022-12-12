import { createProductService } from "../services/products/createProduct.service";
import { deleteProductService } from "../services/products/deleteProduct.service";
import { getProductsService } from "../services/products/getProducts.service";
import { getProductsFromSpecificCategoryService } from "../services/products/getProductsFromSpecificCategory.service";
import { retrieveSpecificProductService } from "../services/products/retrieveSpecificProduct.service";
import { updateProductService } from "../services/products/updateProduct.service";

async function getProductsController(request, response) {
    const data = await getProductsService();

    return response.status(200).json(data);
}
async function createProductController(request, response) {
    const data = await createProductService(request.validatedBody);
    return response.status(201).json(data);
}

async function retrieveSpecificProductController(request, response) {
    const data = await retrieveSpecificProductService(request.params.id);
    return response.status(200).json(data);
}

async function updateProductController(request, response) {
    const data = await updateProductService(
        request.params.id,
        request.validatedBody
    );
    return response.status(200).json(data);
}
async function deleteProductController(request, response) {
    await deleteProductService(request.params.id);
    return response.status(204).json();
}

async function getProductsFromSpecificCategoryController(request, response) {
    const data = await getProductsFromSpecificCategoryService(
        request.params.id
    );
    return response.status(200).json(data);
}

export {
    getProductsController,
    createProductController,
    retrieveSpecificProductController,
    updateProductController,
    deleteProductController,
    getProductsFromSpecificCategoryController,
};
