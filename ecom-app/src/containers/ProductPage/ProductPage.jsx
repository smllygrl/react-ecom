import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import firestore from "../../services/firestore/firestore";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(false);

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

  // update DB w/ count?
  useEffect(() => {
    const quantity = async () => {
      const partial = await findProduct(id);

      setQuantity(id.quantityAll - count);
    };

    return () => {
      console.log("(Unmount) Current value of count", count);
    };
  }, [count]);

  useEffect(() => {
    const populatePage = async () => {
      const data = await findProduct(id);
      setProduct(data);
    };

    populatePage();
  }, [id]);

  const toggleFavorite = async (product) => {
    const partial = {
      favorite: !product.favorite,
    };
    await updateProduct(product.id, partial);
    findProduct();
  };

  const setQuantity = async (n) => {
    const partial = {
      quantityAll: !product.quantityAll,
    };
    await updateProduct(product.id, partial);
    findProduct();
  };

  if (!product) {
    console.log(`Product with id: ${id} not found`);
    return <h1>Product with id: {id} not found</h1>;
  }

  const updateProduct = async (id, partial) => {
    const colRef = firestore.collection("products");
    const docRef = colRef.doc(id);
    await docRef.update(partial);
  };

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

        <button onClick={() => setCount(count + 1)} {...setQuantity}>
          +
        </button>
        <p>In cart: {count}</p>
        <button onClick={() => setCount(count - 1)} {...setQuantity}>
          -
        </button>
        <button
          type="checkbox"
          variant="outline-success"
          checked={product.isFavorite}
          onClick={() => toggleFavorite(product)}
        >
          {product.favorite ? "I am a favourite!" : "Add to Favourites"}
        </button>
      </div>
    </div>
  );
};
export default ProductPage;
