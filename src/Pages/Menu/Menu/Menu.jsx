import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import desertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import MenuCategory from "../MenuCategory/MenuCategory";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <Helmet>
        <title>Epicurean Haven | Menu</title>
      </Helmet>

      {/* main cover */}
      <Cover
        img={menuImg}
        title={"Our menu"}
        text={"Would you like to try a dish?"}
      ></Cover>

      {/* offered menu items */}
      <SectionTitle
        subHeading={"Don't miss"}
        heading={"TODAY'S OFFER"}
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>

      {/* desserts menu items */}
      <MenuCategory
        items={desserts}
        title={"desserts"}
        text={"Would you like to try desserts?"}
        img={desertImg}
      ></MenuCategory>

      {/* pizza menu items */}
      <MenuCategory
        items={pizza}
        title={"pizza"}
        text={"Would you like to try pizza?"}
        img={pizzaImg}
      ></MenuCategory>

      {/* salad menu items */}
      <MenuCategory
        items={salad}
        title={"salad"}
        text={"Would you like to try salad?"}
        img={saladImg}
      ></MenuCategory>

      {/* soup menu items */}
      <MenuCategory
        items={soup}
        title={"soup"}
        text={"Would you like to try soup?"}
        img={soupImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
