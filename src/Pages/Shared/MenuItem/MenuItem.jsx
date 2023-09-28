const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex space-x-2 px-2 md:px-0">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[100px] h-[100px] sm:h-auto"
        src={image}
        alt=""
      />

      <div>
        <h3 className="uppercase">{name} --------</h3>
        <p>{recipe}</p>
        <p className="text-yellow-500 sm:hidden">${price}</p>
      </div>
      <p className="text-yellow-500 sm:flex hidden">${price}</p>
    </div>
  );
};

export default MenuItem;
