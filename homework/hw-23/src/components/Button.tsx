interface ButtonProps {
  className?: string;
  children: string | JSX.Element;
  onClick?: () => void;
}

export default function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button type="button" className={className} {...props}>
      {children}
    </button>
  );
}
