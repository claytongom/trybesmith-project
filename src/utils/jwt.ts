import jwt from 'jsonwebtoken';
import { TokenPayload } from '../types/JwtToken';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

const jwtOp: jwt.SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

function sign(payload: TokenPayload): string {
  return jwt.sign(payload, JWT_SECRET, jwtOp);
}

export default {
  sign, 
};
