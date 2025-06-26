
import { motion } from "motion/react"
import Generatebutton from "./Generatebutton"
const Footer_hero = () => {

    return (
        <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}

            transition={{ duration: 0.5 }}
        >
            <div className="text-center mt-20 ">
                <p className="text-3xl ">See the magic. Try now</p>
                <Generatebutton />
            </div>



        </motion.div>
    )
}

export default Footer_hero