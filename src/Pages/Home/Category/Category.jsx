import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

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
    <div className="my-10">
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
            <img src={slide.image} alt={`Slide ${index + 1}`} />
            <h3 className="text-3xl uppercase text-center text-white -mt-20 pb-6">
              {slide.text}
            </h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Category;
