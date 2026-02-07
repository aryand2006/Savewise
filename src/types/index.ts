export interface Subscription {
  id: string;
  name: string;
  plan?: string;
  amount: number;
  currency: string;
  nextPaymentDate: string;
  category?: string;
  logo?: string; // URL or placeholder
}

export interface Budget {
  total: number;
  currency: string;
}
