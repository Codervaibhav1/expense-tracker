import React from "react";
import Listitem from "./Listitem";
import { useContext } from "react";
import ExpenceContext from "../context/expenseContext";

const Listgroup = ({}) => {
  const { transections } = useContext(ExpenceContext);
  return (
    <div className=" w-100 mt-4 ms-4 shadow-lg h-100">
      <ul className="list-group">
        {transections.map((income) => (
          <Listitem key={income.id} income={income} />
        ))}
      </ul>
    </div>
  );
};

export default Listgroup;
