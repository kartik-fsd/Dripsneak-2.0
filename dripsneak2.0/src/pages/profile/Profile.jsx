import { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import avatar from "../../assets/avatar.png";
import axios from "axios";
import EditableField from "../../Components/ProfileField";
import { showErrorToast, showSuccessToast } from "../../Components/Toast";
import Spinner from "../../Components/loader/Spinner";
const Profile = () => {
  const [userData, setUserData] = useState({
    dateOfBirth: "",
    shippingAddress: "",
    billingAddress: "",
    pincode: null,
    firstName: "",
    email: "",
    lastName: "",
  });

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const header = {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
        },
      };
      const response = await axios.get(
        "http://localhost:3000/user/profile",
        header
      );
      const {
        dateOfBirth,
        shippingAddress,
        billingAddress,
        pincode,
        firstName,
        email,
        lastName,
      } = response.data.profile;
      const formattedDateOfBirth = dateOfBirth.slice(0, 10);
      console.log(response.data.profile, "data");
      setUserData({
        dateOfBirth: formattedDateOfBirth,
        shippingAddress,
        billingAddress,
        pincode,
        firstName,
        email,
        lastName,
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleSubmit = async (values) => {
    try {
      // Fetch original data from state
      const originalData = userData;

      // Clone the editedData object
      const updatedValues = { ...values };

      // Check if dateOfBirth needs conversion
      if (
        updatedValues.dateOfBirth &&
        !(updatedValues.dateOfBirth instanceof Date)
      ) {
        // Convert dateOfBirth to ISO 8601 format
        updatedValues.dateOfBirth = new Date(
          updatedValues.dateOfBirth
        ).toISOString();
      }

      // Find the keys with changed values
      const changedKeys = Object.keys(updatedValues).filter(
        (key) => updatedValues[key] !== originalData[key]
      );

      // Create an object with only the changed values
      const changedData = {};
      changedKeys.forEach((key) => {
        changedData[key] = updatedValues[key];
      });

      //Submit data only if there are changes
      if (Object.keys(changedData).length > 0) {
        const header = {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
          },
        };
        const response = await axios.put(
          "http://localhost:3000/user/edit-profile",
          changedData,
          header
        );
        console.log("Data submitted successfully");
        showSuccessToast(response.data.message);
      } else {
        showErrorToast("No changes detected");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      showErrorToast(error.response.data.message);
    }
  };

  const handleDateChange = (value) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      dateOfBirth: value,
    }));
  };

  return (
    <div className="flex justify-center py-8  bg-scorpion-50">
      <Formik
        initialValues={userData}
        enableReinitialize
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue }) =>
          isSubmitting ? (
            <Spinner />
          ) : (
            <Form className="flex flex-col space-y-5 profile-form">
              <div className="flex flex-col items-center justify-center relative z-10">
                <img
                  className="w-36 h-36 rounded-full border-4 border-white shadow-lg hover:border-scorpion-400 hover:shadow-xl"
                  src={avatar}
                  alt="avatar"
                />
              </div>
              <div className="bg-rhino-200 rounded-lg shadow-xl p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 m-6">
                  <EditableField
                    label="First Name"
                    type="text"
                    name="firstName"
                  />

                  <EditableField
                    label="Last Name"
                    type="text"
                    name="lastName"
                  />

                  <EditableField label="Email" type="email" name="email" />

                  <EditableField
                    label="Date of Birth"
                    type="date"
                    name="dateOfBirth"
                    value={userData.dateOfBirth}
                    onChange={(e) => {
                      handleDateChange(e.target.value);
                      setFieldValue("dateOfBirth", e.target.value);
                    }}
                  />
                  <EditableField
                    label="Shipping Address"
                    as="textarea"
                    type="text"
                    name="shippingAddress"
                  />
                  <EditableField
                    label="Billing Address"
                    as="textarea"
                    type="text"
                    name="billingAddress"
                  />
                  <EditableField label="Pincode" type="number" name="pincode" />
                </div>
                <button
                  type="submit"
                  className="bg-rhino-600 hover:bg-rhino-700 text-white font-bold w-full mt-10 py-2 px-4 rounded-md disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="mr-2">Saving...</span>
                  ) : (
                    <span>Save Changes</span>
                  )}
                </button>
              </div>
            </Form>
          )
        }
      </Formik>
    </div>
  );
};

export default Profile;
