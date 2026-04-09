import { type ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function Button({
  variant = "primary",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-10 py-4 text-lg font-bold transition-all";
  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-primary-container text-on-primary-container hover:shadow-primary-glow",
    secondary:
      "border border-outline-variant/30 text-on-surface hover:bg-surface-container-high",
  };

  return (
    <button
      type={type}
      className={`${base} ${variants[variant]} ${className}`.trim()}
      {...props}
    />
  );
}
