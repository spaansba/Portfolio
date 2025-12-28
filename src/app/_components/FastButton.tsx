import React, { ButtonHTMLAttributes, useRef } from "react";

type FastButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
};

/**
 * FastButton component that responds to mouseDown for faster interaction
 * while maintaining keyboard accessibility through onClick.
 * Prevents double execution when using mouse.
 */
const FastButton: React.FC<FastButtonProps> = ({
  onClick,
  className = "",
  children,
  disabled = false,
  type = "button",
  ...props
}) => {
  const mouseDownRef = useRef(false);

  const handleMouseDown = () => {
    if (onClick) {
      mouseDownRef.current = true;
      onClick();
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    if (mouseDownRef.current) {
      mouseDownRef.current = false;
      return;
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      type={type}
      onMouseDown={handleMouseDown}
      onClick={handleClick}
      className={className}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default FastButton;
