import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const password = watch("password");
  const confirm = watch("confirm");

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (password === confirm) {
      createUser(data.email, data.password).then((result) => {
        const user = result.user;
        updateUserProfile(data.name, data.photo)
          .then(() => {
            console.log(user);
            const savedUser = { name: data.name, email: data.email };
            fetch(`https://epicurean-haven-server.vercel.app/users`, {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(savedUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  navigate("/");
                  Swal.fire({
                    position: "top-end",
                    title: "User created Successfully",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  reset();
                }
              });
          })
          .catch((error) => {
            console.log(error.message);
          });
      });
    } else {
      setError("Password and confirm password do not match!");
      return;
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Helmet>
        <title>Epicurean Haven | Sign Up</title>
      </Helmet>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url('https://i.ibb.co/Sv30V2D/auth-1.png')",
        }}
      >
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 mr-12"></div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1
                className="text-3xl font-bold text-center mb-6 underline"
                style={{ textShadow: "4px 4px 4px rgba(0, 0, 0, 0.5)" }}
              >
                Sign Up
              </h1>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control mb-4">
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    name="name"
                    placeholder="Name"
                    className="input input-sm input-bordered"
                  />
                  {errors.name && (
                    <span className="text-red-500 mt-1 ml-1">
                      Name is required
                    </span>
                  )}
                </div>

                <div className="form-control mb-4">
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    name="email"
                    placeholder="email"
                    className="input input-sm input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-500 mt-1 ml-1">
                      Email is required
                    </span>
                  )}
                </div>

                <div className="form-control mb-4">
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      {...register("password", {
                        required: true,
                        minLength: 6,
                        maxLength: 20,
                        pattern:
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                      })}
                      name="password"
                      placeholder="Password must be 6 characters long"
                      className="input input-sm input-bordered pr-10 w-full"
                    />
                    <div
                      className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <FaRegEyeSlash size={20} />
                      ) : (
                        <FaRegEye size={20} />
                      )}
                    </div>
                  </div>
                  {errors.password?.type === "required" && (
                    <p className="text-red-500 mt-1 ml-1" role="alert">
                      Password is required
                    </p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-500 mt-1 ml-1" role="alert">
                      Password must be 6 characters long
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-500 mt-1 ml-1" role="alert">
                      Password must be less than 20 characters
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-500 mt-1 ml-1" role="alert">
                      Password must contain at least one uppercase letter, one
                      lowercase letter, one number, and one special character
                    </p>
                  )}
                </div>

                <div className="form-control mb-4">
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      {...register("confirm", {
                        required: true,
                        minLength: 6,
                        maxLength: 20,
                      })}
                      name="confirm"
                      placeholder="Confirm password"
                      className="input input-sm input-bordered pr-10 w-full"
                    />
                    <div
                      className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <FaRegEyeSlash size={20} />
                      ) : (
                        <FaRegEye size={20} />
                      )}
                    </div>
                  </div>
                  {errors.confirm && (
                    <span className="text-red-500 mt-1 ml-1">
                      Confirm your Password
                    </span>
                  )}
                </div>

                <div className="form-control mb-4">
                  <input
                    type="text"
                    name="photo"
                    {...register("photo")}
                    placeholder="Photo URL"
                    className="input input-sm input-bordered"
                  />
                </div>

                <div className="form-control mt-6">
                  <input
                    className="btn btn-sm btn-primary"
                    type="submit"
                    value="Sign Up"
                  />
                </div>
              </form>

              <p className="text-center text-red-600 font-bold">{error}</p>

              <p className="text-center my-4">
                Already have an account?{" "}
                <Link to="/login" className="text-orange-600 font-bold">
                  Login
                </Link>
              </p>

              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
