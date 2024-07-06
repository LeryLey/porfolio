import { motion } from "framer-motion";
const Contact = () => {
  return (
    <section id="contact">
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-32 gap-4  h-auto">
        {/* right side  */}
        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-between md:space-y-0 space-y-3"
        >
          <div>
            <h2 className="text-3xl tracking-wider txt-gradient font-medium">
              Contact <br />{" "}
              <span>
                Me
                <span className="w-11 flex h-px rounded-full bg-gray-400"></span>
              </span>
            </h2>
          </div>
          <div>
            <span className="text-gray-500 uppercase text-sm font-medium">
              Contact Info: +885 883 966 290
            </span>
          </div>
          <div className="space-x-3">
            <span className="icon">
              <ion-icon name="logo-facebook"></ion-icon>
            </span>
            <span className="icon">
              <ion-icon name="logo-twitter"></ion-icon>
            </span>
            <span className="icon">
              <ion-icon name="logo-instagram"></ion-icon>
            </span>
            <span className="icon">
              <ion-icon name="logo-twitch"></ion-icon>
            </span>
          </div>
        </motion.div>
        {/* left side  */}
        <motion.form
          whileInView={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-5 md:w-60 w-80 "
        >
          <div className="">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              className="bg-transparent border-2 rounded-md py-1 px-2 border-gray-400 outline-none text-gray-200 w-full focus:border-blue-500"
            />
          </div>
          <div>
            <textarea
              name="message"
              id="message"
              rows={7}
              className="w-full bg-transparent border-2 rounded-md border-gray-400 outline-none focus:border-blue-500 p-2 text-gray-200"
              placeholder="Messages"
            ></textarea>
          </div>
          <div className=" space-x-3 flex">
            <button
              type="button"
              className="bg-blue-500 rounded-md px-3 py-1 border-gray-700 border-2  w-full bg-gradient-to-r from-blue-600  to-red-500 text-white "
            >
              Send
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
