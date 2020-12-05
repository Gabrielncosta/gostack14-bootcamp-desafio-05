import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

class ListTransactionsService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute(): Transaction[] {
    const transactionList = this.transactionsRepository.all();

    return transactionList;
  }
}

export default ListTransactionsService;
