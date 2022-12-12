import { createCategoryService, getCategoriesService } from "../services";
import { deleteCategoryService } from "../services/categories/deleteCategory.service";
import { retrieveSpecificCategoryService } from "../services/categories/retrieveSpecificCategory.service";
import { updateCategoryService } from "../services/categories/updateCategory.service";

async function getCategoriesController(request, response) {
    const data = await getCategoriesService();
    return response.status(200).json(data);
}

async function createCategoryController(request, response) {
    const data = await createCategoryService(request.validatedBody);
    return response.status(201).json(data);
}

async function retrieveSpecificCategoryController(request, response) {
    const data = await retrieveSpecificCategoryService(request.params.id);
    return response.status(200).json(data);
}

async function updateCategoryController(request, response) {
    const data = await updateCategoryService(
        request.params.id,
        request.validatedBody
    );
    return response.status(200).json(data);
}
async function deleteCategoryController(request, response) {
    await deleteCategoryService(request.params.id);
    return response.status(204).json();
}

export {
    getCategoriesController,
    createCategoryController,
    retrieveSpecificCategoryController,
    updateCategoryController,
    deleteCategoryController,
};
