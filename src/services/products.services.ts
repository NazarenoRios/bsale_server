import Product from "../models/Products";

const get_products = async () => {
  const products = await Product.findAll();
  return products;
};

export { get_products };
