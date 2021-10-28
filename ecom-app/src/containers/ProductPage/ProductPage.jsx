import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import firestore from "../../services/firestore/firestore";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const cleanRecord = (docSnapshot) => ({
    id: docSnapshot.id,
    ...docSnapshot.data(),
  });

  const findProduct = async (id) => {
    const coldRef = firestore.collection("products");
    const docRef = coldRef.doc(id);
    const docSnap = await docRef.get();
    return cleanRecord(docSnap);
  };

  useEffect(() => {
    const populatePage = async () => {
      const data = await findProduct(id);
      setProduct(data);
    };

    populatePage();
  }, [id]);

  if (!product) {
    console.log(`Product with id: ${id} not found`);
    return <h1>Product with id: {id} not found</h1>;
  }

  return (
    <div>
      <h2>{product.itemName}</h2>
      <img src={product.image} alt="To be added to database" />
      <p>Price: {product.price}</p>
      <p>Only {product.quantityAll} items left!</p>
    </div>
  );
};
export default ProductPage;
