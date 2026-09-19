"use client"
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/toast'
import { cartContext } from '@/Context/CartContext'
import { ProductCart } from '@/types/cart.t'
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'

const  Cart =  () => {

  const {totalCartPrice ,products ,removeCartItem ,updataCartItem ,clearCart}= useContext(cartContext)

  async function removeItem(id : string) {
    const data = await removeCartItem(id)
    

    if(data.status ){
          toast.add({
           type:"success",
           description: "success to remove this product from cart"
          })
        }
    
  }
  async function updataItem(id: string, count: number) {
    const data = await updataCartItem(id, count);

    if (data?.status) {
      toast.add({
        type: "success",
        description: "Cart updated successfully",
      });
    }
  }

  if(products.length == 0){
      return <div className='flex items-center justify-center h-screen'>
            <p className='text-4xl font-bold text-red-700'>Your cart is empty</p>
      </div>
  }

  return (
    <div className='w-full md:w-[80%] mx-auto my-10 px-5 md:px-0 bg-slate-100 '>
      <div className='p-5 '>
        <h1 className='text-2xl font-bold '>Shop Cart : </h1>
        <p className='my-3 text-green-500 font-mono'> Total Price : {totalCartPrice} EGP</p>
        <Button className='rounded-[5px] font-sans' onClick={clearCart}>Clear Cart</Button>
        <Button className='rounded-[5px] font-sans ms-5' > 
          <Link href='/payment'>Payment</Link>
        </Button>

        <div className='allProductsCart'>
          {products.map((product : ProductCart  , idx : number)=>{

            return <div key={idx} className='flex items-center justify-between py-3 border-b-[1px] borer-green-700/35'>
              <div className='flex items-center gap-5'>


                <div>
                  <Image src={product.product.imageCover} alt={product.product.title} height={250} width={250}/>
                </div>

                <div>
                  <h1 className='line-clamp-1 font-sans'>{product.product.title}</h1>
                  <p className='py-2 font-mono'>Price : {product.price} EGP</p>
                  <p className='pb-3 font-mono'>Total Price Item : {product.price * product.count } EGP</p>
                  <Button className='rounded-[5px]' onClick={()=>removeItem(product.product.id)}>Remove</Button>
                </div>
                
              </div>

              <div className='flex items-center gap-2'>
                  <Button className='rounded-[5px]' onClick={()=> updataItem(product.product.id ,product.count + 1)}>+</Button>
                  <p>{product.count}</p>
                  <Button className='rounded-[5px]' onClick={()=> updataItem(product.product.id ,product.count - 1)}>-</Button>
              </div>
            
            </div>

          })}

        </div>

      </div>
      

    </div>
  )
}

export default Cart