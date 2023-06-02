import CallUsCard from "../../../Components/CallUsCard/CallUsCard";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Recommends from "../Recommends/Recommends";
import Testimonials from "../Testimonials/Testimonials";
import WebsitePromo from "../WebsitePromo/WebsitePromo";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Epicurean Haven | Home</title>
      </Helmet>
      <Banner></Banner>
      <div className="max-w-screen-xl mx-auto">
        <Category></Category>
        <WebsitePromo></WebsitePromo>
        <PopularMenu></PopularMenu>
        <CallUsCard></CallUsCard>
        <Recommends></Recommends>
      </div>
      <Featured></Featured>
      <div className="max-w-screen-xl mx-auto">
        <Testimonials></Testimonials>
      </div>
    </div>
  );
};

export default Home;
