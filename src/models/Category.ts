import { DataTypes } from "sequelize";
import { CategoryInstance } from "../interfaces/category.interface";
import db from "../db";

const Category = db.define<CategoryInstance>(
  "Category",
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
  },
  {
    modelName: "Product",
    tableName: "product",
    timestamps: false,
    // underscore: true,
  }
);

export default Category;
