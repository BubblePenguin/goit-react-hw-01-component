import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';
import { Transaction } from './Transaction';
export const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.transaction_history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(item => {
          return <Transaction {...item} />;
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(Transaction),
};
