import { database } from "../database";
import { AppError } from "../errors";

export const checkIfExistsMiddleware =
    (type) => async (request, response, next) => {
        const queryResponse = await database.query(
            `
        SELECT 
            * 
        FROM 
            ${type}
        WHERE
            id = $1
        `,
            [request.params.id]
        );

        const message =
            type === "categories"
                ? { message: "Category doesn't exist." }
                : { message: "Product doesn't exist." };

        if (!queryResponse.rowCount) {
            return response.status(404).json(message);
        }

        return next();
    };
