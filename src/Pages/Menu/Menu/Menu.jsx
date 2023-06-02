import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Epicurean Haven | Menu</title>
      </Helmet>
      <Cover
        img={menuImg}
        title={"Our menu"}
        text={"Would you like to try a dish?"}
      ></Cover>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Menu;
