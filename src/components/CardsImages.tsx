import { motion } from "framer-motion";
import { AnimHoverScale, AnimStaggerItem } from "./Animations";

export default function Card({ name }: any) {
  return (
    <AnimStaggerItem>
     <AnimHoverScale className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group">
        <div className="w-full h-full bg-gray-300 " />
        <motion.div
          className="absolute inset-0 bg-black/40 flex items-end justify-center p-4"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-white text-2xl font-bold text-center">{name}</p>
        </motion.div>
      </AnimHoverScale>
    </AnimStaggerItem>
  );
}