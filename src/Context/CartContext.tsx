"use client";

import { AddTOCartAction } from "@/CartActions/addToCart";
import { clearCartAction } from "@/CartActions/clearCart";
import { getUserCartAction } from "@/CartActions/getUserCart";
import { removeCartItemAction } from "@/CartActions/removeCartItem";
import { updataCartAction } from "@/CartActions/updataCart";
import { Cart } from "@/types/cart.t";
import { useSession } from "next-auth/react";
import React, {
  createContext,
  useEffect,
  useState,
} from "react";

interface CartContextType {
  numOfCartItems: number;
  totalCartPrice: number;
  products: Cart["data"]["products"];
  cartId: string;

  addProductToCart: (id: string) => Promise<Cart>;
  removeCartItem: (id: string) => Promise<Cart>;
  updataCartItem: (id: string, count: number) => Promise<Cart>;
  getUserCart: () => Promise<Cart>;
  clearCart: () => Promise<Cart>;

  afterPayment: () => void;
}

export const cartContext = createContext<CartContextType>(
  {} as CartContextType
);

const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [numOfCartItems, setNumOfCartItems] = useState(0);
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  const [products, setProducts] =
    useState<Cart["data"]["products"]>([]);
  const [cartId, setCartId] = useState("");

  const { status } = useSession();

  async function addProductToCart(id: string): Promise<Cart> {
    try {
      const data: Cart = await AddTOCartAction(id);

      setNumOfCartItems(data.numOfCartItems);
      setTotalCartPrice(data.data.totalCartPrice);
      setProducts(data.data.products);

      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async function removeCartItem(id: string): Promise<Cart> {
    try {
      const data: Cart = await removeCartItemAction(id);

      setNumOfCartItems(data.numOfCartItems);
      setTotalCartPrice(data.data.totalCartPrice);
      setProducts(data.data.products);

      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async function updataCartItem(
    id: string,
    count: number
  ): Promise<Cart> {
    try {
      const data: Cart = await updataCartAction(id, count);

      setNumOfCartItems(data.numOfCartItems);
      setTotalCartPrice(data.data.totalCartPrice);
      setProducts(data.data.products);

      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async function getUserCart(): Promise<Cart> {
    try {
      const data: Cart = await getUserCartAction();

      setNumOfCartItems(data.numOfCartItems);
      setTotalCartPrice(data.data.totalCartPrice);
      setCartId(data.cartId);
      setProducts(data.data.products);

      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async function clearCart(): Promise<Cart> {
    try {
      const data: Cart = await clearCartAction();

      setNumOfCartItems(0);
      setTotalCartPrice(0);
      setProducts([]);
      setCartId("");

      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  useEffect(() => {
    if (status === "authenticated") {
      getUserCart();
    }

    if (status === "unauthenticated") {
      setNumOfCartItems(0);
      setTotalCartPrice(0);
      setProducts([]);
      setCartId("");
    }
  }, [status]);

  function afterPayment() {
    setCartId("");
    setNumOfCartItems(0);
    setTotalCartPrice(0);
    setProducts([]);
  }

  return (
    <cartContext.Provider
      value={{
        numOfCartItems,
        totalCartPrice,
        products,
        addProductToCart,
        removeCartItem,
        updataCartItem,
        getUserCart,
        clearCart,
        cartId,
        afterPayment,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;