import * as yup from "yup";

const createCategoryShape = yup.object().shape({
    name: yup.string().max(200).required(),
});

const returnedData = yup.object().shape({
    name: yup.string().max(200),
    id: yup.number(),
});

const listCategoriesData = yup.array(returnedData);

export { createCategoryShape, returnedData, listCategoriesData };
