interface ButtonProps {
  children: string | JSX.Element;
  props?: () => void;
}

export default function Button({ children, ...props }: ButtonProps) {
  return <button {...props}>{children}</button>;
}

{
  /* <Button isActive={active === 'effect'} onClick={() => onChange('effect')}>Effect</Button> */
}
