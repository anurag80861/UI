import React from 'react'
import mark from "../Assets/mark.jpg"
const Explorin = ({ name, count, images }) => {
  console.log(images)
  const error=images.reduce((acc,img)=>acc || img.error,false)//or agar (image.error) true ho toh error dega  

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='bg-sky-950 w-[800px] h-[150px] flex justify-around  items-center'>
        <div className='flex'>
          <div className='grid grid-cols-2'>
            {images.map((image, ind) => (
              //key ka use isliye kra hai taki arr ki indexing na bigade
              <div key={ind}>
                {image.error
                  // true ho toh yai chlai brna nichai bali condition chalai 
                  ? <img src={mark} alt="" className='h-[38px] w-[38px] rounded-3xl ' />
                  : <img src={image.url} alt="" className='h-[38px] w-[38px] rounded-3xl ' />
                }


              </div>
            ))}
          </div>
          <div className='text-white ml-52 '><h1>Explorin Academy</h1> <p>3+ offline course</p> </div>
        </div>
         { error && <div className='h-[38px] w-[38px] ml-50px '><img src={mark} className='rounded-3xl' /></div>}
      </div>
    </div>
  )
}

export default Explorin;
