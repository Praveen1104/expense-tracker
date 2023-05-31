import "./App.css";
import Addtransaction from "./components/Addtransaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import Incomeexpenses from "./components/Incomeexpenses";
import Transaction from "./components/Transaction";

import { Globalprovider } from "./context/Globalstore";
function App() {
  return (
    <Globalprovider>
      <Header />
      <div className="container">
        <Balance />
        <Incomeexpenses />
        <Transaction />
        <Addtransaction />
      </div>
    </Globalprovider>
  );
}

export default App;
