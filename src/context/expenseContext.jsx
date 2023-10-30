import { createContext, useState } from "react";

const ExpenceContext = createContext();

export const ExpenceProvider = ({ children }) => {
  const [transections, setTransection] = useState([
    // { id: 1, text: "salary", amount: 40000 },
    // { id: 2, text: "rent", amount: -4000 }
  ]);

  //delete
  const deleteList =(id)=>{
    setTransection(
        transections.filter((transection)=>transection.id!==id)
    )
  }
//save 
const saveList =(text , amount)=>{
    // console.log(text, amount)
   const newText = {
        id:crypto.randomUUID(),
        text,
        amount
    }
    setTransection([newText , ...transections])
}
//edit
  return (
    <ExpenceContext.Provider value={{ transections ,deleteList,saveList }}>
      {children}
    </ExpenceContext.Provider>
  );
};

export default ExpenceContext;
