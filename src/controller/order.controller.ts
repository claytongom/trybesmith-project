import { Request, Response } from 'express';
import ordersService from '../services/order.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

function getOrders(req: Request, res: Response): Promise<Response> {
  return ordersService.getOrders()
    .then(({ status, data }) => res.status(mapStatusHTTP(status)).json(data))
    .catch((error) => res.status(500).json({ error: error.message }));
}

export default {
  getOrders,
};