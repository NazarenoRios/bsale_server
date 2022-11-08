import Products from "./Products";
import Category from "./Category";

Products.belongsTo(Category);
Category.hasMany(Products);

export default { Products, Category };