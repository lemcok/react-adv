import { useContext } from "react"
import { ProductContext } from "./ProductCard"
import s from "../styles/styles.module.css"


export const ProductButtons = () => {
  const { increaseBy, counter } = useContext( ProductContext )
  return (
    <div className={s.buttonsContainer}>
      <button 
        className={s.buttonMinus}
        onClick={ () => increaseBy( - 1) }
      > - </button>
      
      <div className={s.countLabel}> { counter } </div>

      <button 
        className={s.buttonAdd}
        onClick={() => increaseBy( + 1)}
      > + </button>
    </div>
  )
}