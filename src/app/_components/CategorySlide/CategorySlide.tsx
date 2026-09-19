import getAllCategory from '@/apis/allCategory'
import React from 'react' 
import SwiperAllCategory from '../SwiperAllCategory/SwiperAllCategory'
import { Categories } from '@/types/Categories.t'


const CategorySlide = async () => {
    const data :Categories = await getAllCategory()
  return (
    <div className="mb-10 rounded-2xl overflow-hidden">
        <SwiperAllCategory categories={data}/>
    </div>
  )
}

export default CategorySlide