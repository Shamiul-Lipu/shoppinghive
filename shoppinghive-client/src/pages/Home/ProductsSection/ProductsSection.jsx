import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Container from "../../../components/container/Container";
import ProductCard from "../../../components/ProductCard/ProductCard";

const ProductsSection = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  console.log(data);
  return (
    <section className="bg-blue-50">
      <Container>
        <SectionTitle
          titleText={"Our Exquisite Product Lineup"}
          quoteText={
            "Crafting Dreams into Reality, The Epitome of Excellence and Imagination in Every Product."
          }
        ></SectionTitle>
        {/* product display section */}
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 py-5">
            {data &&
              data.map((product, i) => (
                <ProductCard
                  key={i}
                  image={product.img}
                  name={product.name}
                  ratings={product.ratings}
                  ratingsCount={product.ratingsCount}
                  price={product.price}
                  seller={product.seller}
                  stock={product.stock}
                />
              ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductsSection;
