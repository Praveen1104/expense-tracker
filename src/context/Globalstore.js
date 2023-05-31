import { createContext, useReducer } from "react";
import Appreducer from "./Appreducer";
const initialState = {
  transactions: [],
};

export const Globalcontext = createContext(initialState);

export const Globalprovider = ({ children }) => {
  const [state, dispatch] = useReducer(Appreducer, initialState);
  function deletetransaction(id) {
    dispatch({
      type: "delete",
      payload: id,
    });
  }
  function addtransaction(transaction) {
    dispatch({
      type: "add",
      payload: transaction,
    });
  }

  return (
    <Globalcontext.Provider
      value={{
        transactions: state.transactions,
        deletetransaction,
        addtransaction,
      }}
    >
      {children}
    </Globalcontext.Provider>
  );
};
