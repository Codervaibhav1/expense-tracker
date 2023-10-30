import React from "react";
import { useContext } from "react";
import ExpenceContext from "../context/expenseContext";

const IncomeExpence = ({}) => {
 const {transections} = useContext(ExpenceContext);

 const income = transections
    .filter((transaction) => transaction.amount > 0)
    .reduce((p, c) => p + c.amount, 0);

  const expense = transections
    .filter((transaction) => transaction.amount < 0)
    .reduce((p, c) => p + parseInt(c.amount), 0);
    console.log(expense)

  return (
    <>
      <div className="d-flex">
        <div className="card border-success w-50 my-3 rounded-0 p-4">
          <h5 className="card-title text-center">
            Income
            <br />
            <h5 className="text-success mt-2"> ₹{+income}</h5>
          </h5>
        </div>
        <div className="card border-danger w-50 my-3 ms-3 rounded-0 p-4">
          <h5 className="card-title text-center">
            Expense
            <br />
            <h5 className="text-danger mt-2">₹ {+expense}</h5>
          </h5>
        </div>
      </div>
    </>
  );
};

export default IncomeExpence;
