import { assets } from "../assets/assets"
import { motion } from "motion/react"
const About = () => {
    return (
        <motion.div className="mt-20"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
       
        transition={{ duration: 0.5 }}
        >
            <div className="text-center mb-15">
                <p className="text-4xl  mb-4">Create AI Images</p>
                <p>Turn your imaginations into visuals</p>
            </div>

            <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-10  items-center justify-center">
                <img src={assets.sample_img_1} alt="" className="w-70 rounded-2xl " />
                <div className="">
                    <p className="text-xl py-5">Introducing the AI-Powered Text to Image Generator</p>

                    <p className="text-sm">
                        Easily bring your ideas to life with our free Al image generator, Whether you
                        need stunning visuals or unique imagery, our tool transforms your text into
                        eye-catching images with just a few clicks. Imagine it, describe it, and watch it come to life instantly.
                        <br />
                        <br />
                        Simply type in a text prompt, and our cutting-edge Al will generate high-
                        quality images in seconds. From product visuals to character designs and
                        portraits, even concepts that don not yet exist can be visualized effortlessly.
                        Powered by advanced Al technology, the creative possibilities are limitless!
                    </p>
                </div>
            </div>

        </motion.div>
    )
}

export default About