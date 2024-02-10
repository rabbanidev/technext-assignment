type IAddress = {
  address: string;
  city: string;
  state: string;
};

type ICompany = {
  name: string;
};

export type IUser = {
  id: number | string;
  username: string;
  firstName: string;
  lastName: string;
  maidenName: string;
  fullName: string;
  email: string;
  image: string;
  address: IAddress;
  company: ICompany;
};
