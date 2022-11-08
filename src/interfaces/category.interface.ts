import { Model } from "sequelize";

interface CategoryAttributes {
  id: string;
  name: string;
}

export interface CategoryInstance
  extends Model<CategoryAttributes>,
    CategoryAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}