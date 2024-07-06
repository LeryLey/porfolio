import { motion } from "framer-motion";
import { skills } from "../../constants";
const Skills = () => {
  return (
    <section id="skills" className="flex-col md:h-screen h-auto md:py-0 py-20">
      <div className="mb-10 space-y-1">
        <motion.h2
          whileInView={{ scale: 1, opacity: 1 }}
          animate={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="txt-gradient text-3xl font-medium tracking-wider "
        >
          Skills
        </motion.h2>
        <span className="w-20 flex h-px rounded-full bg-gray-400"></span>
      </div>
      {/* card  */}
      <div className="flex justify-center items-center flex-wrap gap-4">
        {skills.map((skill, index) => (
          <motion.article
            whileInView={{ scale: 1, opacity: 1 }}
            animate={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            key={index}
            className="bg-primary hover:bg-white/10 w-72 rounded-md p-4  space-y-2 "
          >
            <span className="text-2xl text-gray-300 bg-inherit rounded-full justify-center items-center  h-10 w-10 flex">
              {skill.icon}
            </span>
            <h2 className="text-gray-300 text-lg font-medium">{skill.title}</h2>
            <p className="w-auto text-gray-500">{skill.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
