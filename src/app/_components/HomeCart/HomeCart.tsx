import React from 'react'
import { Card } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import  Image  from 'next/image';
import { CardContent } from '@/components/ui/card';
import { CardFooter } from '@/components/ui/card';
import  Link  from 'next/link';
import { Product } from '@/types/product.t';
import AddBntCart from '../AddBtnCart/AddBntCart';


const HomeCart = ({product}:{product :Product}) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3">
            <div className="liner">
                <Card className="p-2 gap-0">
                  <Link href={`/productDetails/${product.id}`}>
                    <CardHeader className="px-0 mb-2">
                        <div className="w-full">
                        <Image className="w-full h-70 object-cover rounded-md"   
                        src={product.imageCover}
                        alt={product.slug}
                        width={250}
                        height={250}
                          />
                        </div>
                    </CardHeader>
                    <CardContent className="px-2 m-0 mb-2">
                        <p className="font-bold text-green-700 mb-3">{product.category.name}</p>
                        <p className="font-bold line-clamp-1">{product.title}</p>
                    </CardContent>
                    <CardFooter className="px-2 py-3 bg-white">
                        <div className="w-full flex justify-between items-center pt-0">
                          <p>{product.price} EGP</p>
                          <p>{product.quantity}</p>
                          <p>{product.ratingsAverage} <i className=" fa-solid fa-star text-yellow-400"></i></p>
                        </div>
                    </CardFooter>
                  </Link>
                  <AddBntCart
                    id={product._id}
                    className="flex h-11 w-[95%] m-auto mb-2 items-center justify-center rounded-xl bg-[#0aad0a] text-white shadow-sm transition-all duration-200 hover:scale-105 hover:bg-[#088a08] disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
                  >
                    Add TO Cart
                  </AddBntCart>
                </Card>
            </div>
        </div>
  )
}

export default HomeCart