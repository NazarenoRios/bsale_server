import { Request, Response } from "express";
import { get_categories } from "../services/category.services";
import { handleHttp } from "../utils/error.handle";

const getCategories = async (req: Request, res: Response) => {
  try {
    const response = await get_categories();
    res.send(response);
  } catch (e) {
    handleHttp(res, 'ERROR GET CATEGORIES')
  }
};

export { getCategories };
