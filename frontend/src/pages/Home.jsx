import About from "../components/About"

import Footer_hero from "../components/Footer_hero"
import Header from "../components/Header"
import Imagepreview from "../components/Imagepreview"
import Steps from "../components/Steps"
import Testimonial from "../components/Testimonial"

const Home = () => {
  return (
    <div>
      <Header/>
      <Imagepreview/>
      <Steps/>
      <About/>
      <Testimonial/>
      <Footer_hero/>
    </div>
  )
}

export default Home


// import React, { useState, useEffect } from 'react';
// import { assets } from "../assets/assets"
// import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
// import { Sparkles, Zap, Image, Star, ArrowRight, Play, Check, ChevronRight, Palette, Wand2, Download } from 'lucide-react';

// // Mock assets - replace with your actual assets
// // const assets = {
// //   star_icon: '⭐',
// //   sample_img_1: 'https://images.unsplash.com/photo-1686191128892-45e4e99abc04?w=400&h=400&fit=crop',
// //   rating_star: '⭐'
// // };

// const sampleImages = [
//   'https://images.unsplash.com/photo-1686191128892-45e4e99abc04?w=300&h=300&fit=crop',
//   'https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?w=300&h=300&fit=crop',
//   'https://images.unsplash.com/photo-1707344006654-80e46b82fcbf?w=300&h=300&fit=crop',
//   'https://images.unsplash.com/photo-1707344029617-4c0b5ae4c42c?w=300&h=300&fit=crop',
//   'https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?w=300&h=300&fit=crop',
//   'https://images.unsplash.com/photo-1686191128892-45e4e99abc04?w=300&h=300&fit=crop'
// ];

// const stepsData = [
//   {
//     icon: <Palette className="w-8 h-8" />,
//     title: "Describe Your Vision",
//     description: "Simply type what you want to see. Our AI understands complex descriptions and artistic styles."
//   },
//   {
//     icon: <Wand2 className="w-8 h-8" />,
//     title: "AI Magic Happens",
//     description: "Our advanced AI processes your text and creates stunning, unique images in seconds."
//   },
//   {
//     icon: <Download className="w-8 h-8" />,
//     title: "Download & Share",
//     description: "Get your high-quality images instantly. Perfect for any project or creative need."
//   }
// ];

// const testimonialsData = [
//   {
//     name: "Sarah Chen",
//     role: "Creative Director",
//     stars: 5,
//     text: "Absolutely revolutionary! This AI creates images that rival professional artists. Game-changer for our campaigns.",
//     image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face"
//   },
//   {
//     name: "Marcus Rodriguez",
//     role: "Digital Artist",
//     stars: 5,
//     text: "The quality and speed are incredible. I can iterate on concepts in minutes instead of hours. Love it!",
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
//   },
//   {
//     name: "Emma Thompson",
//     role: "Marketing Manager",
//     stars: 5,
//     text: "Perfect for social media content. The AI understands exactly what I need and delivers every time.",
//     image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
//   }
// ];

// const FloatingOrbs = () => (
//   <div className="fixed inset-0 overflow-hidden pointer-events-none">
//     {[...Array(6)].map((_, i) => (
//       <motion.div
//         key={i}
//         className="absolute w-64 h-64 rounded-full opacity-10"
//         style={{
//           background: `linear-gradient(135deg, ${i % 2 === 0 ? '#6366f1, #8b5cf6' : '#06b6d4, #3b82f6'})`,
//           filter: 'blur(40px)',
//         }}
//         animate={{
//           x: [0, 100, 0],
//           y: [0, -100, 0],
//           scale: [1, 1.2, 1],
//         }}
//         transition={{
//           duration: 20 + i * 5,
//           repeat: Infinity,
//           repeatType: 'reverse',
//           ease: 'easeInOut',
//         }}
//         style={{
//           left: `${Math.random() * 100}%`,
//           top: `${Math.random() * 100}%`,
//         }}
//       />
//     ))}
//   </div>
// );

// const GenerateButton = ({ className = "", children = "Generate Image", variant = "primary" }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <motion.button
//       className={`relative group overflow-hidden rounded-2xl font-semibold transition-all duration-300 ${
//         variant === 'primary' 
//           ? 'bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 text-white px-8 py-4 text-lg'
//           : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3'
//       } ${className}`}
//       whileHover={{ scale: 1.05, y: -2 }}
//       whileTap={{ scale: 0.95 }}
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//     >
//       <motion.div
//         className="absolute inset-0 bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//         initial={false}
//         animate={{
//           scale: isHovered ? 1 : 0.8,
//           opacity: isHovered ? 1 : 0,
//         }}
//       />
//       <span className="relative z-10 flex items-center gap-2">
//         {children}
//         <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//       </span>
//       <motion.div
//         className="absolute inset-0 bg-white/20"
//         initial={{ x: '-100%', skewX: 45 }}
//         whileHover={{ x: '100%' }}
//         transition={{ duration: 0.6 }}
//       />
//     </motion.button>
//   );
// };

