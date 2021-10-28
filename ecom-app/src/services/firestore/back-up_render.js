function App() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      const colref = firestore.collection("products");
      console.log(`Collection Reference: ${colref}`);
      const snapshot = await colref.get();
      console.log(`Collection Snapshot: ${snapshot}`);
      const cleaned = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(cleaned);
      setProducts(cleaned);
    };
    getProducts();
    console.log(products);
  }, []);

  return (
    <div className="App">
      {products &&
        products.map((product) => (
          <p key={product.id}>
            {" "}
            name:{product.itemName}, image:{product.image}, price:
            {product.pricePerUnit}
          </p>
        ))}
    </div>
  );
}

export default App;
