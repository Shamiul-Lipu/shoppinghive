import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Container from "../../../components/container/Container";
import ProductCard from "../../../components/ProductCard/ProductCard";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const ProductsSection = () => {
  const [data, setData] = useState(null);
  const animatedComponents = makeAnimated();

  const options = [
    { value: "Men's Sneaker", label: "Men's Sneaker" },
    { value: "Men's Pants", label: "Men's Pants" },
    { value: "Men's T-shirt", label: "Men's T-shirt" },
    { value: "Men's Boot", label: "Men's Boot" },
    { value: "Cap", label: "Cap" },
    { value: "Bag", label: "Bag" },
    { value: "Earphones", label: "Earphones" },
    { value: "Bottle", label: "Bottle" },
  ];

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  const filteredData =
    data && data.filter((product) => product.category === `Men's Sneaker`);
  // console.log(filteredData);

  return (
    <section className="py-10">
      <Container>
        <SectionTitle
          titleText={"Our Exquisite Product Lineup"}
          quoteText={
            "Crafting Dreams into Reality, The Epitome of Excellence and Imagination in Every Product."
          }
        ></SectionTitle>
        {/* filtes section */}
        <div className="w-full py-4 px-2">
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={options}
          />
        </div>
        {/* product display section */}
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-2 py-5">
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
