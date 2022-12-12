import { database } from "../../database";

export async function getProductsService() {
    const { rows } = await database.query(
        `
            SELECT
                *
            FROM
                products;
        `
    );
    return rows;
}
