import { database } from "../../database";
import { AppError } from "../../errors";

export async function updateCategoryService(id, payload) {
    const checkingIfNameExists = await database.query(
        `
        SELECT  
            *
        FROM
            categories c
        WHERE   
            c.name = $1
    
    `,
        [payload.name]
    );

    if (checkingIfNameExists.rowCount > 0) {
        throw new AppError(400, "This category name already exists.");
    }

    const updateResponse = await database.query(
        `
        UPDATE
            categories
        SET
            name = $1
        WHERE
            id = $2
        RETURNING *;
    `,
        [payload.name, id]
    );

    return updateResponse.rows[0];
}