// const Header = () => {
//   const [text, setText] = useState('');
//   const fullText = 'Turn text to Image, in seconds.';

//   useEffect(() => {
//     let index = 0;
//     const timer = setInterval(() => {
//       setText(fullText.slice(0, index));
//       index++;
//       if (index > fullText.length) {
//         index = 0;
//         setTimeout(() => setText(''), 1000);
//       }
//     }, 100);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="text-center max-w-6xl mx-auto"
//       >
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-8"
//         >
//           <Sparkles className="w-5 h-5 text-violet-400" />
//           <span className="text-sm font-medium text-white/90">Best AI Image Generator</span>
//           <span className="text-violet-400">{assets.star_icon}</span>
//         </motion.div>

//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4, duration: 0.8 }}
//           className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
//         >
//           Welcome to{' '}
//           <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//             imgg
//           </span>
//         </motion.h1>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6, duration: 0.8 }}
//           className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 h-20 flex items-center justify-center"
//         >
//           <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
//             {text}
//             <motion.span
//               animate={{ opacity: [1, 0] }}
//               transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
//               className="text-violet-400"
//             >
//               |
//             </motion.span>
//           </span>
//         </motion.div>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.8, duration: 0.6 }}
//           className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
//         >
//           Unleash your creativity with cutting-edge AI. Transform your imagination into stunning visual art in seconds - just type, and watch the magic happen.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1, duration: 0.6 }}
//         >
//           <GenerateButton className="shadow-2xl shadow-violet-500/25" />
//         </motion.div>
//       </motion.div>

//       <motion.div
//         className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
//         animate={{ y: [0, -10, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//       >
//         <ChevronRight className="w-6 h-6 text-white/50 rotate-90" />
//       </motion.div>
//     </section>
//   );
// };

// const ImagePreview = () => {
//   return (
//     <section className="py-20 px-6">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="max-w-7xl mx-auto"
//       >
//         <motion.h2
//           className="text-4xl md:text-5xl font-bold text-center mb-4"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
//             AI-Generated Masterpieces
//           </span>
//         </motion.h2>
        
//         <motion.p
//           className="text-center text-white/70 mb-16 text-lg"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.4, duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           Real examples created by our AI engine
//         </motion.p>

//         <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//           {sampleImages.map((img, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50, scale: 0.8 }}
//               whileInView={{ opacity: 1, y: 0, scale: 1 }}
//               transition={{ delay: index * 0.1, duration: 0.6 }}
//               viewport={{ once: true }}
//               whileHover={{ scale: 1.05, y: -10 }}
//               className="group relative overflow-hidden rounded-3xl"
//             >
//               <img
//                 src={img}
//                 alt={`AI Generated ${index + 1}`}
//                 className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               <motion.div
//                 className="absolute inset-0 border-2 border-transparent rounded-3xl"
//                 whileHover={{
//                   borderImage: "linear-gradient(45deg, #8b5cf6, #06b6d4) 1",
//                   borderImageSlice: 1
//                 }}
//               />
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// const Steps = () => {
//   return (
//     <section className="py-20 px-6">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="max-w-6xl mx-auto"
//       >
//         <div className="text-center mb-16">
//           <motion.h2
//             className="text-4xl md:text-5xl font-bold mb-4"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
//               How It Works
//             </span>
//           </motion.h2>
//           <motion.p
//             className="text-xl text-white/80"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.4, duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             Transform words into stunning images in three simple steps
//           </motion.p>
//         </div>

//         <div className="space-y-8">
//           {stepsData.map((step, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ delay: index * 0.2, duration: 0.8 }}
//               viewport={{ once: true }}
//               className={`flex flex-col md:flex-row items-center gap-8 ${
//                 index % 2 === 1 ? 'md:flex-row-reverse' : ''
//               }`}
//             >
//               <motion.div
//                 whileHover={{ scale: 1.05, rotateY: 5 }}
//                 className="relative group"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
//                 <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
//                   <div className="flex items-center gap-6">
//                     <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl text-white">
//                       {step.icon}
//                     </div>
//                     <div className="text-6xl font-bold text-white/20">
//                       {String(index + 1).padStart(2, '0')}
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>

