/* eslint-disable @typescript-eslint/no-empty-object-type */
import { InputHTMLAttributes, LabelHTMLAttributes, ReactNode } from "react";

interface RootProps {
  children: ReactNode;
}

export const Root = ({ children }: RootProps) => {
  return <div>{children}</div>;
};

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export const Label = (props: LabelProps) => {
  return <label {...props} />;
};

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <span>{message}</span>;
};

interface IconProps {
  children: ReactNode;
}

export const Icon = ({ children }: IconProps) => {
  return <>{children}</>;
};

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {}

export const FormField = (props: FormFieldProps) => {
  return <input {...props} />;
};
