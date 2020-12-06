import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    const incomeArray = this.transactions.filter(transaction => {
      return transaction.type === 'income';
    });

    const outcomeArray = this.transactions.filter(transaction => {
      return transaction.type === 'outcome';
    });

    const income = incomeArray.reduce((sum, current) => sum + current.value, 0);

    const outcome = outcomeArray.reduce(
      (sum, current) => sum + current.value,
      0,
    );

    const total = income - outcome;

    return {
      income,
      outcome,
      total,
    };
  }

  public create({ title, value, type }: CreateTransactionDTO): Transaction {
    const transaction = new Transaction({ title, value, type });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
