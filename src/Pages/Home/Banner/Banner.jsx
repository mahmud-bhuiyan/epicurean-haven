import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  const bannerImages = [
    "https://i.ibb.co/bKfnyrd/01.jpg",
    "https://i.ibb.co/Mgw5Qnr/02.jpg",
    "https://i.ibb.co/CsDbc8W/03.png",
    "https://i.ibb.co/xGMZ9Vn/04.jpg",
    "https://i.ibb.co/C6MrVV5/05.png",
    "https://i.ibb.co/tzWCzwd/06.png",
  ];

  return (
    <Carousel>
      {bannerImages.map((image, index) => (
        <div key={index}>
          <img src={image} alt="" />
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
