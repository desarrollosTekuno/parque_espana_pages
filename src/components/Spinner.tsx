import Logo1 from "@/assets/icons/Logo_pe1.webp";
import Logo2 from "@/assets/icons/Logo_pe2.webp";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function Spinner() {
  const location = useLocation();

  // Evaluamos si la ruta actual corresponde al parque 2
  const isParque2 = location.pathname.startsWith("/parque-espana-2");

  // Asignamos el logo correspondiente según la ruta
  const currentLogo = isParque2 ? Logo2 : Logo1;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 flex items-center justify-center bg-black/80 z-50 overflow-hidden"
    >
      <motion.img
        src={currentLogo}
        alt="Cargando"
        className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}