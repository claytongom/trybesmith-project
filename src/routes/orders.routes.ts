import { Router } from 'express';
import ordersController from '../controller/order.controller';

const orderRouter = Router();
orderRouter.get('/', ordersController.getOrders);

export default orderRouter;
