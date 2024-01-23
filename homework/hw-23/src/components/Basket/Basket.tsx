import style from "./Basket.module.css";

interface BasketProps {
  children: number;
  onClick?: (value: any) => void;
}

export default function Basket({ children, onClick }: BasketProps) {
function click() {
  onClick(prev => prev+1)
}


  return (
    <div className={style["basket-container"]} onClick={click}>
      <span className={style["basket-count"]}>{children}</span>
    </div>
  );
}
