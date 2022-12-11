import { createContext, ReactElement, useContext } from "react"
import s from "../styles/styles.module.css"
import { useProduct } from "../hooks/useProduct"
import no_img from "../assets/no-image.jpg"
import { Product } from "../interfaces"

interface props {
  product: Product,
  children?: ReactElement | ReactElement[]
}

interface ProductContextProps {
  counter: number,
  increaseBy: ( factor:number ) => void,
  product: Product
}

const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext;


export const ProductImage = ({ img = '' }) => {
  const { product } = useContext( ProductContext )
  let imgToShow: string;

  if (img) {
    imgToShow = img
  }else if (product.img){
    imgToShow = product.img
  }else {
    imgToShow = no_img
  }

  return <img className={s.productImg} src={ imgToShow } alt="Product Image" />
}

export const ProductTitle = ({ title }: {title?:string}) => { //si los props son simples, si es mas complicado mejor usar una interface
  const {product} =useContext( ProductContext )
  return <span className={s.productDescription}>{ title ? title : product.title }</span>
}

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

export const ProductCard = ({ product, children }:props) => {
  const { counter, increaseBy } = useProduct()
  return (
    <Provider value={{
      counter,
      increaseBy,
      product
    }}>
      <div className={s.productCard}>
        { children }
        {/* <ProductImage  img={ product.img }/>
        <ProductTitle title={ product.title } />
        <ProductButtons increaseBy={increaseBy} counter={counter} /> */}
      </div>
    </Provider>
  )
}

ProductCard.Title = ProductTitle
ProductCard.Image = ProductImage
ProductCard.Buttons = ProductButtons