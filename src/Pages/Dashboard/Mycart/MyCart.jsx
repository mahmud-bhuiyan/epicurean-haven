import { Helmet } from "react-helmet-async";
import useCart from "../../../Hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart, refetch] = useCart();

  const total = cart.reduce((sum, item) => item.price + sum, 0).toFixed(2);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://epicurean-haven-server.vercel.app/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire(
                "Deleted!",
                "Item has been deleted from cart.",
                "success"
              );
            }
          });
      }
    });
  };

  return (
    <div className="max-w-screen-xl mx-auto pt-20 lg:mx-48">
      <Helmet>
        <title>Epicurean Haven | My Cart</title>
      </Helmet>
      <div className="uppercase font-semibold flex  justify-evenly items-center h-[60px]">
        <h3 className="text-3xl">Total Items: {cart?.length}</h3>
        <h3 className="text-3xl">Total Price: {total}</h3>
        <button className="btn btn-sm btn-warning">Pay</button>
      </div>
      <div className="overflow-x-auto my-4">
        <div className="w-full">
          <table className="table text-center w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Food</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn btn-error btn-sm text-white"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
