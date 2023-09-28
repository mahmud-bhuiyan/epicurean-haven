import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Banner.css";

const Banner = () => {
  const images = [
    "https://i.ibb.co/bQnXXW4/Untitled-3.png",
    "https://i.ibb.co/hMRrV96/08.png",
    "https://i.ibb.co/2Mt6t7k/9.png",
    "https://i.ibb.co/Mgw5Qnr/02.jpg",
    "https://i.ibb.co/CsDbc8W/03.png",
    "https://i.ibb.co/xGMZ9Vn/04.jpg",
    "https://i.ibb.co/C6MrVV5/05.png",
    "https://i.ibb.co/tzWCzwd/06.png",
  ];

  return (
    <Carousel
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
      showStatus={false}
    >
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt="" />
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
