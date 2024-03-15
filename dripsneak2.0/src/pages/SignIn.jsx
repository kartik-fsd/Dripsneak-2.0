import { Link, useNavigate } from "react-router-dom";
import InputBar from "../Components/inputBar";
import { ErrorComponent } from "./SignUp";
import PasswordField from "../Components/passwordField";
import { Formik } from "formik";
import { showErrorToast, showSuccessToast } from "../Components/Toast";
import axios from "axios";
import { RoleAuth } from "../utils/tokenRoleAuth";

export default function SignIn() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center p-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-rhino-900">
            DRIPSNEAK
          </h2>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              // eslint-disable-next-line no-unused-vars
              axios
                .post("http://localhost:3000/auth/login", values)
                .then((response) => {
                  showSuccessToast(response.data.message);
                  RoleAuth(response.data.token);
                  document.cookie = `authToken=${response.data.token}; path=/`;
                  setTimeout(() => {
                    resetForm();
                    navigate("/sneakers");
                  }, 800);
                })
                .catch((error) => {
                  // Handle error responses from the backend
                  showErrorToast(error.response.data.message);
                })
                .finally(() => {
                  // Reset submitting state regardless of success or failure
                  setSubmitting(false);
                });
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <>
                <form
                  className="space-y-4"
                  action="#"
                  method="POST"
                  onSubmit={handleSubmit}
                >
                  <>
                    <InputBar
                      label="Email address"
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="example@example.com"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    {errors.email && touched.email && (
                      <ErrorComponent error={errors.email} />
                    )}
                  </>
                  <>
                    <PasswordField
                      label="Password"
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      placeholder="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password && (
                      <ErrorComponent error={errors.password} />
                    )}
                  </>

                  <>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex w-full justify-center rounded-md text-rhino-50 bg-rhino-600  px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-rhino-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rhino-600"
                    >
                      Sign in
                    </button>
                  </>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                  Not a member?{" "}
                  <Link
                    to="/register"
                    className="font-semibold leading-6 text-rhino-600 hover:text-rhino-500"
                  >
                    Create account
                  </Link>
                </p>
                <div className="flex items-center before:h-px before:flex-1  before:bg-scorpion-300 before:content-[''] after:h-px after:flex-1 after:bg-scorpion-300  after:content-['']">
                  <button
                    type="button"
                    className="bg-secondary-50 px-3 py-2 text-center text-sm font-medium text-scorpion-900"
                  >
                    Or
                  </button>
                </div>
                <p className="mt-2 text-center text-sm text-scorpion-500">
                  Create a account as seller?{" "}
                  <Link
                    to="/seller-register"
                    className="font-semibold leading-6 text-rhino-600 hover:text-rhino-500"
                    disabled={isSubmitting}
                  >
                    Register as seller
                  </Link>
                </p>
              </>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}
