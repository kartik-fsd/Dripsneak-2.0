import { Field } from "formik";
import ImageDropDown from "../../Components/ImageDropDown";

export default function Addproduct2() {
  return (
    <div className="w-full mx-auto p-6 bg-rhino-50 rounded-lg shadow-md">
      <div className="flex flex-col">
        <label
          htmlFor="description"
          className="text-sm font-medium text-scorpion-700"
        >
          Description
        </label>
        <Field
          as="textarea"
          id="description"
          name="description"
          className="rounded-md border border-scorpion-300 p-2 h-24 w-full focus:outline-none focus:ring-rhino-500 focus:border-rhino-500"
          placeholder="Write description about product"
        />
      </div>
      <div className="flex flex-col py-4">
        <label
          htmlFor="images"
          className="text-sm font-medium text-scorpion-700"
        >
          Images
        </label>
        <ImageDropDown />
      </div>
    </div>
  );
}
