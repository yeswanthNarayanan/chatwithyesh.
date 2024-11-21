import { motion } from 'framer-motion';
import { MessageSquare, Image, Bot, Zap } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: "Start the Bot",
    description: "Scan the QR code or search for the bot on Telegram"
  },
  {
    icon: MessageSquare,
    title: "Send a Message",
    description: "Start a conversation with natural language"
  },
  {
    icon: Image,
    title: "Share Images",
    description: "Send any image for detailed AI analysis"
  },
  {
    icon: Zap,
    title: "Get Instant Results",
    description: "Receive AI-powered responses in real-time"
  }
];

export function HowToUse() {
  return (
    <div className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/30" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.1),transparent_50%)]"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            How to Use
          </h2>
          <p className="text-xl text-gray-400">Get started with our AI bot in just a few steps</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-8 bg-white/5 rounded-2xl backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 blur" />
                  <div className="relative bg-black rounded-full p-4 w-16 h-16 mx-auto">
                    <Icon className="w-8 h-8 text-blue-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mt-6 mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}