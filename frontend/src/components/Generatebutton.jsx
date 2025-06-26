import { motion } from "motion/react"
import { assets } from "../assets/assets"
import { useNavigate } from "react-router-dom"

const Generatebutton = () => {
    const navigate = useNavigate()
    return (
        <div className="flex justify-center place-items-center py-4 pt-10">
            <motion.button
                onClick={() => { navigate('/result') }}
                className="cursor-pointer flex justify-center place-items-center gap-2 text-xs  rounded-full px-5 py-2 bg-[#0087fe] "

                whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.5 }
                }}
                whileTap={{ scale: 0.9 }}

            >
                <p>Generate Images</p>
                <img src={assets.star_group} className="w-5" />
            </motion.button>
        </div>
    )
}

export default Generatebutton