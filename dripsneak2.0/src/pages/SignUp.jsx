import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import PasswordField from "../Components/passwordField";
import InputBar from "../Components/inputBar";
import { showErrorToast, showSuccessToast } from "../Components/Toast";
import { useMutation } from "@tanstack/react-query";

// eslint-disable-next-line react/prop-types
export const ErrorComponent = ({ error }) => (
  <p className="text-totem-pole-600 font-medium">{error}</p>
);

export default function Register() {
  const navigate = useNavigate();
  const mutation = useMutation((values) =>
    fetch("http://localhost:3000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
  );
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center pb-6 pt-2 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-rhino-900">
            DRIPSNEAK
          </h2>
          <h2 className="mt-4 text-center text-xl font-bold leading-9 tracking-tight text-rhino-700">
            Create your buyer account to start shopping
          </h2>
        </div>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              confirmPassword: "",
              role: "USER",
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
              if (!values.password) {
                errors.password = "Required";
              } else if (values.password.length < 8) {
                errors.password = "Password must be at least 8 characters long";
              }
              if (
                !values.confirmPassword ||
                values.password !== values.confirmPassword
              ) {
                errors.confirmPassword = "Passwords must match";
              }
              return errors;
            }}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              // eslint-disable-next-line no-unused-vars
              const { confirmPassword, ...requestData } = values;
              try {
                const response = await mutation.mutateAsync(requestData);
                showSuccessToast(response.data.message);
                setTimeout(() => {
                  resetForm();
                  navigate("/");
                }, 800);
              } catch (error) {
                // Handle error responses from the backend
                showErrorToast(
                  error.response?.data?.message || "An error occurred"
                );
              } finally {
                // Reset submitting state regardless of success or failure
                setSubmitting(false);
              }
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
                      label="First Name"
                      id="firstName"
                      name="firstName"
                      type="text"
                      autoComplete="text"
                      placeholder="First Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstName}
                    />
                    {errors.firstName && touched.firstName && (
                      <ErrorComponent error={errors.firstName} />
                    )}
                  </>
                  <>
                    <InputBar
                      label="Last Name"
                      id="lastName"
                      name="lastName"
                      type="text"
                      autoComplete="text"
                      placeholder="Last Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastName}
                    />
                    {errors.lastName && touched.lastName && (
                      <ErrorComponent error={errors.lastName} />
                    )}
                  </>
                  <>
                    <InputBar
                      label="Email"
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
                      placeholder="Password (minimum 8 characters)"
                      autoComplete="current-password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password && (
                      <ErrorComponent error={errors.password} />
                    )}
                  </>

                  <>
                    {" "}
                    <PasswordField
                      label="Confirm Password"
                      id="confirmPassword"
                      name="confirmPassword"
                      autoComplete="current-password"
                      placeholder="renter the password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.confirmPassword}
                    />
                    {errors.confirmPassword && touched.confirmPassword && (
                      <ErrorComponent error={errors.confirmPassword} />
                    )}
                  </>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md text-rhino-50 bg-rhino-600  px-3  py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-rhino-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rhino-600"
                    >
                      Create Account
                    </button>
                  </div>
                </form>

                <p className="mt-10 text-center text-sm text-scorpion-500">
                  Already have a account?{" "}
                  <Link
                    to="/signin"
                    className="font-semibold leading-6 text-rhino-600 hover:text-rhino-500"
                    disabled={isSubmitting}
                  >
                    Sign In
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
