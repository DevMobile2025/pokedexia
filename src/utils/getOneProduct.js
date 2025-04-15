import { db } from "@/api/db";

function getOneProduct(productId) {
    const product = db.pokemons.find((product) => product.id == productId);
    return product;
}

export default getOneProduct;