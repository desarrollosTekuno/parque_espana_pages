import Logo from "@/assets/icons/Logo.webp";
import { motion } from "framer-motion";

export default function Spinner() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-17.5 bottom-0 left-0 right-0 flex items-center justify-center bg-black/80 z-40 overflow-hidden"
    >
      <motion.img
        src={Logo}
        alt="Cargando"
        className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}