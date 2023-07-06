import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import ordersController from '../../../src/controller/order.controller';

chai.use(sinonChai);

describe('OrdersController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  // describe('getOrders', function () {
  //   it('testando status 200 e dados retornados ', async () => {
  //     const { ordersMock: mockOrders } = ordersMock;
  //     const getAllMockRetur = mockOrders.map(order => OrderModel.build(order as unknown as Order));
  //     sinon.stub(OrderModel, 'findAll').resolves(getAllMockRetur);

  //     const httpResponse = await chai.request(app).get('/orders');

  //     expect(httpResponse).to.have.property('status').that.equals(200);
  //   });
  // });
});
