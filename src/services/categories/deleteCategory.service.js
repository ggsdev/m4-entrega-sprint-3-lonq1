import { database } from "../../database";

export async function deleteCategoryService(id) {
    await database.query(
        `DELETE FROM
            categories
        WHERE
            id = $1
        `,
        [id]
    );
}
