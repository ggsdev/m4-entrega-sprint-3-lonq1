import * as yup from "yup";
import { v4 as uuidv4 } from "uuid";

const createProductShape = yup.object().shape({
    name: yup.string().max(200).required(),
    price: yup.number().required(),
    category_id: yup.number(),
});

const updateProductShape = yup.object().shape({
    name: yup.string().max(200),
    price: yup.number(),
    category_id: yup.number(),
});

const returnedData = yup.object().shape({
    name: yup.string().max(200),
    price: yup.number(),
    id: yup
        .string()
        .uuid()
        .default(() => uuidv4())
        .transform(() => uuidv4()),
    category_id: yup.number(),
});

const listProductsData = yup.array(returnedData);

export {
    createProductShape,
    returnedData,
    listProductsData,
    updateProductShape,
};
