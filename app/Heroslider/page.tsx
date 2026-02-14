"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function Heroslider() {
  return (
    <div className="w-full h-[40vh] sm:h-[70vh] lg:h-[95vh]">
      <Swiper
        pagination={{ clickable: true }}
        
        autoplay={{ delay: 300000 }}
        loop={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="w-full h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: "url('/hero.jpg')" }}
          ><div className="absolute top-0 left-0 w-full h-full bg-black/35"></div>
            <motion.h1 initial={{ opacity: 0,y:60}} animate={{opacity: 1, y:0 }} transition={{ duration: 1.0 }}  className="absolute  top-20 md:right-60 md:top-62 text-white text-4xl  md:text-[68px] font-bold  p-4 rounded">
              Innovating for a  
            </motion.h1>
            <motion.h1 initial={{ opacity: 0,y:60}} animate={{opacity: 1, y:0 }} transition={{ duration: 1.0 }} className="absolute top-30 md:right-17 md:top-84 text-white text-4xl md:text-[68px] font-bold  p-4 rounded">
            <span className="text-[#3C467B]" >Smarter</span>,Sustainable
            </motion.h1>
            <motion.h1 initial={{ opacity: 0,y:60}} animate={{opacity: 1, y:0 }} transition={{ duration: 1.0 }} className="absolute top-40 md:right-110 md:top-104 text-white text-4xl md:text-[68px] font-bold  p-4 rounded">
            Tomorrow
            </motion.h1>
            
            <motion.button initial={{ opacity: 0,y:60}} animate={{opacity: 1, y:0 }} transition={{ duration: 0.8 }} className="absolute top-60 md:right-40 md:top-135 bg-[#3C467B] text-white px-4 py-2 md:px-6 md:py-3 rounded-md  md:text-2xl  md:text-lg font-semibold ">Contact Us</motion.button>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: "url('/hero.jpg')" }}
          ><div className="absolute top-0 left-0 w-full h-full bg-black/35"></div>
            <motion.h1 initial={{ opacity: 0,y:60}} animate={{opacity: 1, y:0 }} transition={{ duration: 1.0 }}  className="absolute  top-20 md:right-60 md:top-62 text-white text-4xl  md:text-[68px] font-bold  p-4 rounded">
              Innovating for a  
            </motion.h1>
            <motion.h1 initial={{ opacity: 0,y:60}} animate={{opacity: 1, y:0 }} transition={{ duration: 1.0 }} className="absolute top-30 md:right-17 md:top-84 text-white text-4xl md:text-[68px] font-bold  p-4 rounded">
            <span className="text-[#3C467B]" >Smarter</span>,Sustainable
            </motion.h1>
            <motion.h1 initial={{ opacity: 0,y:60}} animate={{opacity: 1, y:0 }} transition={{ duration: 1.0 }} className="absolute top-40 md:right-110 md:top-104 text-white text-4xl md:text-[68px] font-bold  p-4 rounded">
            Tomorrow
            </motion.h1>
            
            <motion.button initial={{ opacity: 0,y:60}} animate={{opacity: 1, y:0 }} transition={{ duration: 0.8 }} className="absolute top-60 md:right-40 md:top-135 bg-[#3C467B] text-white px-4 py-2 md:px-6 md:py-3 rounded-md  md:text-2xl  md:text-lg font-semibold ">Contact Us</motion.button>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: "url('/hero.jpg')" }}
          ><div className="absolute top-0 left-0 w-full h-full bg-black/35"></div>
            <motion.h1 initial={{ opacity: 0,y:60}} animate={{opacity: 1, y:0 }} transition={{ duration: 1.0 }}  className="absolute  top-20 md:right-60 md:top-62 text-white text-4xl  md:text-[68px] font-bold  p-4 rounded">
              Innovating for a  
            </motion.h1>
            <motion.h1 initial={{ opacity: 0,y:60}} animate={{opacity: 1, y:0 }} transition={{ duration: 1.0 }} className="absolute top-30 md:right-17 md:top-84 text-white text-4xl md:text-[68px] font-bold  p-4 rounded">
            <span className="text-[#3C467B]" >Smarter</span>,Sustainable
            </motion.h1>
            <motion.h1 initial={{ opacity: 0,y:60}} animate={{opacity: 1, y:0 }} transition={{ duration: 1.0 }} className="absolute top-40 md:right-110 md:top-104 text-white text-4xl md:text-[68px] font-bold  p-4 rounded">
            Tomorrow
            </motion.h1>
            
            <motion.button initial={{ opacity: 0,y:60}} animate={{opacity: 1, y:0 }} transition={{ duration: 0.8 }} className="absolute top-60 md:right-40 md:top-135 bg-[#3C467B] text-white px-4 py-2 md:px-6 md:py-3 rounded-md  md:text-2xl  md:text-lg font-semibold ">Contact Us</motion.button>
          
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
