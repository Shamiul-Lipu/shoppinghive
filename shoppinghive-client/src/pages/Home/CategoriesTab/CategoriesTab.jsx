import { useEffect, useState } from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";
import Container from "../../../components/container/Container";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const CategoriesTab = () => {
  const [data, setData] = useState(null);
  const [selectedItem, setSelectedItem] = useState(0);

  const tabItems = [
    "Men's Sneaker",
    "Men's Pants",
    "Men's T-shirt",
    "Men's Boot",
    "Cap",
    "Bag",
    "Earphones",
    "Bottle",
  ];

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  const filteredData =
    data &&
    data.filter((product) => product.category === tabItems[selectedItem]);
  //   console.log(filteredData);

  return (
    <section className="py-10">
      <Container>
        <SectionTitle titleText={"Product catogry"} />
        <div className="flex flex-col sm:flex-row gap-7 ">
          <div className="w-full md:w-1/3 px-2 md:px-8 overflow-hidden">
            <ul
              role="tablist"
              className="hidden max-w-screen-xl mx-auto border-l flex-col gap-y-3 overflow-x-auto text-sm sm:flex"
            >
              {tabItems.map((item, idx) => (
                <li
                  key={idx}
                  className={`border-l-2 ${
                    selectedItem == idx
                      ? "border-amber-600 text-amber-600"
                      : "border-white text-gray-800"
                  }`}
                >
                  <button
                    role="tab"
                    aria-selected={selectedItem == idx ? true : false}
                    aria-controls={`tabpanel-${idx + 1}`}
                    className="py-2.5 px-4 rounded-lg duration-150 hover:text-indigo-900 hover:bg-gray-100 active:bg-gray-300 font-medium"
                    onClick={() => setSelectedItem(idx)}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
            <div className="relative text-gray-500 sm:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="pointer-events-none w-5 h-5 absolute right-2 inset-y-0 my-auto"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
              <select
                value={tabItems[selectedItem]}
                className="p-3 w-full bg-transparent appearance-none outline-none border rounded-lg shadow-sm focus:border-amber-600"
                onChange={(e) =>
                  setSelectedItem(tabItems.indexOf(e.target.value))
                }
              >
                {tabItems.map((item, idx) => (
                  <option key={idx} tabIndex={idx}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* product display section */}
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 py-5">
              {data &&
                filteredData.map((product, i) => (
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
        </div>
      </Container>
    </section>
  );
};

export default CategoriesTab;
