export type NavLinks = {
  title: string;
  icon: string;
  iconActive?: string;
  to: string;
  innerRoute?: string;
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
    value: number | string;
    frequency: string;
    currency: string;
    time: string;
    accountPad: string;
    account: string;
}

export type CardRequest = {
  id: number,
  branch: string;
  initiatotr: string;
  quantity: number;
  batch: string;
  dateRequested: string;
  status: string;
}

export type ProgressStages = {
  download: boolean;
  markProgress: boolean;
  markReady: boolean;
  sendDispatch: boolean;
  acknowledged: boolean;
  markCompleted: boolean;
}
