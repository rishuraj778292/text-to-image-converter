
import { assets } from "../assets/assets"
import Tilt from 'react-parallax-tilt';
import { motion } from "motion/react"
import Generatebutton from "./Generatebutton";


const Header = () => {

    return (
        <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}

            transition={{ duration: 0.5 }}
        className="min-h-screen flex justify-center items-center"
        >
        <div>
             <p className="text-center text-2xl sm:text-2xl md:text-4xl lg:text-5xl py-4 mb-3 pt-10">Welcome to
                <span className="text-[#0087fe] font-lackerli pl-3">imgg</span> </p>

            <div className="flex justify-center place-items-center mb-3 py-4">
                <Tilt
                    glareEnable={true}
                    glareColor="#0087fe"
                    glarePosition="all"
                    glareMaxOpacity={0.3}
                    glareBorderRadius="1rem"
                >
                    <div className="flex justify-center place-items-center gap-2 border border-white/20 bg-white/10 backdrop-blur-md rounded-full  px-5 py-2 text-xs">
                        <p>Best Text to Image Generator</p>
                        <img src={assets.star_icon} />
                    </div>
                </Tilt>
            </div>

            <Tilt>
                <p className="text-center text-2xl sm:text-2xl md:text-4xl lg:text-6xl py-4 3 mb-3">Turn  text to  <span className="text-[#0087fe]">Image</span>, in  seconds.</p>
            </Tilt>
            <p className="text-center text-xs py-4">Unleash your creativity with ai. Turn your imagination into visual art in  second - just type, and watch the magic happen.</p>

            <Generatebutton />
        </div>
        </motion.div>
    )
}

export default Header