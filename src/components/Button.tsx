/**
 * Node modules
 */
import type { ButtonHTMLAttributes, FC, ReactNode } from "react";

/**
 * Interfaces
 */

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  classes?: string;
  variant?: "primary" | "secondary";
}

const Button: FC<ButtonProps> = ({ children, classes = '', variant = 'primary', ...rest }) => {
  return <button className={`btn ${variant} ${classes}`} {...rest}>{children}</button>;
};

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  classes?: string;
  variant?: 'primary' | 'secondary' | 'outline'
}

const IconButton: FC<IconButtonProps> = ({ children, variant = 'primary', classes = "", ...rest }) => {
  return <button className={`icon-btn ${variant} ${classes}`} {...rest}>{children}</button>;
};

export { Button, IconButton };
