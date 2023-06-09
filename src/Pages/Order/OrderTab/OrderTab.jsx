import FoodCard from "../../Shared/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
  return (
    <>
      <div className="my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16 mx-4 lg:mx-0">
          {items.map((item) => (
            <FoodCard key={item._id} item={item}></FoodCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default OrderTab;
