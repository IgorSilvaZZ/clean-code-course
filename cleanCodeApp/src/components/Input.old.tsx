import { ReactNode } from "react";

interface InputProps {
  label?: string;
  leftIcon?: ReactNode;
  icon?: ReactNode;
  errorMessage?: string;
}

export const Input = ({ label, icon, leftIcon, errorMessage }: InputProps) => {
  return (
    <div>
      {label ? <label></label> : null}
      {leftIcon}
      <input type='text' />
      {icon}

      {errorMessage ? <p>{errorMessage}</p> : null}
    </div>
  );
};
