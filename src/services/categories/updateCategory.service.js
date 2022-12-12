import { database } from "../../database";

export async function updateCategoryService(id, payload) {
    let query = "UPDATE categories SET ";
    const keys = Object.keys(payload);
    const values = Object.values(payload);

    keys.forEach((key, index) => {
        query += `${key} = \$${(index += 1)}, `;
    });

    query = query.slice(0, -2);

    query += ` WHERE id = \$${(keys.length += 1)} RETURNING *;`;
    const updateResponse = await database.query(query, [...values, id]);
    return updateResponse.rows[0];
}
