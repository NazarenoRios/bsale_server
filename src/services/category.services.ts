import Category from "../models/Category";

const get_categories = async () => {
  const categories = await Category.findAll();
  return categories;
};

export { get_categories };
