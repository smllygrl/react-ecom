import { useContext } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState("");
  const data = { product, setProduct };
};

export default ProductProvider;

const handleClick = (click) => {
  setProduct();
};
