import React from 'react'
import Image  from 'next/image';
import notFound from "../../public/screens/404.jpg"

const NotFound = () => {
  return (
    <div className='w-full md:w-[80%] mx-auto my-5 md:my-0 '>
        <Image src={notFound}  alt="notFound" />
    </div>
  )
}

export default NotFound