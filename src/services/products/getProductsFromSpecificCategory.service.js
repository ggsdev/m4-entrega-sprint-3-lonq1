import { database } from "../../database";
import { AppError } from "../../errors";

export async function getProductsFromSpecificCategoryService(id) {
    const queryResponse = await database.query(
        `
        SELECT 
            p.name, p.price, c.name category
        FROM 
            products p
        JOIN
            categories c ON c.id = p.category_id
        WHERE
            p.category_id = $1;      
        `,
        [id]
    );

    if (queryResponse.rowCount < 1) {
        throw new AppError(404, "No products in this category.");
    }

    return queryResponse.rows;
}
