import { useContext } from "react"
import { assets } from "../assets/assets"
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { motion } from "motion/react"
const Navbar = ({setloginpage}) => {
    const { user } = useContext(AppContext)
    const navigate = useNavigate();
    return (
        <motion.div className="py-3 px-10  flex place-items-center justify-between  fixed top-0 left-0 right-0"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}

        >
            <Link to={'/'}>
                <div className="flex place-items-center gap-2">
                    <img src={assets.logo} alt="error loading" className=" w-[30px]" />
                    <p className="font-bold font-lackerli">imgg</p>
                </div>
            </Link>


            <div>
                {
                    user ?
                        <div className=" flex gap-2 place-items-center text-sm  sm:text:xs">
                            <motion.button onClick={() => navigate('/buy')} className=" flex gap-2 bg-[#0087fe] px-4 sm:px-3 md:px-5 lg:px-7  py-1.5 cursor-pointer rounded-full  "

                                whileHover={{ scale: 1.1, backgroundColor: "#ff893f", transition: { duration: 0.5 } }}
                            >
                                <img src={assets.credit_star} alt="" className="w-[20px] " />
                                <p>Credit Left : 5</p>
                            </motion.button>
                            <p className="max-sm:hidden pl-4">Hi Rishu</p>
                            <div className="group relative">
                                <img src={assets.profile_icon} alt="" className="w-[30px]" />
                                <div className="absolute hidden group-hover:block top-0 right-0  z-10  rounded  pt-10"

                                >
                                    <motion.ul className="list-none m-0 p-2 bg-white text-black rounded-md border text-sm "
                                        initial={{ scale:0 }}
                                        whileInView={{ scale:1 }}
                                        transition={{ duration: 0.5 }}>
                                        <li className="px-4 py-1  cursor-pointer  ">Logout</li>
                                    </motion.ul>
                                </div>
                            </div>
                        </div> :
                        <div className=" flex gap-2 text-sm  sm:text:xs">
                            <motion.button onClick={() => navigate('/buy')} className="cursor-pointer"
                                whileHover={{ scale: 1.1, color: "#ff893f", transition: { duration: 0.5 } }}
                                >Pricing</motion.button>
                            <motion.button className="bg-[#0087fe] px-4 sm:px-3 md:px-5 lg:px-7  py-1.5 cursor-pointer rounded-full"
                            whileHover={{ scale: 1.1, backgroundColor: "#ff893f", transition: { duration: 0.5 } }}
                            onClick={()=>setloginpage(true)}
                            >Login</motion.button>
                        </div>
                }
            </div>

        </motion.div>
    )
}

export default Navbar

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   CreditCard, 
//   User, 
//   LogOut, 
//   Sparkles, 
//   Menu, 
//   X,
//   Zap,
//   Crown
// } from "lucide-react";

// // Mock assets - replace with your actual assets
// const mockAssets = {
//   logo: '🎨',
//   credit_star: '⭐',
//   profile_icon: '👤'
// };

// // Mock context - replace with your actual context
// const mockAppContext = {
//   user: {
//     name: "Rishu",
//     credits: 5,
//     avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
//   }
// };

