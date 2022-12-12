import { database } from "../../database";

export async function retrieveSpecificCategoryService(id) {
    const queryResponse = await database.query(
        `
        SELECT 
            * 
        FROM 
            categories
        WHERE
            id = $1
        `,
        [id]
    );

    return queryResponse.rows[0];
}
