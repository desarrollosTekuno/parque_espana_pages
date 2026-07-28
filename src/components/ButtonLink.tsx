import { Link } from "react-router-dom";
import { useState } from "react";
import type { ComponentType } from "react";

type ButtonSize = "sm" | "md" | "lg" | "xl";
type Breakpoint = "base" | "sm" | "md" | "lg" | "xl";
type ResponsiveSize = Partial<Record<Breakpoint, ButtonSize>>;

interface ButtonProps {
  text: string;
  color: string;
  to: string;
  size?: ButtonSize | ResponsiveSize;
  hover?: boolean;
  hoverColor?: string;
  icon?: ComponentType<{ className?: string }>;
}

// Todas las clases están escritas completas y literales
// para que Tailwind las detecte al escanear el código.
const sizeClasses: Record<Breakpoint, Record<ButtonSize, string>> = {
  base: {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-xl",
    lg: "px-10 py-3 text-xl rounded-xl",
    xl: "px-14 py-4 text-2xl rounded-xl",
  },
  sm: {
    sm: "sm:px-4 sm:py-2 sm:text-sm sm:rounded-lg",
    md: "sm:px-6 sm:py-3 sm:text-base sm:rounded-xl",
    lg: "sm:px-10 sm:py-3 sm:text-xl sm:rounded-xl",
    xl: "sm:px-14 sm:py-4 sm:text-2xl sm:rounded-xl",
  },
  md: {
    sm: "md:px-4 md:py-2 md:text-sm md:rounded-lg",
    md: "md:px-6 md:py-3 md:text-base md:rounded-xl",
    lg: "md:px-10 md:py-3 md:text-xl md:rounded-xl",
    xl: "md:px-14 md:py-4 md:text-2xl md:rounded-xl",
  },
  lg: {
    sm: "lg:px-4 lg:py-2 lg:text-sm lg:rounded-lg",
    md: "lg:px-6 lg:py-3 lg:text-base lg:rounded-xl",
    lg: "lg:px-10 lg:py-3 lg:text-xl lg:rounded-xl",
    xl: "lg:px-14 lg:py-4 lg:text-2xl lg:rounded-xl",
  },
  xl: {
    sm: "xl:px-4 xl:py-2 xl:text-sm xl:rounded-lg",
    md: "xl:px-6 xl:py-3 xl:text-base xl:rounded-xl",
    lg: "xl:px-10 xl:py-3 xl:text-xl xl:rounded-xl",
    xl: "xl:px-14 xl:py-4 xl:text-2xl xl:rounded-xl",
  },
};

function resolveSizeClasses(size: ButtonSize | ResponsiveSize): string {
  const normalized: ResponsiveSize =
    typeof size == "string" ? { base: size } : size;

  return (Object.entries(normalized) as [Breakpoint, ButtonSize][])
    .map(([breakpoint, s]) => sizeClasses[breakpoint][s])
    .join(" ");
}

export default function Button({
  text,
  color,
  to,
  size = "md",
  hover = false,
  hoverColor,
  icon: Icon,
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const backgroundColor = hover && isHovered && hoverColor ? hoverColor : color;

  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center gap-1 font-semibold transition-colors ${resolveSizeClasses(size)}`}
      style={{ backgroundColor }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
      {Icon && <Icon className="h-4 w-4" />}
    </Link>
  );
}