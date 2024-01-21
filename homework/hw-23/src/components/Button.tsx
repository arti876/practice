interface ButtonProps {
  children: string | JSX.Element;
  onClick?: () => void;
}

export default function Button({ children, ...props }: ButtonProps) {
  return <button {...props}>{children}</button>;
}
