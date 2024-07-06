import Profile from "/src/assets/profile.jpg";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <section id="home">
      <div className="text-center flex flex-col justify-center items-center">
        <motion.img
          whileInView={{
            scale: 1,
            opacity: 1,
          }}
          animate={{
            scale: 0,
            opacity: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          src={Profile}
          className="md:w-56 w-52 md:h-56 h-52 object-cover rounded-full mb-2 "
        />
        <motion.span
          whileInView={{
            scale: 1,
            opacity: 1,
          }}
          animate={{
            scale: 0,
            opacity: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="text-gray-500  md:text-base text-sm"
        >
          Web-developer
        </motion.span>
        <div className="space-y-4">
          <motion.h1
            whileInView={{
              scale: 1,
              opacity: 1,
            }}
            animate={{
              scale: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.5, delay: .3
            }}
            className="md:text-4xl text-3xl font-bold text-gray-300"
          >
            Hi, <span className="txt-gradient">I'm Lery</span>
          </motion.h1>
          <motion.p
            whileInView={{
              scale: 1,
              opacity: 1,
            }}
            animate={{
              scale: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.5,delay: .5
            }}
            className="text-gray-400 md:w-96 w-80  md:text-base"
          >
            I am a student at Build Bright University, I'm age 22 years old ,
            and I'm living in Cambodia.
          </motion.p>
          <motion.button
            whileInView={{
              scale: 1,
              opacity: 1,
            }}
            animate={{
              scale: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.5, delay: .5
            }}
            type="button"
            className="btn"
          >
            <a href="#contact">Contact Me</a>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Home;
