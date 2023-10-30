import Navbar from "./components/Navbar";
import CardOne from "./components/CardOne";
import Listgroup from "./components/Listgroup";
// import { useState } from "react";
import { ExpenceProvider } from "./context/expenseContext";

const App = () => {
  
  // const [incomes , setIncomes] = useState([{id:1,amount:40000}])

  return (
    <ExpenceProvider>
      <Navbar/>
      <div className="container w-100 d-flex justify-content-between">
        <div className="w-100">
        <CardOne/>
        </div>
        <div className="w-100">
        <Listgroup/>
        </div>
      </div>
    </ExpenceProvider>
  );
};

export default App;
