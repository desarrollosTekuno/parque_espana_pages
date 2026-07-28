import { motion } from "framer-motion";

interface AnimProps {
  children: React.ReactNode;
  className?: string;
}

/* Animación 1: Fade In Up - Suave y elegante */
export function AnimFadeUp({ children, className }: AnimProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] // cubic-bezier suave
      }}
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Animación 2: Fade In Scale - Suave y natural */
export function AnimScale({ children, className }: AnimProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.9, 
        ease: [0.34, 1.56, 0.64, 1] // cubic-bezier smooth
      }}
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Animación 3: Fade In Slide Right - Suave y fluida */
export function AnimSlideRight({ children, className }: AnimProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 1, 
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Animación 4: Stagger - variants para contenedor + hijos en cascada */
export const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

/* Animación 5: Hover Scale - Escala suave al pasar el mouse */
interface AnimHoverScaleProps extends AnimProps {
  scale?: number;
}

export function AnimHoverScale({ children, className, scale = 1.03 }: AnimHoverScaleProps) {
  return (
    <motion.div
      whileHover={{ scale }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Animación 6: Stagger Container - envuelve un grid/lista y anima sus hijos en cascada */
export function AnimStaggerContainer({ children, className }: AnimProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Animación 7: Stagger Item - hijo de AnimStaggerContainer, ya trae su propio variants */
export function AnimStaggerItem({ children, className }: AnimProps) {
  return (
    <motion.div variants={cardVariants} className={className}>
      {children}
    </motion.div>
  );
}