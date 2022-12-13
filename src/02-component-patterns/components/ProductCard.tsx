import { createContext } from 'react';
import { ProductCardProps, ProductContextProps } from '../interfaces';
import { useProduct } from '../hooks/useProduct';
import s from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();
  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={s.productCard}>{ children }</div>
    </Provider>
  );
};