// const ModernNavbar = ({ setloginpage = () => {} }) => {
//  // const { user } = mockAppContext; // Replace with useContext(AppContext)
//  const user = null
//   const navigate = (path) => console.log('Navigate to:', path); // Replace with actual navigation
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isProfileOpen, setIsProfileOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navVariants = {
//     hidden: { y: -100, opacity: 0 },
//     visible: { 
//       y: 0, 
//       opacity: 1,
//       transition: { 
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   const logoVariants = {
//     hover: { 
//       scale: 1.1,
//       rotate: 5,
//       transition: { duration: 0.3 }
//     }
//   };

//   const buttonVariants = {
//     hover: { 
//       scale: 1.05,
//       y: -2,
//       transition: { duration: 0.2 }
//     },
//     tap: { scale: 0.95 }
//   };

//   const creditButtonVariants = {
//     hover: { 
//       scale: 1.05,
//       y: -2,
//       boxShadow: "0 10px 25px rgba(139, 92, 246, 0.3)",
//       transition: { duration: 0.3 }
//     },
//     tap: { scale: 0.95 }
//   };

//   const dropdownVariants = {
//     hidden: { 
//       opacity: 0, 
//       scale: 0.8, 
//       y: -10,
//       transition: { duration: 0.2 }
//     },
//     visible: { 
//       opacity: 1, 
//       scale: 1, 
//       y: 0,
//       transition: { 
//         duration: 0.3,
//         ease: "easeOut"
//       }
//     }
//   };

//   const mobileMenuVariants = {
//     hidden: { 
//       opacity: 0, 
//       x: "100%",
//       transition: { duration: 0.3 }
//     },
//     visible: { 
//       opacity: 1, 
//       x: 0,
//       transition: { 
//         duration: 0.4,
//         ease: "easeOut"
//       }
//     }
//   };

//   return (
//     <>
//       <motion.nav
//         variants={navVariants}
//         initial="hidden"
//         animate="visible"
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//           isScrolled 
//             ? 'bg-black/20 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-purple-500/5' 
//             : 'bg-transparent'
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-6 py-4">
//           <div className="flex items-center justify-between">
//             {/* Logo Section */}
//             <div className="flex items-center gap-3 group cursor-pointer">
//               <motion.div
//                 variants={logoVariants}
//                 whileHover="hover"
//                 className="relative"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
//                 <div className="relative w-10 h-10 bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
//                   {mockAssets.logo}
//                 </div>
//               </motion.div>
//               <motion.span 
//                 className="font-bold text-2xl bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
//                 whileHover={{ scale: 1.05 }}
//               >
//                 imgg
//               </motion.span>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center gap-6">
//               {user ? (
//                 <div className="flex items-center gap-4">
//                   {/* Credits Button */}
//                   <motion.button
//                     variants={creditButtonVariants}
//                     whileHover="hover"
//                     whileTap="tap"
//                     onClick={() => navigate('/buy')}
//                     className="relative group overflow-hidden"
//                   >
//                     <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 rounded-full" />
//                     <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                     <div className="relative flex items-center gap-2 px-6 py-2.5 text-white font-medium">
//                       <Zap className="w-4 h-4" />
//                       <span className="text-sm">Credits: {user.credits}</span>
//                     </div>
//                     <motion.div
//                       className="absolute inset-0 bg-white/20 rounded-full"
//                       initial={{ x: '-100%', skewX: 45 }}
//                       whileHover={{ x: '100%' }}
//                       transition={{ duration: 0.6 }}
//                     />
//                   </motion.button>

//                   {/* Welcome Text */}
//                   <motion.p 
//                     className="text-white/80 font-medium hidden lg:block"
//                     initial={{ opacity: 0, x: 20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.3 }}
//                   >
//                     Hi, <span className="text-violet-400">{user.name}</span>
//                   </motion.p>

//                   {/* Profile Dropdown */}
//                   <div className="relative">
//                     <motion.button
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.95 }}
//                       onClick={() => setIsProfileOpen(!isProfileOpen)}
//                       className="relative group"
//                     >
//                       <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity" />
//                       <img
//                         src={user.avatar}
//                         alt="Profile"
//                         className="relative w-10 h-10 rounded-full border-2 border-white/20 object-cover shadow-lg"
//                       />
//                       <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full border-2 border-black/50" />
//                     </motion.button>

