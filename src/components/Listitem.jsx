import { useContext } from 'react';
import {FaTrash} from 'react-icons/fa'
import ExpenceContext from '../context/expenseContext';

const Listitem = ({income}) => {
  const {deleteList} = useContext(ExpenceContext)
  return (
    <>
      <li id='list' className="list-group-item d-flex justify-content-between my-2 rounded-0">
      <h5 className="list-title">{income.text}</h5>
        <div className={income.amount > 0? "text-success": "text-danger"}>
        ₹ {income.amount}
        </div>
        <button
          className="btn btn-danger float-end"
        onClick={()=>deleteList(income.id)}>
          <FaTrash/>
        </button>
        </li>
    </>
  );
};

export default Listitem;
