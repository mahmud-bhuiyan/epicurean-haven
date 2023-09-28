import { Link } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Recommends = () => {
  const slides = [
    {
      image: "https://i.ibb.co/JFxMZHs/slide1.jpg",
      name: "Caesar Salad",
      text: "Caesar Salad Recommended by Chefs",
    },
    {
      image: "https://i.ibb.co/DksF7Gx/slide2.jpg",
      name: "Pizza",
      text: "Pizza Recommended by Chefs",
    },
    {
      image: "https://i.ibb.co/JFxMZHs/slide1.jpg",
      name: "Almond Salad",
      text: "Almond Salad Recommended by Chefs",
    },
  ];

  return (
    <div className="my-20">
      <SectionTitle
        subHeading={"Should try"}
        heading={"chef Recommends"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16 mx-4 lg:mx-0">
        {slides.map((slide, index) => (
          <div key={index} className="card bg-base-100 shadow-xl text-center">
            <figure>
              <img src={slide.image} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="text-2xl font-bold">{slide.name}</h2>
              <p>{slide.text}</p>
              <div className="mt-4">
                <Link to="/menu">
                  <button className="uppercase btn btn-outline btn-info border-0 border-b-4">
                    See Items
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommends;
