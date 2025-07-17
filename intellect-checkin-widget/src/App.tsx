import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import EmojiCheckinWidget from './components/EmojiCheckinWidget';

function App() {
  const [showWidget, setShowWidget] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWidget(true);
    }, 1000); // show after 1 second

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowWidget(false); // AnimatePresence will handle unmount
  };
    const handleLaunchWidget = () => {
    setShowWidget(true);
  };


  return (
    <div className="min-h-screen bg-gray-100 relative">
      {/* Main Content */}
      <div className="p-8">
        <h1 className="text-3xl font-bold text-gray-800">intellect</h1>
        <p className="text-gray-600 mt-2">This is your dashboard or homepage content.</p>
        <button
          onClick={handleLaunchWidget}
          className="mt-6 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-blue-400 transition"
        >
          Launch Check-in Widget
        </button>
      </div>

      {/* Overlay and Widget */}
      <AnimatePresence>
        {showWidget && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <EmojiCheckinWidget onClose={handleClose} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
