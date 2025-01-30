import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary" | "danger"; // Different styles
  disabled?: boolean;
}




const Button: React.FC<ButtonProps> = ({ label, onClick, variant = "primary", disabled = false }) => {
  const getButtonClass = () => {
    switch (variant) {
      case "secondary":
        return "bg-gray-500 hover:bg-gray-600";
      case "danger":
        return "bg-red-500 hover:bg-red-600";
      default:
        return "bg-blue-500 hover:bg-blue-600";
    }
  };

  return (
    <button
      className={`text-white px-4 py-2 rounded ${getButtonClass()} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;