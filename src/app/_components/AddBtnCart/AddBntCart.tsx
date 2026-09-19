"use client";

import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";
import { cartContext } from "@/Context/CartContext";
import { useContext } from "react";
import { ReactNode } from "react";

interface AddBntCartProps {
  id: string;
  children?: ReactNode;
  className?: string;
}

const AddBntCart = ({
  id,
  children = "Add To Cart",
  className,
}: AddBntCartProps) => {
  const { addProductToCart } = useContext(cartContext);

  async function handleAddCart() {
    const data = await addProductToCart(id);
    

    if (data?.status) {
      toast.add({
        type: "success",
        description: "Product added to cart successfully",
      });
    }
  }

  return (
    <Button
      variant="default"
      className={className}
      onClick={handleAddCart}
    >
      {children}
    </Button>
  );
};

export default AddBntCart;