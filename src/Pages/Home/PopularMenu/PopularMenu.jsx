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
        setMenu(popularItems);
      })
      .catch((error) => {
        console.log(error.message);
      });
  });

  return (
    <section className="my-16">
      <SectionTitle
        subHeading="From our menu"
        heading="popular items"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10 mx-6 md:mx-0">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
