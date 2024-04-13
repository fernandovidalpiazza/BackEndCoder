import Express from "express";
import ProductManager from "../2Entrega/product_manager.js";

const app = Express();
const manager = new ProductManager("./src/2entrega/productos.txt");
const PORT = 3000;

app.get("/products", async (req, res) => {
    
    const limit = +req.query.limit || 0;

   
    const productList = manager.getProducts(limit);

    
    res.send({ status: 1, payload: productList });
});




app.get("/products/:id", async (req, res) => {
    try {
        // pongo el id en el navegador
        const productId = req.params.id;

        // Obtengo el producto del manger
        const product = await manager.getProductById(productId);

        // si encuentra el producto ?
        if (product) {
            // encuentra 
            res.status.json({ status: 1, payload: product });
        } else {
            // no encuentra 
            res.status.json({ status: 0, error: "Producto no encontrado" });
        }
    } catch (error) {
        // paso algo que un error 
        res.status.json({ status: 0, error: "Error al obtener el producto" });
    }
});

app.listen(PORT, () => {
    console.log("Estoy escuchando en el puerto", PORT);
});
