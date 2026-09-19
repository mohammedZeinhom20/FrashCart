import getAllProducts from "@/apis/allproducts";
import HomeCart from "./_components/HomeCart/HomeCart";
import MainSlider from "./_components/MainSlider/MainSlider";
import CategorySlide from "./_components/CategorySlide/CategorySlide";
import {Product}  from "@/types/product.t";


export default async function Home() {

  const data : Product [] =await getAllProducts()


  return (
    <main className=" px-5 md:px-0 my-10 w-full md:w-[80%] mx-auto">
      <MainSlider/>
      <CategorySlide/>
      <div className="flex flex-wrap">
        {data.map( ( product :Product , idx )=> <HomeCart key={idx} product={product}/>)}

      </div>
    </main>
  );
}
