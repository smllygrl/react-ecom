import Carousel from "react-bootstrap/Carousel";

const ProdCarousel = () => {
  // const [comingSoon, setcomingSoon] = useState(null);

  // useEffect(() => {
  //   // Below is our retrieving promise
  //   const getProducts = async () => {
  //     // Where to access products
  //     const colref = firestore.collection("comingSoon");
  //     console.log(`Collection Reference: ${colref}`);
  //     // Please access the products
  //     const snapshot = await colref.get();
  //     console.log(`Collection Snapshot: ${snapshot}`);
  //     // Please make the data accessed human readable
  //     const cleaned = snapshot.docs.map((doc) => ({
  //       id: doc.id,
  //       // I'm not sure what the below does
  //       ...doc.data(),
  //     }));
  //     console.log(cleaned);
  //     // Call the setter, and set the products
  //     setcomingSoon(cleaned);
  //   };
  //   // Call the function just created
  //   console.log({ comingSoon });
  //   getcomingSoon();
  // }, []);

  return (
    <div className="cara">
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="cara__image"
            height="400px"
            width="650px"
            src="https://cdn.shopify.com/s/files/1/0299/6479/5997/products/01_4b2c7d78-45ab-42b0-82ba-89af9fbe0ad1_720x.jpg?v=1631846148"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>Come for the poop</h5>
            <p>Stay for the novelty.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="cara__image"
            height="400px"
            width="650px"
            src="https://cdn.shopify.com/s/files/1/0299/6479/5997/products/14_7eff1237-c090-4f4d-80d0-9a953273a7e9_720x.jpg?v=1631846153"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Why go to actual space?</h5>
            <p>When you can watch your cat urinate in a spaceship.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="cara__image"
            height="400px"
            width="650px"
            src="https://cdn.shopify.com/s/files/1/0299/6479/5997/products/09_609201e9-dc4e-4b08-8005-7a3f25cfdc9d_720x.jpg?v=1631846153"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>It's a litter box, not a real spaceship</h5>
            <p>We know it's confusing</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default ProdCarousel;
