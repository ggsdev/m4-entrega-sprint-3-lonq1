import { database } from "../../database";

export async function createProductService({ name, price, category_id }) {
    const queryResponse = await database.query(
        `
            INSERT INTO
                products(name, price, category_id)
            VALUES
                ($1, $2, $3)
            RETURNING *;
        `,
        [name, price, category_id]
    );

    return queryResponse.rows[0];
}
