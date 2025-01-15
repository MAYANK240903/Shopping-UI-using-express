// Please don't change the pre-written code
// Import the necessary modules here
import ProductModel from "../models/product.model.js";
export default class ProductController {
  getProducts = (req, res) => {
    // Write your code here
    const producting = new ProductModel;
    let products = producting.fetchProducts();
    console.log(products);
    return res.render("product" , {products:products});
  };
}