//               <div className="flex-1 text-center md:text-left">
//                 <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
//                   {step.title}
//                 </h3>
//                 <p className="text-lg text-white/70 leading-relaxed">
//                   {step.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// const About = () => {
//   return (
//     <section className="py-20 px-6">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="max-w-7xl mx-auto"
//       >
//         <div className="text-center mb-16">
//           <motion.h2
//             className="text-4xl md:text-5xl font-bold mb-4"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
//               Create AI Images
//             </span>
//           </motion.h2>
//           <motion.p
//             className="text-xl text-white/80"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.4, duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             Turn your imagination into breathtaking visuals
//           </motion.p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//             viewport={{ once: true }}
//             className="relative group"
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
//             <img
//               src={assets.sample_img_1}
//               alt="AI Generated Sample"
//               className="relative w-full h-96 object-cover rounded-3xl shadow-2xl"
//             />
//             <motion.div
//               className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"
//               whileHover={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//             />
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//             viewport={{ once: true }}
//             className="space-y-6"
//           >
//             <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
//               Introducing the AI-Powered Text to Image Generator
//             </h3>
            
//             <div className="space-y-4 text-white/80 leading-relaxed">
//               <p>
//                 Easily bring your ideas to life with our revolutionary AI image generator. Whether you need stunning visuals or unique imagery, our tool transforms your text into eye-catching images with just a few clicks.
//               </p>
//               <p>
//                 Simply type in a text prompt, and our cutting-edge AI will generate high-quality images in seconds. From product visuals to character designs and portraits, even concepts that don't yet exist can be visualized effortlessly.
//               </p>
//               <p className="font-semibold text-violet-400">
//                 Powered by advanced AI technology, the creative possibilities are limitless!
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-4 pt-4">
//               {['High Quality', 'Lightning Fast', 'Unlimited Creative'].map((feature, index) => (
//                 <motion.div
//                   key={feature}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
//                   viewport={{ once: true }}
//                   className="flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full px-4 py-2"
//                 >
//                   <Check className="w-4 h-4 text-green-400" />
//                   <span className="text-sm font-medium text-white/90">{feature}</span>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// const Testimonial = () => {
//   return (
//     <section className="py-20 px-6">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="max-w-7xl mx-auto"
//       >
//         <div className="text-center mb-16">
//           <motion.h2
//             className="text-4xl md:text-5xl font-bold mb-4"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
//               Customer Testimonials
//             </span>
//           </motion.h2>
//           <motion.p
//             className="text-xl text-white/80"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.4, duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             What our users are saying about imgg
//           </motion.p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {testimonialsData.map((testimonial, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2, duration: 0.8 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -10, scale: 1.02 }}
//               className="relative group"
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
//               <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 h-full">
//                 <div className="flex items-center gap-4 mb-6">
//                   <img
//                     src={testimonial.image}
//                     alt={testimonial.name}
//                     className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
//                   />
//                   <div>
//                     <h4 className="font-semibold text-white">{testimonial.name}</h4>
//                     <p className="text-white/60 text-sm">{testimonial.role}</p>
//                   </div>
//                 </div>
                
//                 <div className="flex gap-1 mb-4">
//                   {[...Array(testimonial.stars)].map((_, starIndex) => (
//                     <Star key={starIndex} className="w-5 h-5 text-yellow-400 fill-current" />
//                   ))}
//                 </div>
                
//                 <p className="text-white/80 leading-relaxed">{testimonial.text}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// const FooterHero = () => {
//   return (
//     <section className="py-20 px-6">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="max-w-4xl mx-auto text-center"
//       >
//         <motion.div
//           className="relative"
//           whileHover={{ scale: 1.02 }}
//         >
//           <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-20" />
//           <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12">
//             <motion.h2
//               className="text-4xl md:text-6xl font-bold mb-8"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2, duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
//                 See the Magic. Try Now
//               </span>
//             </motion.h2>
            
//             <motion.p
//               className="text-xl text-white/80 mb-12 max-w-2xl mx-auto"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ delay: 0.4, duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               Join thousands of creators who are already transforming their ideas into stunning visual art
//             </motion.p>
            
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6, duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <GenerateButton className="text-xl px-12 py-5 shadow-2xl shadow-violet-500/25">
//                 Start Creating Now
//               </GenerateButton>
//             </motion.div>
//           </div>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// const ModernLanding = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
//       <FloatingOrbs />
//       <div className="relative z-10">
//         <Header />
//         <ImagePreview />
//         <Steps />
//         <About />
//         <Testimonial />
//         <FooterHero />
//       </div>
//     </div>
//   );
// };

// export default ModernLanding;