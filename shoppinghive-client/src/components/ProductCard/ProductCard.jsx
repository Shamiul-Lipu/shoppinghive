import { FaStar } from "react-icons/fa";

const ProductCard = ({
  image,
  name,
  price,
  seller,
  ratings,
  ratingsCount,
  stock,
}) => {
  return (
    <div className="card w-full glass border-white">
      <figure>
        {image && (
          <img
            className="hover:scale-110 hover:transition-all hover:ease-linear hover:duration-300"
            src={image}
            alt="product image!"
          />
        )}
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        {/* product details */}
        <div className="">
          <p className="font-bold text-gray-500">
            Price: <span className="text-black">{price} $</span>
          </p>
          <p className="font-semibold">Seller: {seller}</p>
          <div className="text-sm font-medium text-gray-500 pt-2">
            <p className="text-black font-light">
              {stock} Produt Available now
            </p>
            <div className="flex justify-between items-center text-black py-2">
              <p>Reviewed by {ratingsCount} people</p>
              <p className="flex items-center gap-1">
                <FaStar className="text-amber-500" /> {ratings}
              </p>
            </div>
          </div>
          <div className="">
            <button className="btn btn-ghost font-bold w-full bg-amber-300 hover:bg-amber-100">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
