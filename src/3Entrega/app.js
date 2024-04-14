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
        // ingreso el id en la url
        const productId = req.params.id;

        // obtengo el producto de la funcion get
        const product = manager.getProductById(productId);

        // si 
        if (product) {
            // Si se encontró lo encuentro
            res.status(200).json({ status: 1, payload: product });
        } else {
            // Si no no lo encuentro

            res.status(404).json({ status: 0, error: "Producto no encontrado" });
        }
    } catch (error) {
        // Si pasa algo error
        res.status(500).json({ status: 0, error: "Error al obtener el producto" });
    }
});




app.listen(PORT, () => {
    console.log("Estoy escuchando en el puerto", PORT);
});
