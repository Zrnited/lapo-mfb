export type NavLinks = {
  title: string;
  icon: string;
  iconActive?: string;
  to: string;
};

export type RequestCardRequests = {
  branch: string;
  cardType: string;
  quantity: number;
  status: string;
};

export type CardProfileType = {
  cardName: string;
  currency: string;
  expiration: string;
  binPrefix: string;
  dateCreated: string;
};

export type Fee = {
    name: string;
    value: number;
    frequency: string;
    currency: string;
    time: string;
    accountPad: string;
    account: string;
}
