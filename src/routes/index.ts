import { Router } from "express"
const router = Router();

import products from "./products"
import categories from "./category"

router.use("/products", products)
router.use("/categories", categories)

export default router;

