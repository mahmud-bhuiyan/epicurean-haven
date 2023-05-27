import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems.slice(0, 4));
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <section className="my-16">
      <SectionTitle subHeading="From our menu" heading="popular items" />
      <div className="grid md:grid-cols-2 gap-10 mx-6 md:mx-0">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="uppercase btn btn-outline btn-info border-0 border-b-4">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
