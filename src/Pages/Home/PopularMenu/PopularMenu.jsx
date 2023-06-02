import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";
import { Link } from "react-router-dom";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="my-16">
      <SectionTitle subHeading="From our menu" heading="popular items" />
      <div className="grid md:grid-cols-2 gap-10 mx-6 md:mx-0">
        {popular.slice(0, 4).map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link to="/menu">
          <button className="uppercase btn btn-outline btn-info border-0 border-b-4">
            View Full Menu
          </button>
        </Link>
      </div>
    </section>
  );
};

export default PopularMenu;
