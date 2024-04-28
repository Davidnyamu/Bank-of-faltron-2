import React from "react";
import Transaction from "./Transaction";

function TransactionsList({ transactions, handleDelTransaction }) {
  // Deleting a transaction
  const delTransaction = async function (transactionID) {
    try {
      await fetch(`http://localhost:3002/transactions/${transactionID}`, { method: 'DELETE' });
      handleDelTransaction(transactionID);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <table className="ui celled striped padded table">
      <thead>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Actions</h3>
          </th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
            <td>
              <button onClick={() => delTransaction(transaction.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionsList;
