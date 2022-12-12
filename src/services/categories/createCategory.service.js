import { database } from "../../database";

export async function createCategoryService({ name }) {
    const queryResponse = await database.query(
        `
            INSERT INTO
                categories(name)
            VALUES
                ($1)
            RETURNING *;
        `,
        [name]
    );

    return queryResponse.rows[0];
}
