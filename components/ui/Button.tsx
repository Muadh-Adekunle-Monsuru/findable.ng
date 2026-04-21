// /components/ui/Button.tsx
"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent";
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  className = "",
}: Props) {
  const base = "px-6 py-3 rounded-xl font-medium";

  const styles = {
    primary: "bg-black text-white",
    secondary: "border border-gray-300",
    accent: "bg-blue-600 text-white",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.96 }}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}
