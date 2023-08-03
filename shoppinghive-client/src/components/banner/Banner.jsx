import Container from "../container/Container";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import bannerOne from "../../assets/banner/banner1.png";
import bannerTwo from "../../assets/banner/banner2.png";
import bannerThree from "../../assets/banner/banner3.png";
import bannerFour from "../../assets/banner/banner4.png";
import bannerFive from "../../assets/banner/banner5.png";
import bannerSix from "../../assets/banner/banner6.png";
import discountImg from "../../assets/discount.jpg";
import discountImgOne from "../../assets/discount1.png";

const Banner = () => {
  const allBanner = [
    bannerOne,
    bannerTwo,
    bannerThree,
    bannerFour,
    bannerFive,
    bannerSix,
  ];
  return (
    <Container>
      <section className="flex flex-col lg:flex-row gap-2 px-2 md:px-0 py-5">
        <div className="w-full  lg:w-9/12">
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            stopOnHover={false}
          >
            {allBanner.map((image, i) => (
              <div className="rounded-xl" key={i}>
                <img className="rounded-xl" src={image} />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="w-full lg:w-1/4 flex flex-col sm:flex-row lg:flex-col gap-2 justify-center items-center bg-amber-200 rounded-lg p-2">
          <div className="card w-full  bg-base-100 shadow-xl image-full">
            <figure>
              <img src={discountImg} alt="discount images" />
            </figure>
            <div className="card-body">
              <h2 className="card-title"></h2>
              <p className="text-lg">
                Enjoy savings of up to{" "}
                <span className=" text-amber-400 p-3 font-extrabold text-2xl rounded-md">
                  50%!
                </span>
              </p>
              <button className="btn btn-ghost text-blue-950 bg-amber-200 hover:bg-amber-300 ">
                See Best Products
              </button>
            </div>
          </div>

          <div className="card w-full shadow-xl image-full">
            <figure>
              <img src={discountImgOne} alt="discount images" />
            </figure>
            <div className="card-body">
              <h2 className="card-title"></h2>
              <p className="text-white">
                Receive a welcoming{" "}
                <span className=" text-amber-400 p-3 font-extrabold text-2xl rounded-md">
                  20%!
                </span>{" "}
                discount upon new registration.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-ghost text-amber-300 bg-blue-950  hover:bg-amber-300 hover:text-blue-950">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Banner;
