import { Model } from "sequelize";

interface ProductsAttributes {
  id: string;
  name: string;
  url_image: string;
  price: number;
  discount: number;
  category: number;
}

export interface ProductsInstance
  extends Model<ProductsAttributes>,
    ProductsAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}