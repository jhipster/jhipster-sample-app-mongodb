export interface IBankAccount {
  id: string;
  name?: string | null;
  balance?: number | null;
}

export type NewBankAccount = Omit<IBankAccount, 'id'> & { id: null };
