
import { useState } from "react"
import { motion } from "motion/react"
const Result = () => {
  const [input, setInput] = useState('')
  const [image, setImage] = useState(false)
  const [isimageloaded, setIsimageloaded] = useState(false)
  const handleSubmit=async (e)=>{
     e.preventDefault();
     console.log(input)
  }
  return (
    <motion.form onSubmit={handleSubmit} className="flex flex-col items-center justify-center mt-10"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}

      transition={{ duration: 0.5 }}
    >
      <div>
        <div className={image ? "" : "h-50 w-50"}>
          {image ?
            <img src={image} alt="Loading . . . ." className="max-w-xs rounded" />
            :
            <div></div>
          }
        </div>
      </div>

      {!isimageloaded ?
        <div className="flex  w-full max-w-xl  text-white border border-white/20 bg-white/10 rounded-full mt-10  text-sm">
          <input type="text" placeholder="Describe what you want to generate" className="flex-1 bg-transparent outline-none ml-8  max-sm:w-20 " value={input} onChange={(e) => setInput(e.target.value)} />
          <button className="cursor-pointer flex justify-center place-items-center text-xs  rounded-full px-8 py-3 bg-[#0087fe]" type="submit">Generate</button>
        </div>
        :
        <div className="flex  flex-col  md:flex-row items-center justify-center gap-5 p-1 mt-10">
          <p className="cursor-pointer flex justify-center place-items-center text-xs  rounded-full px-8 py-3 bg-[#0087fe]" onClick={()=>{
            setImage(false)
            setIsimageloaded(false)
          }}>Generate Another</p>
          <a href={image} download className="cursor-pointer flex justify-center place-items-center text-xs  rounded-full px-8 py-3 bg-[#0087fe]">Download</a>
        </div>
      }
    </motion.form>
  )
}

export default Result