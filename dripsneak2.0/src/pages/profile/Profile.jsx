import { useFormik } from "formik";
import Input from "../../Components/InputFields/Input";
import Legend from "../../Components/InputFields/Legend";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import TextField from "../../Components/InputFields/TextField";
import { showErrorToast, showSuccessToast } from "../../Components/Toast";
import { User_URL } from "../../utils/GlobalUrls";

function Profile() {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: "",
    shippingAddress: "",
    billingAddress: "",
    pincode: null,
  };

  const [userData, setUserData] = useState(initialState);
  const [editable, setEditable] = useState({
    personalDetails: false,
    addressDetails: false,
  });

  const validateForm = useCallback((values) => {
    // Validation logic remains the same
    const errors = {};

    // Validate First Name
    if (!values?.firstName) {
      errors.firstName = "First name is required";
    }

    // Validate Last Name
    if (!values?.lastName) {
      errors.lastName = "Last name is required";
    }

    // Validate Email
    if (!values?.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values?.email)) {
      errors.email = "Invalid email address";
    }

    // Validate Date of Birth
    if (!values?.dateOfBirth) {
      errors.dateOfBirth = "Date of birth is required";
    }

    // Validate Shipping Address
    if (!values?.shippingAddress) {
      errors.shippingAddress = "Shipping address is required";
    }

    // Validate Billing Address
    if (!values?.billingAddress) {
      errors.billingAddress = "Billing address is required";
    }

    // Validate Pincode
    if (!values?.pincode) {
      errors.pincode = "Pincode is required";
    } else if (!/^\d{6}$/.test(values?.pincode)) {
      errors.pincode = "Invalid pincode";
    }

    return errors;
  }, []);

  const formik = useFormik({
    initialValues: userData,
    enableReinitialize: true,
    validate: validateForm,
    onSubmit: async (values) => {
      await handleSubmit(values);
    },
  });

  const fetchProfile = async () => {
    try {
      const header = {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
        },
      };
      const url = User_URL + "profile";
      const response = await axios.get(url, header);
      const {
        firstName,
        lastName,
        email,
        dateOfBirth,
        shippingAddress,
        billingAddress,
        pincode,
      } = response.data.profile;
      const formattedDateOfBirth = dateOfBirth?.slice(0, 10);
      setUserData({
        firstName,
        lastName,
        email,
        dateOfBirth: formattedDateOfBirth,
        shippingAddress,
        billingAddress,
        pincode,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleSubmit = async (values) => {
    try {
      // Convert date to ISO format if it exists
      if (values.dateOfBirth && !(values.dateOfBirth instanceof Date)) {
        values.dateOfBirth = new Date(values.dateOfBirth).toISOString();
      }

      const header = {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
        },
      };
      const url = User_URL + "edit-profile";
      const response = await axios.put(url, values, header);
      console.log("Data submitted successfully");
      showSuccessToast(response.data.message);
      setEditable({
        personalDetails: false,
        addressDetails: false,
      });
    } catch (error) {
      console.error("Error submitting data:", error);
      showErrorToast(error.response.data.message);
    }
  };
  const handleEditToggle = (fieldName) => {
    // Combined logic for entering and exiting edit mode
    const nextEditable = { ...editable, [fieldName]: !editable[fieldName] };
    setEditable(nextEditable);

    if (nextEditable[fieldName]) {
      formik.setValues(userData);
    } else {
      formik.resetForm();
    }
  };

  const handleDateChange = (value) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      dateOfBirth: value,
    }));
  };

  return (
    <main
      role="main"
      className="flex min-h-full flex-1 flex-col justify-center p-6 lg:px-8"
    >
      <section className="sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"
          onSubmit={formik.handleSubmit}
        >
          <fieldset className="flex flex-col space-y-3 mt-5">
            <Legend
              header="Personal Details"
              aria="Edit Personal Details"
              fieldName="personalDetails"
              btnLabel={editable.personalDetails ? "Cancel" : "Edit"}
              onEditToggle={handleEditToggle}
            />
            <div className="flex space-x-2">
              <Input
                label="First Name"
                type="text"
                name="firstName"
                id="firstName"
                placeholder={"First Name"}
                onChange={formik.handleChange}
                value={formik.values.firstName}
                onBlur={formik.handleBlur}
                disabled={!editable.personalDetails}
                error={formik.errors}
                touched={formik.touched}
              />
              <Input
                label="Last Name"
                type="text"
                name="lastName"
                id="lastName"
                placeholder={"Last Name"}
                onChange={formik.handleChange}
                value={formik.values.lastName}
                onBlur={formik.handleBlur}
                disabled={!editable.personalDetails}
                error={formik.errors}
                touched={formik.touched}
              />
            </div>
            <div className="mt-3">
              <Input
                label="Email"
                type="email"
                name="email"
                id="email"
                placeholder={"example@example.com"}
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                disabled={!editable.personalDetails}
                error={formik.errors}
                touched={formik.touched}
              />
            </div>
            <div className="mt-3">
              <Input
                label="Date of Birth"
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
                placeholder={"example@example.com"}
                onChange={(e) => {
                  handleDateChange(e.target.value);
                  formik.handleChange;
                }}
                value={formik.values.dateOfBirth}
                onBlur={formik.handleBlur}
                disabled={!editable.personalDetails}
                error={formik.errors}
                touched={formik.touched}
              />
            </div>
          </fieldset>
          <fieldset className="flex flex-col space-y-3 mt-5">
            <Legend
              header="Address details"
              aria="Edit address Details"
              fieldName="addressDetails"
              btnLabel={editable.addressDetails ? "Cancel" : "Edit"}
              onEditToggle={handleEditToggle}
            />
            <div className="flex flex-col space-y-3 mt-5">
              <TextField
                label="Billing Address"
                id="billingAddress"
                name="billingAddress"
                placeholder="Billing Address"
                onChange={formik.handleChange}
                value={formik.values.billingAddress}
                onBlur={formik.handleBlur}
                disabled={!editable.addressDetails}
                error={formik.errors}
                touched={formik.touched}
              />
              <TextField
                label="Shipping Address"
                id="shippingAddress"
                name="shippingAddress"
                placeholder="Shipping Address"
                onChange={formik.handleChange}
                value={formik.values.shippingAddress}
                onBlur={formik.handleBlur}
                disabled={!editable.addressDetails}
                error={formik.errors}
                touched={formik.touched}
              />

              <Input
                label="Pincode"
                name="pincode"
                type="number"
                id="pincode"
                placeholder="Pincode"
                onChange={formik.handleChange}
                value={formik.values.pincode || ""}
                onBlur={formik.handleBlur}
                disabled={!editable.addressDetails}
                error={formik.errors}
                touched={formik.touched}
              />
            </div>
          </fieldset>
          <button
            type="submit"
            disabled={!editable.addressDetails && !editable.personalDetails}
            className={`bg-rhino-600 hover:bg-rhino-700 text-white font-bold w-full mt-10 py-2 px-4 rounded-md disabled:opacity-50  ${
              !editable.addressDetails && !editable.personalDetails
                ? " cursor-not-allowed"
                : "cursor-pointer"
            }`}
          >
            <span>Save Changes</span>
          </button>
        </form>
      </section>
    </main>
  );
}
export default Profile;
