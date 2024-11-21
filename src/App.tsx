import { Hero } from './components/Hero';
import { HowToUse } from './components/HowToUse';
import { Footer } from './components/Footer';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?q=80&w=2532&auto=format&fit=crop')] bg-cover bg-center opacity-5" />
      <main className="relative">
        <Hero />
        <HowToUse />
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent" />
          <motion.h2 
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
          >
            Connect with Our Bot
          </motion.h2>
          <motion.div 
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 p-12 rounded-2xl backdrop-blur-lg border border-white/10 inline-block relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
            <img
              src="YOUR_QR_CODE_URL_HERE"
              alt="Telegram Bot QR Code"
              className="w-64 h-64 mx-auto relative z-10"
            />
            <p className="mt-6 text-gray-400 relative z-10">Scan to start chatting</p>
          </motion.div>
        </motion.div>
        <Footer />
      </main>
    </div>
  );
}

export default App;