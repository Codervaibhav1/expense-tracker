import { useContext, useState } from "react";
import IncomeExpence from "./IncomeExpence";
import ExpenceContext from "../context/expenseContext";

const CardOne = () => {
  const {transections ,saveList} = useContext(ExpenceContext)
  const balance = transections.reduce((p, c) => {
    return (p + parseInt(c.amount));
  }, 0);
  // console.log(balance)
  const [text , setText] = useState("")
  const [amount , setAmount] = useState("")

  const handleSubmit = (e)=>{
    e.preventDefault();
    saveList(text , amount)
    setAmount("")
    setText("")
  }

  return (
    <>
      <div className="w-100 mt-4">
      <div className='d-flex justify-content-center'>
    <div className='card p-5 bg-none w-100 border border-success text-center'>
   <h1 className="text-success">Income: ₹{balance}</h1>
    </div>
    </div>
        <form className="mt-3" onSubmit={handleSubmit}>
          <h1 className="text-center fs-2 text-light" >New Transection</h1>
          <div className="mb-3">
            <input
              type="text"
              className="form-control rounded-0"
              placeholder="Enter expense"
              onChange={(e)=>setText(e.target.value)}
              value={text}
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              className="form-control rounded-0"
              placeholder="Enter amount"
              onChange={(e)=>setAmount(e.target.value)}
              value={amount}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Submit
          </button>
        </form>
        <IncomeExpence/>
      </div>
    </>
  );
};

export default CardOne;
