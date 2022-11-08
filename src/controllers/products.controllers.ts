import { Request, Response } from "express";
import { get_products } from "../services/products.services";
import { handleHttp } from "../utils/error.handle";

const getProducts = async (req: Request, res: Response) => {
  try {
    const response = await get_products();
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR GET PRODUCTS");
  }
};

export { getProducts };
