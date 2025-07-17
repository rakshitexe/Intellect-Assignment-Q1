import { motion } from "framer-motion";

export const GreetingStep = () => {
  return (
    <motion.div
      className="text-center"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.9 },
        },
      }}
    >
      <motion.p
        className="text-3xl font-bold text-gray-800 mb-4"
        variants={{
          hidden: { opacity: 0, y: 40, scale: 0.9 },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 100, damping: 10 },
          },
        }}
      >
        Hello there! 😊
      </motion.p>

      <motion.p
        className="text-xl text-gray-700 mb-3"
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 90, damping: 12 },
          },
        }}
      >
        Glad to see you here.
      </motion.p>

      <motion.p
        className="text-base text-blue-600"
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 80, damping: 14 },
          },
        }}
      >
        Let’s take a moment for yourself.
      </motion.p>
    </motion.div>
  );
};
