import { database } from "../database";

export async function ensureCategoryExistsMiddleware(request, response, next) {
    const queryResponse = await database.query(
        `
            SELECT
                *
            FROM
                categories
            WHERE
                name = $1;
        
        `,
        [request.body.name]
    );

    const categoryCount = queryResponse.rowCount;

    if (categoryCount > 0) {
        return response.status(400).json({
            message: "Category already exists",
        });
    }

    return next();
}
