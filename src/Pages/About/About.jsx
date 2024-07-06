import Profile from "/src/assets/profile.jpg";
import { motion } from "framer-motion";
const About = () => {
  return (
    <section id="about" className="overflow-x-hidden">
      <div className="flex sm:flex-row flex-col justify-center items-center sm:space-x-10">
        <motion.img
          whileInView={{  opacity: 1, scale: 1 }}
          animate={{  opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
          src={Profile}
          className="md:w-56 w-52 md:h-56 h-52 object-cover rounded-full mb-2"
        />
        <motion.div
          whileInView={{  opacity: 1, scale: 1 }}
          animate={{  opacity: 0, scale: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="sm:text-start text-center "
        >
          <h2 className="md:text-4xl text-3xl txt-gradient font-medium">
            About Me
          </h2>
          <p className="md:text-base mt-2 md:w-96 w-80 text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo,
            voluptatibus Lorem ipsum dolor sit amet Lorem ipsum, dolor sit amet
            consectetur adipisicing..
          </p>
          <button type="button" className="btn mt-4 py-1 px-4">
            See More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
