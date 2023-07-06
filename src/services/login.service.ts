import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import { ServiceResponseError, ServiceResponseSuccess } from '../types/ServiceResponse';
import jwtUtils from '../utils/jwt';

function checkLogin(username: string, password: string):
Promise<ServiceResponseError | ServiceResponseSuccess<object>> {
  return new Promise((resolve) => {
    if (!username || !password) {
      resolve({ 
        status: 'INVALID_DATA', data: { message: '"username" and "password" are required' } });
      return;
    } UserModel.findOne({ where: { username } })
      .then((getUser) => {
        if (!getUser || !bcrypt.compareSync(password, getUser.dataValues.password)) {
          resolve({ status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } });
          return;
        }
        const jwtToken = jwtUtils.sign({ id: getUser.dataValues.id,
          username: getUser.dataValues.username,
        });
        resolve({ status: 'SUCCESSFUL', data: { token: jwtToken } });
      });
  });
}

export default { checkLogin };