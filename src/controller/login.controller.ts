import { Request, Response } from 'express';
import loginService from '../services/login.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

function checkLogin(req: Request, res: Response): Promise<Response> {
  const { username, password } = req.body;
  return loginService.checkLogin(username, password)
    .then(({ status, data }) => res.status(mapStatusHTTP(status)).json(data))
    .catch((error) => res.status(500).json({ error: error.message }));
}

export default {
  checkLogin,
};