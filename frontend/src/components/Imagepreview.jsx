import { sample_img } from "../assets/assets"
import { motion } from "motion/react"
const Imagepreview = () => {
  return (

  <motion.div 
  initial={{ scale: 0 }}
  whileInView={{ scale: 1 }}
  
  transition={{ duration: 0.5 }}
  >
      <div className="flex flex-wrap justify-center gap-3 place-items-center sm:text-wrap md:img-wrap py-5 mt-20 ">
        {sample_img.map((e,index)=>
         <img src={e} key={index}  className="h-40 w-40 rounded-2xl "/>
        )}
    </div>

    <div className="py-3">
        <p className="text-center">Generated image from imgg</p>
    </div>
  </motion.div>
   
   
  )
}

export default Imagepreview