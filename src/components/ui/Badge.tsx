import React from 'react';

export const Badge = ({ children, variant = "default" }: { children: React.ReactNode, variant?: "default" | "success" }) => {
  const styles = variant === "success" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800";
  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${styles}`}>
      {children}
    </span>
  );
};