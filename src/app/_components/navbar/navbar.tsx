
"use client";

import Link from "next/link";
import React, { useContext } from "react";
import logo from "../../../../public/screens/slider/freshcart-logo.svg";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { cartContext } from "@/Context/CartContext";
import { ProductCart } from "@/types/cart.t";

const Navbar = () => {
  const { data: session, status } = useSession();

  const { numOfCartItems, totalCartPrice, products } = useContext(cartContext);

  return (
    <div className="bg-slate-100 p-5">
      <div className="w-full md:w-[80%] mx-auto flex flex-col lg:flex-row justify-between items-center">

        {/* Logo & Links */}
        <ul className="flex flex-col md:flex-row items-center text-center gap-6">
          {status === "authenticated" && (
            <>
              <li>
                <Link href="/">
                  <Image src={logo} alt="freshcart-logo" />
                </Link>
              </li>

              <li>
                <Link href="/">Home</Link>
              </li>


              <li>
                <Link href="/products">Products</Link>
              </li>

              <li>
                <Link href="/categories">Categories</Link>
              </li>

              <li>
                <Link href="/brands">Brands</Link>
              </li>
              <li>
                <Link href="/allorders">All Orders</Link>
              </li>
            </>
          )}

          {status === "loading" && <h1>Loading....</h1>}

          {status === "unauthenticated" && (
            <Image src={logo} alt="freshcart-logo" />
          )}
        </ul>

        {/* Icons & Buttons */}
        <div className="flex flex-col md:flex-row items-center text-center gap-6">

          {/* Social Icons */}
          <div>
            <i className="fab mx-1.5 fa-instagram"></i>
            <i className="fab mx-1.5 fa-facebook-f"></i>
            <i className="fab mx-1.5 fa-tiktok"></i>
            <i className="fab mx-1.5 fa-twitter"></i>
            <i className="fab mx-1.5 fa-linkedin"></i>
            <i className="fab mx-1.5 fa-youtube"></i>
          </div>

          {/* Cart Sidebar */}
          {status === "authenticated" && (
            <Sheet>
            <SheetTrigger className="relative cursor-pointer">
                <i className="fas fa-shopping-cart text-xl"></i>

                {numOfCartItems > 0 && (
                    <span className="absolute -top-3 -right-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-green-500 px-1 text-xs text-white">
                    {numOfCartItems}
                    </span>
                )}
            </SheetTrigger>

<SheetContent
  side="right"
  className="!w-full !max-w-full sm:!w-[600px] sm:!max-w-[600px] lg:!w-[600px] lg:!max-w-[600px] p-0"
>
  {/* Header */}
  <SheetHeader className="border-b p-5">
    <SheetTitle className="text-2xl font-bold font-sans">
        
        Shop Cart:
      <p className="my-3 text-[18px] text-green-500 font-mono">
        Total Price: {totalCartPrice} EGP
      </p>
    </SheetTitle>
  </SheetHeader>

  {/* Products - Scroll */}
  <div className="flex-1 overflow-y-auto p-5">
    {products?.length === 0 ? (
      <p className="text-center mt-5 text-2xl font-bold text-red-500">
        Your cart is empty
      </p>
    ) : (
      <div className="flex flex-col gap-4">
        {products?.map((item: ProductCart) => (
          <div
            key={item._id}
            className="flex justify-between items-center border-b pb-4"
          >
          <div className="flex justify-between items-center gap-3">

            <div className='w-[100px]'>
              <Image className="w-full block" src={item.product.imageCover} alt={item.product.title} width={250} height={250}/>
            </div>
            <div className="min-w-0">
              <h3 className="font-semibold line-clamp-1">
                {item.product.title}
              </h3>

              <p className="text-sm pt-3 text-gray-500">
                Quantity: {item.count}
              </p>
            </div>
          </div>

            <p className="font-semibold whitespace-nowrap">
              {item.price * item.count } EGP
            </p>
          </div>
        ))}
      </div>
    )}
  </div>

  {/* Footer */}
  <SheetFooter className="border-t p-5 ">
    <div className="w-full">
      <div className="flex justify-between font-bold mb-4">
        <p className="text-green-500 font-mono">
          Total Price:
        </p>

        <p className="text-green-500 font-mono">
          {totalCartPrice} EGP
        </p>
      </div>

      <SheetClose  className="w-full">
        <Link
          href="/cart"
          className="block w-full rounded-md bg-green-600 py-2 text-center text-white"
        >
          View Cart
        </Link>
      </SheetClose>
    </div>
  </SheetFooter>
</SheetContent>

            </Sheet>
          )}

          {/* Logout */}
          {status === "authenticated" && (
            <div>
              <button
                className="cursor-pointer"
                onClick={() =>
                  signOut({
                    callbackUrl: "/login",
                  })
                }
              >
                Logout
              </button>
            </div>
          )}

          {/* Register / Login */}
          {status === "unauthenticated" && (
            <>
              <div>
                <Link href="/register">Register</Link>
              </div>

              <div>
                <Link href="/login">Login</Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

