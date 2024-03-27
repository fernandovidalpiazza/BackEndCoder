class ProductManager {
    constructor() {
      this.products = [];
      this.nextId = 1;
    }
  
    addProduct(product) {
      const isValid =
        product.title &&
        product.description &&
        product.price &&
        product.thumbnail &&
        product.code &&
        product.stock;
      const isDuplicate = this.products.some((p) => p.code === product.code);
  
      if (isValid) {
          if (isDuplicate) {
              console.log("Ya existe un producto con este código");
          } else {
              product.id = this.nextId++;
              this.products.push(product);
              console.log("Producto agregado correctamente");
          }
      } else {
          console.log("Todos los campos son obligatorios");
      }
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find((p) => p.id === id);
      return product ? product : (console.log("Producto no encontrado"), null);
    }
  }
  
  // Ejemplo de uso
  
  const productManager = new ProductManager();
  
  // Agregar Producto
  
  productManager.addProduct({
    title: "Producto 1",
    description: "Descripción del Producto 1",
    price: 100,
    thumbnail: "ruta/imagen1.jpg",
    code: "P002",
    stock: 10,
  });
  
  productManager.addProduct({
    title: "Producto 2",
    description: "Descripción del Producto 2",
    price: 150,
    thumbnail: "ruta/imagen2.jpg",
    code: "P001",
    stock: 20,
  });
  
  // Obtener todos los productos
  const productos = productManager.getProducts();
  console.log(productos);
  
  // Obtener un producto por ID
  const productoId1 = productManager.getProductById();



