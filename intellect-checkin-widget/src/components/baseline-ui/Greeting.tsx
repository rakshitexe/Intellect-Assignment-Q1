import { motion } from "framer-motion";

// A functional component that displays animated greeting text
export const GreetingStep = () => {
  return (
    // Container motion.div with parent animation variants
    <motion.div
      className="text-center"
      initial="hidden"                // Initial animation state
      animate="visible"              // Animate to "visible" when component mounts
      variants={{
        hidden: {},                  // No styles defined for hidden state at container level
        visible: {
          transition: { staggerChildren: 0.9 }, // Delay between each child animation
        },
      }}
    >
      {/* First animated line of greeting */}
      <motion.p
        className="text-3xl font-bold text-gray-800 mb-4"
        variants={{
          hidden: { opacity: 0, y: 40, scale: 0.9 }, // Start faded, slightly below, and scaled down
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 100, damping: 10 }, // Smooth spring animation
          },
        }}
      >
        Hello there! 😊
      </motion.p>

      {/* Second animated message */}
      <motion.p
        className="text-xl text-gray-700 mb-3"
        variants={{
          hidden: { opacity: 0, y: 40 }, // Fade in and rise from below
          visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 90, damping: 12 },
          },
        }}
      >
        Glad to see you here.
      </motion.p>

      {/* Third animated message */}
      <motion.p
        className="text-base text-[#1c8cf2]"
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
