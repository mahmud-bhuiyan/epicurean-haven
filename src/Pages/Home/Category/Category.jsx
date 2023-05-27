import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Category = () => {
  const slides = [
    {
      image: "https://i.ibb.co/JFxMZHs/slide1.jpg",
      text: "Salad",
    },
    {
      image: "https://i.ibb.co/DksF7Gx/slide2.jpg",
      text: "Pizza",
    },
    {
      image: "https://i.ibb.co/JFxMZHs/slide1.jpg",
      text: "Soup",
    },
    {
      image: "https://i.ibb.co/6RDs3Qz/slide3.jpg",
      text: "Rice Pudding",
    },
    {
      image: "https://i.ibb.co/c2cSMy5/slide4.jpg",
      text: "Cake",
    },
  ];

  return (
    <section className="my-10">
      <SectionTitle
        subHeading={"From 11:00am to 10.00pm"}
        heading={"ORDER ONLINE"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={60}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img className="pb-10" src={slide.image} alt="" />
              <h3 className="absolute bottom-10 left-0 w-full text-3xl uppercase text-center text-white py-2">
                {slide.text}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Category;
