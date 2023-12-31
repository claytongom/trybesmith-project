import { Router } from 'express';
import productsController from '../controller/products.controller';

const productRouter = Router();
productRouter.post('/', productsController.createProduct);
productRouter.get('/', productsController.getAll);

export default productRouter;