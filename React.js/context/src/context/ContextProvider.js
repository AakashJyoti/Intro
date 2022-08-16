import { createContext, useState } from "react";

export const CartItems = createContext();

const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <CartItems.Provider value={{ cart, setCart }}>
      {children}
    </CartItems.Provider>
  );
};
export default ContextProvider;
