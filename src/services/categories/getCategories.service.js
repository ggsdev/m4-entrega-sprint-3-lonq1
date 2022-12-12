import { database } from "../../database";

export async function getCategoriesService() {
    const { rows } = await database.query(
        `
        SELECT
            *
        FROM
            categories;
        `
    );
    return rows;
}
