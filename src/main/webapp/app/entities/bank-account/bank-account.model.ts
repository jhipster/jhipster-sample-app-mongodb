export interface IBankAccount {
  id?: string;
  name?: string;
  balance?: number;
}

export class BankAccount implements IBankAccount {
  constructor(public id?: string, public name?: string, public balance?: number) {}
}

export function getBankAccountIdentifier(bankAccount: IBankAccount): string | undefined {
  return bankAccount.id;
}
