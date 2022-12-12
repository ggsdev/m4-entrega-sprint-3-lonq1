import { database } from "../../database";

export async function retrieveSpecificProductService(id) {
    const queryResponse = await database.query(
        `
        SELECT 
            * 
        FROM 
            products
        WHERE
            id = $1;
            
        `,
        [id]
    );

    return queryResponse.rows[0];
}
