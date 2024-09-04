import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);
  const [cashFloat, setCashFloat] = useState({
    income: 0,
    expense: 0,
  });
  useEffect(() => {
    const amounts = transactions.map((transaction) => transaction.amount);
    const income = amounts
      .filter((item) => item > 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2);
    const expense = amounts
      .filter((item) => item < 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2);
    setCashFloat({ income: income, expense: expense });
  }, [transactions]);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${cashFloat.income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">${cashFloat.expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
