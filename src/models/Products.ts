import { DataTypes } from "sequelize";
import { ProductsInstance } from "../interfaces/product.interface"
import db from "../db";

const Product = db.define<ProductsInstance>(
  "Product",
  {
    id: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.UUID,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    url_image: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.FLOAT,
    },
    discount: {
      type: DataTypes.INTEGER,
    },
    category: {
      type: DataTypes.INTEGER,
    },
  },
  {
    modelName: "Product",
    tableName: "product",
    timestamps: false,
    // underscore: true,
  }
);

export default Product;
