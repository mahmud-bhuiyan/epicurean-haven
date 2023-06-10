import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../Hooks/useCart";

const FoodCard = ({ item }) => {
  const { _id, name, image, price, recipe } = item;

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [, refetch] = useCart();

  const handleAddToCart = (item) => {
    console.log(item.name);
    if (user && user.email) {
      const cartItem = {
        menuItemId: _id,
        name,
        price,
        image,
        email: user.email,
      };

      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Added to cart",
              showConfirmButton: false,
              timer: 1000,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to order food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

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
          <button
            onClick={() => {
              handleAddToCart(item);
            }}
            className="uppercase btn btn-outline btn-info border-0 border-b-4 bg-slate-100 border-orange-400"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
