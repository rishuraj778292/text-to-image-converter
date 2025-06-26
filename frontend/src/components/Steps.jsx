import { stepsData } from "../assets/assets"
import Tilt from 'react-parallax-tilt';
import { motion } from "motion/react"

const Steps = () => {
    return (
        <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}

        transition={{ duration: 0.5 }}
        >
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                }
                }
                viewport={{ once: true, amount: 0.2 }}
                className="mt-20  mb-10  text-center ">
                <motion.p
                    className="text-4xl py-5">How it works</motion.p>
                <motion.p>Transform Words Into Stunning Images</motion.p>
            </motion.div>

            <div className="flex items-center justify-center">
                <div className=" ">
                    {stepsData.map((e, index) => (
                        <Tilt key={index}
                            glareEnable={true}
                            glareColor="#0087fe"
                            glarePosition="all"
                            glareMaxOpacity={0.3}
                            glareBorderRadius="1rem"
                        >
                            <div key={index} className="flex flex-col  sm:flex-col md:flex-row lg:flex-row gap-3 py-5  px-5 my-5  border border-white/20 backdrop-blur-md  rounded-2xl  bg-white/10">
                                <img src={e.icon} className="w-15 " />
                                <div>
                                    <p className="sm:text-sm md:text-md lg:text-lg">{e.title}</p>
                                    <p className="text-xs md:text-sm lg:text:sm">{e.description}</p>
                                </div>
                            </div>
                        </Tilt>
                    ))}
                </div>
            </div>

        </motion.div>
    )
}

export default Steps
