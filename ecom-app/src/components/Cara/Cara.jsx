import Carousel from "react-bootstrap/Carousel";
import { useState, useEffect } from "react";
import firestore from "../../services/firestore/firestore";

const ProdCarousel = () => {
  const [comingSoon, setComingSoon] = useState(null);

  useEffect(() => {
    // Below is our retrieving promise
    const getImages = async () => {
      // Where to access products
      const colref = firestore.collection("comingSoon");
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
      setComingSoon(cleaned);
    };
    // Call the function just created

    getImages();
  }, []);

  return (
    <div className="carousel">
      <Carousel variant="dark">
        {comingSoon &&
          comingSoon.map((comingSoon) => (
            <Carousel.Item key={comingSoon.id}>
              <img
                className="carousel__image"
                src={comingSoon.image}
                alt="First slide"
              />
              <Carousel.Caption>
                <h5 className="carousel__title">{comingSoon.title}</h5>
                <p className="carousel__subtitle">{comingSoon.subtitle}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  );
};
export default ProdCarousel;
