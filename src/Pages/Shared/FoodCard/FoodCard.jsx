const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;

  return (
    <div className="card bg-base-100 shadow-xl text-center">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 bg-slate-900 text-white px-4 py-1 rounded-md">
        ${price}
      </p>
      <div className="card-body">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p>{recipe}</p>
        <div className="mt-4">
          <button className="uppercase btn btn-outline btn-info border-0 border-b-4 bg-slate-100 border-orange-400">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
