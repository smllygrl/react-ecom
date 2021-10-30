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
    <div className="indivProduct">
      <div className="indivProduct__left">
        <h2 className="indivProduct__title">{product.itemName}</h2>
        <img
          className="indivProduct__image"
          src={product.image}
          alt="To be added to database"
        />
      </div>
      <div className="indivProduct__right">
        <p className="indivProduct__price">Price: ${product.pricePerUnit}</p>
        <p className="indivProduct__quantity">
          {"  "}
          Only {product.quantityAll} items left!
        </p>
      </div>
    </div>
  );
};
export default ProductPage;
