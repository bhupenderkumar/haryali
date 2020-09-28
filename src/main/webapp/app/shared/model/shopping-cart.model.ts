import { Moment } from 'moment';
import { IProductOrder } from 'app/shared/model/product-order.model';
import { ICustomerDetails } from 'app/shared/model/customer-details.model';

export const enum OrderStatus {
  COMPLETED = 'COMPLETED',
  PAID = 'PAID',
  PENDING = 'PENDING',
  CANCELLED = 'CANCELLED'
}

export const enum PaymentMethod {
  CREDIT_CARD = 'CREDIT_CARD',
  IDEAL = 'IDEAL'
}

export interface IShoppingCart {
  id?: number;
  placedDate?: Moment;
  status?: OrderStatus;
  totalPrice?: number;
  paymentMethod?: PaymentMethod;
  orders?: IProductOrder[];
  customerDetails?: ICustomerDetails;
}

export class ShoppingCart implements IShoppingCart {
  constructor(
    public id?: number,
    public placedDate?: Moment,
    public status?: OrderStatus,
    public totalPrice?: number,
    public paymentMethod?: PaymentMethod,
    public orders?: IProductOrder[],
    public customerDetails?: ICustomerDetails
  ) {}
}
