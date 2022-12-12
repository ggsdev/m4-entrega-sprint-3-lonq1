import { database } from "../../database";

export async function deleteProductService(id) {
    await database.query(
        `DELETE FROM
            products
        WHERE
            id = $1
        `,
        [id]
    );
}
