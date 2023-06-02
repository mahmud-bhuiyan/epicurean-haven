import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, text, img }) => {
  return (
    <div>
      {title && <Cover img={img} title={title} text={text}></Cover>}

      <section className="my-16 max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 mx-6 md:mx-0">
          {items.map((item) => (
            <MenuItem key={item._id} item={item} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="uppercase btn btn-outline btn-info border-0 border-b-4">
            ORDER YOUR FAVORITE FOOD
          </button>
        </div>
      </section>
    </div>
  );
};

export default MenuCategory;
