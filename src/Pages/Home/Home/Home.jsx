import CallUsCard from "../../../Components/CallUsCard/CallUsCard";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import WebsitePromo from "../WebsitePromo/WebsitePromo";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <WebsitePromo></WebsitePromo>
      <PopularMenu></PopularMenu>
      <CallUsCard></CallUsCard>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
