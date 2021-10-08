import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { IBankAccount, BankAccount } from '../bank-account.model';

import { BankAccountService } from './bank-account.service';

describe('BankAccount Service', () => {
  let service: BankAccountService;
  let httpMock: HttpTestingController;
  let elemDefault: IBankAccount;
  let expectedResult: IBankAccount | IBankAccount[] | boolean | null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    expectedResult = null;
    service = TestBed.inject(BankAccountService);
    httpMock = TestBed.inject(HttpTestingController);

    elemDefault = {
      id: 'AAAAAAA',
      name: 'AAAAAAA',
      balance: 0,
    };
  });

  describe('Service methods', () => {
    it('should find an element', () => {
      const returnedFromService = Object.assign({}, elemDefault);

      service.find('ABC').subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'GET' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(elemDefault);
    });

    it('should create a BankAccount', () => {
      const returnedFromService = Object.assign(
        {
          id: 'ID',
        },
        elemDefault
      );

      const expected = Object.assign({}, returnedFromService);

      service.create(new BankAccount()).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'POST' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should update a BankAccount', () => {
      const returnedFromService = Object.assign(
        {
          id: 'BBBBBB',
          name: 'BBBBBB',
          balance: 1,
        },
        elemDefault
      );

      const expected = Object.assign({}, returnedFromService);

      service.update(expected).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'PUT' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should partial update a BankAccount', () => {
      const patchObject = Object.assign(
        {
          name: 'BBBBBB',
        },
        new BankAccount()
      );

      const returnedFromService = Object.assign(patchObject, elemDefault);

      const expected = Object.assign({}, returnedFromService);

      service.partialUpdate(patchObject).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'PATCH' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should return a list of BankAccount', () => {
      const returnedFromService = Object.assign(
        {
          id: 'BBBBBB',
          name: 'BBBBBB',
          balance: 1,
        },
        elemDefault
      );

      const expected = Object.assign({}, returnedFromService);

      service.query().subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'GET' });
      req.flush([returnedFromService]);
      httpMock.verify();
      expect(expectedResult).toContainEqual(expected);
    });

    it('should delete a BankAccount', () => {
      service.delete('ABC').subscribe(resp => (expectedResult = resp.ok));

      const req = httpMock.expectOne({ method: 'DELETE' });
      req.flush({ status: 200 });
      expect(expectedResult);
    });

    describe('addBankAccountToCollectionIfMissing', () => {
      it('should add a BankAccount to an empty array', () => {
        const bankAccount: IBankAccount = { id: 'ABC' };
        expectedResult = service.addBankAccountToCollectionIfMissing([], bankAccount);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(bankAccount);
      });

      it('should not add a BankAccount to an array that contains it', () => {
        const bankAccount: IBankAccount = { id: 'ABC' };
        const bankAccountCollection: IBankAccount[] = [
          {
            ...bankAccount,
          },
          { id: 'CBA' },
        ];
        expectedResult = service.addBankAccountToCollectionIfMissing(bankAccountCollection, bankAccount);
        expect(expectedResult).toHaveLength(2);
      });

      it("should add a BankAccount to an array that doesn't contain it", () => {
        const bankAccount: IBankAccount = { id: 'ABC' };
        const bankAccountCollection: IBankAccount[] = [{ id: 'CBA' }];
        expectedResult = service.addBankAccountToCollectionIfMissing(bankAccountCollection, bankAccount);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(bankAccount);
      });

      it('should add only unique BankAccount to an array', () => {
        const bankAccountArray: IBankAccount[] = [{ id: 'ABC' }, { id: 'CBA' }, { id: '411a4ca3-9ed9-4093-a6bd-b1ff57a81565' }];
        const bankAccountCollection: IBankAccount[] = [{ id: 'ABC' }];
        expectedResult = service.addBankAccountToCollectionIfMissing(bankAccountCollection, ...bankAccountArray);
        expect(expectedResult).toHaveLength(3);
      });

      it('should accept varargs', () => {
        const bankAccount: IBankAccount = { id: 'ABC' };
        const bankAccount2: IBankAccount = { id: 'CBA' };
        expectedResult = service.addBankAccountToCollectionIfMissing([], bankAccount, bankAccount2);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(bankAccount);
        expect(expectedResult).toContain(bankAccount2);
      });

      it('should accept null and undefined values', () => {
        const bankAccount: IBankAccount = { id: 'ABC' };
        expectedResult = service.addBankAccountToCollectionIfMissing([], null, bankAccount, undefined);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(bankAccount);
      });

      it('should return initial array if no BankAccount is added', () => {
        const bankAccountCollection: IBankAccount[] = [{ id: 'ABC' }];
        expectedResult = service.addBankAccountToCollectionIfMissing(bankAccountCollection, undefined, null);
        expect(expectedResult).toEqual(bankAccountCollection);
      });
    });
  });

  afterEach(() => {
    httpMock.verify();
  });
});
