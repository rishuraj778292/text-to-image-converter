import { assets, testimonialsData } from "../assets/assets"
import Tilt from 'react-parallax-tilt';
import { motion } from "motion/react"
const Testimonial = () => {
  return (
    <motion.div
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
  
    transition={{ duration: 0.5 }}
    
    >
      <div className="text-center mt-20">
        <p className="text-4xl py-3">Customers Testimonials</p>
        <p className="text-sm py-3">What Our User Are Sayings </p>
      </div>
      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row  justify-center items-center mt-5 gap-4">
        {testimonialsData.map((e, index) => (


          <Tilt key={index}
            glareEnable={true}
            glareColor="#0087fe"
            glarePosition="all"
            glareMaxOpacity={0.3}
            glareBorderRadius="1rem"
          >
            <div className="flex flex-col gap-1 justify-center items-center border border-white/20 bg-white/10 backdrop-blur-md  rounded-2xl p-3 ">
              <img src={e.image} alt="" />
              <p>{e.name}</p>
              <p>{e.role}</p>
              <div className="flex gap-0.5">
                {new Array(e.stars).fill(assets.rating_star).map((imgsrc, imgindex) => (
                  <img src={imgsrc} alt="" key={imgindex} />
                ))}
              </div>
              <p className="text-xs py-2 text-center">{e.text}</p>
            </div>

          </Tilt>



        ))}
      </div>


    </motion.div>
  )
}

export default Testimonial