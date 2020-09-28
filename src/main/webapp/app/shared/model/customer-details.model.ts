import { IUser } from 'app/core/user/user.model';
import { IShoppingCart } from 'app/shared/model/shopping-cart.model';

export const enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER'
}

export interface ICustomerDetails {
  id?: number;
  gender?: Gender;
  phone?: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  country?: string;
  user?: IUser;
  carts?: IShoppingCart[];
}

export class CustomerDetails implements ICustomerDetails {
  constructor(
    public id?: number,
    public gender?: Gender,
    public phone?: string,
    public addressLine1?: string,
    public addressLine2?: string,
    public city?: string,
    public country?: string,
    public user?: IUser,
    public carts?: IShoppingCart[]
  ) {}
}