//                     <AnimatePresence>
//                       {isProfileOpen && (
//                         <motion.div
//                           variants={dropdownVariants}
//                           initial="hidden"
//                           animate="visible"
//                           exit="hidden"
//                           className="absolute right-0 top-12 w-48 py-2"
//                         >
//                           <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-purple-500/10 overflow-hidden">
//                             <motion.button
//                               whileHover={{ backgroundColor: 'rgba(139, 92, 246, 0.1)' }}
//                               className="w-full flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white transition-colors"
//                             >
//                               <LogOut className="w-4 h-4" />
//                               <span className="text-sm font-medium">Logout</span>
//                             </motion.button>
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 </div>
//               ) : (
//                 <div className="flex items-center gap-4">
//                   {/* Pricing Button */}
//                   <motion.button
//                     variants={buttonVariants}
//                     whileHover="hover"
//                     whileTap="tap"
//                     onClick={() => navigate('/buy')}
//                     className="text-white/80 hover:text-white font-medium transition-colors relative group"
//                   >
//                     Pricing
//                     <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-purple-400 group-hover:w-full transition-all duration-300" />
//                   </motion.button>

//                   {/* Login Button */}
//                   <motion.button
//                     variants={buttonVariants}
//                     whileHover="hover"
//                     whileTap="tap"
//                     onClick={() => setloginpage(true)}
//                     className="relative group overflow-hidden"
//                   >
//                     <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 rounded-full" />
//                     <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                     <span className="relative px-6 py-2.5 text-white font-medium text-sm">
//                       Login
//                     </span>
//                     <motion.div
//                       className="absolute inset-0 bg-white/20 rounded-full"
//                       initial={{ x: '-100%', skewX: 45 }}
//                       whileHover={{ x: '100%' }}
//                       transition={{ duration: 0.6 }}
//                     />
//                   </motion.button>
//                 </div>
//               )}
//             </div>

//             {/* Mobile Menu Button */}
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="md:hidden relative group"
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg blur-md opacity-30 group-hover:opacity-50 transition-opacity" />
//               <div className="relative w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-white">
//                 {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
//               </div>
//             </motion.button>
//           </div>
//         </div>
//       </motion.nav>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             variants={mobileMenuVariants}
//             initial="hidden"
//             animate="visible"
//             exit="hidden"
//             className="fixed inset-0 z-40 md:hidden"
//           >
//             <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
//             <div className="absolute right-0 top-0 bottom-0 w-80 bg-black/40 backdrop-blur-xl border-l border-white/10">
//               <div className="p-6 pt-20">
//                 {user ? (
//                   <div className="space-y-6">
//                     {/* User Info */}
//                     <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
//                       <img
//                         src={user.avatar}
//                         alt="Profile"
//                         className="w-12 h-12 rounded-full border-2 border-white/20 object-cover"
//                       />
//                       <div>
//                         <p className="text-white font-medium">Hi, {user.name}</p>
//                         <p className="text-white/60 text-sm">Welcome back!</p>
//                       </div>
//                     </div>

//                     {/* Credits */}
//                     <motion.button
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                       onClick={() => navigate('/buy')}
//                       className="w-full flex items-center gap-3 p-4 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl text-white"
//                     >
//                       <Zap className="w-5 h-5" />
//                       <span>Credits: {user.credits}</span>
//                     </motion.button>

//                     {/* Logout */}
//                     <motion.button
//                       whileHover={{ backgroundColor: 'rgba(239, 68, 68, 0.1)' }}
//                       className="w-full flex items-center gap-3 p-4 text-white/80 hover:text-red-400 transition-colors rounded-2xl"
//                     >
//                       <LogOut className="w-5 h-5" />
//                       <span>Logout</span>
//                     </motion.button>
//                   </div>
//                 ) : (
//                   <div className="space-y-4">
//                     <motion.button
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                       onClick={() => navigate('/buy')}
//                       className="w-full p-4 text-white/80 hover:text-white transition-colors text-left rounded-2xl hover:bg-white/5"
//                     >
//                       Pricing
//                     </motion.button>
//                     <motion.button
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                       onClick={() => setloginpage(true)}
//                       className="w-full p-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-2xl font-medium"
//                     >
//                       Login
//                     </motion.button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Click outside to close profile dropdown */}
//       {isProfileOpen && (
//         <div 
//           className="fixed inset-0 z-40" 
//           onClick={() => setIsProfileOpen(false)}
//         />
//       )}
//     </>
//   );
// };

// export default ModernNavbar;