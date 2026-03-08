"use client";
import { url } from "inspector";
import Link from "next/dist/client/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import slider from "./Heroslider/page";
import Heroslider from "./Heroslider/page";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();
  const MotionImage = motion(Image);
  const [open, setOpen] = useState(false);
  return (
    <div>
      <nav className="w-full bg-white sticky top-0 z-50 shadow-md">
        <div className="flex items-center justify-between px-5 md:mx-10 h-18">
          <div className="flex justify-center items-center px-5 md:mx-10">
            <Image
              src="/navbarlogo.png"
              width={200}
              height={100}
              alt="navbarlogo"
            />
          </div>
          <div className="hidden md:flex items-center gap-4 font-medium text-lg px-5 mx-10 text-[#3C467B]">
            <Link href="#home">HOME</Link>
            <Link href="#about">ABOUT</Link>
            <Link href="#business">OUR BUSINESS</Link>
            <Link href="#contact">CONTACT</Link>
          </div>

          <button className="md:hidden " onClick={() => setOpen(!open)}>
            <Image src="/menu.png" width={30} height={30} alt="menuicon" />
          </button>

          {open && (
            <div
              className={` md:hidden flex  flex-col fixed top-16 right-0 p-5  bg-white gap-4 font-bold text-lg px-5  text-[#3C467B] ${
                open
                  ? "opacity-100 translate-y-0 max-h-96"
                  : "opacity-0 -translate-y-3 max-h-0"
              }`}
            >
              <Link href="#home">HOME</Link>
              <Link href="#about">ABOUT</Link>
              <Link href="#business">OUR BUSINESS</Link>
              <Link href="#contact">CONTACT</Link>
            </div>
          )}
        </div>
      </nav>
      <Heroslider />
      <section
        id="about"
        className="w-full h-[50vh] md:h-[100vh] flex items-center justify-center bg-amber-50"
      >
        <div className="flex flex-row items-center justify-center gap-10 h">
          <div>
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
                className=" mb-4 md:mb-6 text-5xl md:text-6xl text-center font-bold text-[#3C467B]"
              >
                Who We Are
              </motion.h1>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className="bg-[#3C467B] w-20 mb-4 md:mb-6 rounded-2xl relative left-35 md:left-50 h-1 "
            ></motion.div>
            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className="w-[350px] md:w-[500px] text-center text-[#3C467B]"
            >
              Founded in 2001 as a garment manufacturer, Goodway has evolved
              into a diversified group with operations spanning technology,
              biopolymers, and wellness. What began as a family run apparel
              business in Tiruppur, India, now extends to international
              operations with a presence in Australia. Our journey is about
              innovation, resilience, and responsibility toward the planet and
              people.
            </motion.p>
          </div>

          <MotionImage
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            src="/a4.png"
            width={500}
            height={500}
            alt="a4"
            className="relative left-20 bottom-14 hidden md:block"
          ></MotionImage>
        </div>
      </section>
      <section className="w-full h-[50vh] md:h-[80vh] flex items-center justify-center bg-[#3C467B]">
        <div className="flex flex-row items-center justify-center gap-10 h">
          <MotionImage
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            src="/E1.png"
            width={450}
            height={450}
            alt="E1"
            className="absolute left-130 opacity-20 hidden md:block"
          ></MotionImage>
          <MotionImage
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            src="/a3.png"
            width={500}
            height={500}
            alt="a3"
            className="relative z-40 bottom-5 hidden md:block"
          ></MotionImage>

          <div>
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
                className=" mb-4 md:mb-6 text-5xl md:text-6xl text-center font-bold text-white"
              >
                What We Do
              </motion.h1>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className="bg-white w-20 mb-4 md:mb-6 rounded-2xl relative left-35 md:left-50 h-1 "
            ></motion.div>
            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: "easeOut", delay: 0.2}}
              viewport={{ once: true, amount: 0.5 }}
              className="w-[350px] md:w-[500px] text-center text-white"
            >
              Our integrated ecosystem connects productivity, sustainability,
              and wellness. Every initiative we undertake is designed to improve
              performance, reduce waste, and promote better living for
              businesses, people, and the planet.
            </motion.p>
          </div>
        </div>
      </section>
      <section  className="w-full h-[50vh] md:h-[80vh] flex items-center justify-center bg-amber-50">
        <div className="flex flex-row items-center justify-center gap-10 h">
          <div>
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
                className=" mb-4 md:mb-6 text-5xl md:text-6xl text-center font-bold text-[#3C467B]"
              >
                Goodway
              </motion.h1>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className="bg-[#3C467B] w-20 mb-4 md:mb-6 rounded-2xl relative left-35 md:left-50 h-1 "
            ></motion.div>
            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className="w-[350px] md:w-[500px] text-center text-[#3C467B]"
            >
              GW Impex is our textile engine delivering export-grade fabrics and
              garments with copper carbon functional finishing that underpins
              Vibeaid’s performance story. We combine disciplined manufacturing
              with sustainability pathways to move from prototype to scale
              without losing quality or speed.
              <span>
                Functional finishing platform: copper carbon for hygiene,
                comfort, and wearability; options for moisture, odor, and
                thermoregulation.
              </span>
            </motion.p>
          </div>

          <MotionImage
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            src="/a4.png"
            width={500}
            height={500}
            alt="a4"
            className="relative left-20 bottom-14 hidden md:block"
          ></MotionImage>
        </div>
      </section>
      <section id="#business" className="w-full h-[50vh] md:h-[80vh] flex items-center justify-center bg-[#3C467B]">
        <div className="flex flex-row items-center justify-center gap-10 h">
          <MotionImage
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            src="/E2.png"
            width={450}
            height={450}
            alt="E2"
            className="absolute left-120 opacity-20 hidden md:block"
          ></MotionImage>
          <MotionImage
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            src="/a5.png"
            width={500}
            height={500}
            alt="a5"
            className="relative z-40 left-10 bottom-5 hidden md:block"
          ></MotionImage>

          <div className="flex items-center justify-center flex-col">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
                className=" mb-4 md:mb-6 text-5xl md:text-6xl text-center font-bold text-white"
              >
                Goodway Biopolymers
              </motion.h1>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className="bg-white w-20 mb-4 md:mb-6 rounded-2xl relative left-5 md:left-5 h-1 "
            ></motion.div>
            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className="w-[350px] md:w-[500px]  text-center text-white"
            >
              Goodway Biopolymers produces eco-friendly, biodegradable garment
              accessories and packaging materials that reduce plastic waste and
              support a circular economy. Our research driven approach helps
              global brands transition toward sustainable alternatives without
              compromising quality or design.
            </motion.p>
          </div>
        </div>
      </section>
      <section className="w-full h-[50vh] md:h-[80vh] flex items-center justify-center bg-amber-50">
        <div className="flex flex-row items-center justify-center gap-10 ">
          <div>
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
                className=" mb-4 md:mb-6 text-5xl md:text-6xl text-center font-bold text-[#3C467B]"
              >
                GudBiz
              </motion.h1>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className="bg-[#3C467B] w-20 mb-4 md:mb-6 rounded-2xl relative left-35 md:left-50 h-1 "
            ></motion.div>
            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className="w-[350px] md:w-[500px] text-center text-[#3C467B]"
            >
              GudBiz transforms how enterprises manage productivity and
              profitability. It provides AI-driven automation for performance
              tracking, expense management, replenishment, and supply chain
              optimization all accessible 24×7 on any device.
            </motion.p>
          </div>

          <MotionImage
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            src="/a7.png"
            width={500}
            height={500}
            alt="a7"
            className="relative left-20 bottom-14 hidden md:block"
          ></MotionImage>
        </div>
      </section>

      <section className="w-full h-[50vh] md:h-[80vh] flex items-center justify-center bg-[#3C467B]">
        <div className="flex flex-row items-center justify-center gap-10 h">
          <MotionImage
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            src="/E2.png"
            width={450}
            height={450}
            alt="E2"
            className="absolute left-130 opacity-20 hidden md:block"
          ></MotionImage>
          <MotionImage
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            src="/a6.png"
            width={500}
            height={500}
            alt="a6"
            className="relative z-40  bottom-5 hidden md:block"
          ></MotionImage>

          <div className="flex items-center justify-center flex-col">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
                className=" mb-4 md:mb-6 text-5xl md:text-6xl text-center font-bold text-white"
              >
                Vibeaid
              </motion.h1>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className="bg-white w-20 mb-4 md:mb-6 rounded-2xl relative left-5 md:left-5 h-1 "
            ></motion.div>
            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className="w-[350px] md:w-[500px]  text-center text-white"
            >
              Vibeaid is dedicated to holistic health through natural
              supplements and wellness tools that enhance energy, reduce stress,
              and support balanced living. We offer safe, certified, and
              research backed products designed to promote wellness at work and
              at home all rooted in ethical sourcing and a commitment to
              responsible, science based well being.
            </motion.p>
          </div>
        </div>
      </section>
      <section className="w-full h-[50vh] md:h-[80vh] flex items-center justify-center bg-amber-50">
        <div className="flex flex-row items-center justify-center gap-10 ">
          <div>
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
                className=" mb-4 md:mb-6 text-5xl md:text-6xl text-center font-bold text-[#3C467B]"
              >
                Our Journey
              </motion.h1>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className="bg-[#3C467B] w-20 mb-4 md:mb-6 rounded-2xl relative left-35 md:left-50 h-1 "
            ></motion.div>
            <motion.ul
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className="w-[350px] md:w-[500px] 
             space-y-5 text-center list-disc text-[#3C467B]"
            >
              <li>2001: Goodway KKnits – Apparel manufacturing begins</li>
              <li>
                2009: GW Impex Pvt. Ltd. – Expands into e-commerce (Goodway,
                Gkidz, Lil Orchids)
              </li>
              <li>2016: GudBiz founded – Tech-driven B2B SaaS solutions</li>
              <li>2020+: Diversification into Biopolymers and Wellnes</li>
              <li>2025: Expanding operations to Australia</li>
            </motion.ul>
          </div>

          <MotionImage
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            src="/a8.png"
            width={400}
            height={400}
            alt="a8"
            className="relative left-20  hidden md:block"
          ></MotionImage>
        </div>
      </section>

      <section id="contact" className="w-full h-full   pt-10 pb-10 text-center md:h-[80vh] flex items-center justify-center bg-[#3C467B]">
        <div className="flex justify-center items-center flex-col">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            className=" mb-4 md:mb-6 text-5xl md:text-6xl text-center font-bold text-white"
          >
            Contact
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-[350px] md:w-[500px]  text-center text-white"
          >
            With our presence expanding to Australia, we aim to bring
            sustainable and data driven innovation closer to global markets. Our
            dual operations ensure agility, customer proximity, and continuous
            support.
          </motion.p>
          <div className="flex flex-col  md:flex-row gap-20 mt-10">
            <div>
              <motion.ul
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
                className="list-disc pl-6 space-y-4 text-white"
              >
                {/* Main point 1 */}
                <li>
                  <span className="font-semibold">Goodway Indian</span>
                  <ul className="list pl-6 mt-2 space-y-1 text-white">
                    <li>Goodway Group</li>
                    <li>NO,1-B,Kurinji Nagar Extn,Sheriff</li>
                    <li>Colony,Tiruppur - 641604</li>
                  </ul>
                </li>

                {/* Main point 2 */}
                <li>
                  <span className="font-semibold">Contact Cards:</span>
                  <ul className="list pl-6 mt-2 space-y-1 text-white">
                    <li>+91 9842221335</li>
                    <li>Suresh@goodway.international</li>
                  </ul>
                </li>
              </motion.ul>
            </div>
            <div>
              <motion.ul
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
                className="list-disc pl-6 space-y-4 text-white"
              >
                {/* Main point 1 */}
                <li>
                  <span className="font-semibold">Goodway International</span>
                  <ul className="list pl-6 mt-2 space-y-1 text-white">
                    <li>Office :-</li>
                    <li>Level 1, Suite 2 / 192-196 Belmore Rd.</li>
                    <li>River-wood, NSW 2210 Australia Postal</li>
                  </ul>
                </li>

                {/* Main point 2 */}
                <li>
                  <span className="font-semibold">Contact Cards:</span>
                  <ul className="list pl-6 mt-2 space-y-1 text-white">
                    <li>+61 434 606 329</li>
                    <li>Suresh@goodway.international</li>
                  </ul>
                </li>
              </motion.ul>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-[50vh] md:h-[18vh] flex items-center justify-center bg-white">
        <div className="md:flex  grid grid-cols-2 md:flex-row gap-8">
          <MotionImage
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            src="/f1.png"
            width={200}
            height={100}
            alt="Logo"
            className="relative md:left-20   md:block"
          ></MotionImage>

          <MotionImage
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            src="/f2.png"
            width={200}
            height={100}
            alt="Logo"
            className="relative md:left-20  md:block"
          ></MotionImage>
          <MotionImage
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            src="/f3.png"
            width={200}
            height={100}
            alt="Logo"
            className="relative md:left-20  md:block"
          ></MotionImage>
          <MotionImage
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            src="/f4.png"
            width={200}
            height={10}
            alt="Logo"
            className="relative md:left-20 top-5 md:block"

></MotionImage>
        </div>
      </section>
    </div>
  );
}
