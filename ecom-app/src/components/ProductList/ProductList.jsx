// ITEMS FOR THE PRODUCT GRID

import { useState, useEffect } from "react";
import firestore from "../../services/firestore/firestore";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    // Below is our retrieving promise
    const getProducts = async () => {
      // Where to access products
      const colref = firestore.collection("products");
      console.log(`Collection Reference: ${colref}`);
      // Please access the products
      const snapshot = await colref.get();
      console.log(`Collection Snapshot: ${snapshot}`);
      // Please make the data accessed human readable
      const cleaned = snapshot.docs.map((doc) => ({
        id: doc.id,
        // I'm not sure what the below does
        ...doc.data(),
      }));
      console.log(cleaned);
      // Call the setter, and set the products
      setProducts(cleaned);
    };

    // Call the function just created
    getProducts();
  }, []);

  return (
    <div className="App">
      {products &&
        products.map((products) => (
          <div key={products.id}>
            {/* What is this below? */}{" "}
            <h3 className="products__name">{products.itemName}</h3>
            {/* GET THE ID FROM THE IMAGE CLICK TO GO TO PRODUCT PAGE */}
            {/* The link works, but the page does not have the ID of the item */}
            <Link to="/products/:" {...products.id}>
              <img
                src={products.image}
                alt="To be added to database"
                className="products__image"
              />
            </Link>
            <p className="products__price">price: ${products.pricePerUnit}</p>
          </div>
        ))}
    </div>
  );
};

export default ProductList;
