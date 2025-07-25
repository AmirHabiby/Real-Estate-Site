import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About{" "}
        <span className=" underline underline-offset-4 decoration-1 under font-light">
          Our Brand
        </span>{" "}
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Passionate About Properties, Dedicated to Your Vision
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          src={assets.brand_img}
          alt=""
          className="w-full sm:w-1/2 max-w-lg"
        />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div className=" ">
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Years of Excellence</p>
            </div>
            <div className=" ">
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p>Projects Completed</p>
            </div>
            <div className=" ">
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p>Mn. Sq. Ft. Delivered</p>
            </div>
            <div className=" ">
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>
          <p className="my-10 max-w-lg">
            Welcome to My website, where innovation meets simplicity. I'm
            currently working to bring you something exciting and valuable.
            Whether you're looking for solutions, inspiration, or just
            exploring, you've come to the right place. This placeholder text
            serves as a temporary introduction. Stay tuned for updates, and
            thank you for your patience and interest. contact me with any
            questions. I'm building something great—and I can’t wait to share it
            with you very soon.
          </p>
          <button className="bg-gray-500 text-white px-8 py-2 rounded btn-effect-20">
            Learn more
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
