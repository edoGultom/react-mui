import React, { createContext, useContext, useReducer } from "react";

const Context = createContext();
const initialState = {
  cart: {},
};

export function useGlobalContext() {
  const [state, dispatch] = useContext(Context);
  if (!state || !dispatch) {
    throw new Error("useGlobalContext must be used within a Provider");
  }
  return { state, dispatch };
}
function Reducer(state, action) {
  switch (action.type) {
    case "ADD_CART":
      return {
        ...state,
        cart: state.cart
          ? {
              ...state.cart,
              [action.item.id]: action.item,
            }
          : {
              [action.item.id]: action.item,
            },
      };
    case "RESET_CART":
      return {
        ...state,
        cart: initialState.cart,
      };
    default: {
      throw new Error(`Unhandled action type ${action.type}`);
    }
  }
}
//harus buat provider nya
export default function Provider(props) {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return <Context.Provider value={[state, dispatch]} {...props} />;
}
