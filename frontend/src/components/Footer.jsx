import { assets } from "../assets/assets"
import { Link } from "react-router-dom"
import { motion } from "motion/react"

const Footer = () => {

    return (
        <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}

            transition={{ duration: 0.5 }}
        >


            <div className="py-3  flex place-items-center justify-between  mt-30">
                <div className="flex place-items-center gap-2">
                    <img src={assets.logo} alt="error loading" className=" w-[30px]" />
                    <p className="font-bold font-lackerli">imgg</p>
                </div>

                <div className="flex items-center justify-center gap-2 ">
                    <Link to={'https://x.com/?lang=en'}><img src={assets.twitter_icon} alt="twitter" className="w-[30px]" /></Link>
                    <Link to={'https://www.instagram.com/accounts/login/?hl=en'}><img src={assets.instagram_icon} alt="instagram" className="w-[30px]" /></Link>
                    <Link to={'https://www.facebook.com/'}><img src={assets.facebook_icon} alt="facebook" className="w-[30px]" /></Link>
                </div>
            </div>

        </motion.div>
    )
}

export default Footer