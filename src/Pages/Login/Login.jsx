import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1000,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage =
          errorCode === "auth/wrong-password"
            ? "Incorrect password"
            : errorCode === "auth/user-not-found"
            ? "No user found with this email"
            : error.message;
        console.log(errorMessage);
        setError(errorMessage);
      });
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value) == true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Epicurean Haven | Login</title>
      </Helmet>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url('https://i.ibb.co/GfmnQdf/auth-52.png')`,
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
                Login
              </h1>

              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-sm input-bordered mb-4"
                    required
                  />
                </div>

                <div className="form-control">
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-sm input-bordered mb-2"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <LoadCanvasTemplate />
                  </label>
                  <input
                    type="text"
                    name="captcha"
                    onBlur={handleValidateCaptcha}
                    placeholder="Type the captcha above"
                    className="input input-sm input-bordered"
                    required
                  />
                </div>

                <div className="form-control mt-6">
                  <input
                    disabled={disabled}
                    className="btn btn-sm btn-primary"
                    type="submit"
                    value="Login"
                  />
                </div>
              </form>

              <p className="text-center text-red-600 font-bold">{error}</p>

              <p className="text-center my-4">
                New to Epicurean Haven?{" "}
                <Link to="/signup" className="text-orange-600 font-bold">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
