import axios from "axios";
import Compressor from "compressorjs";
import { useState } from "react";
import { showErrorToast, showSuccessToast } from "./Toast";
import { useFormikContext } from "formik";

const ImageDropDown = () => {
  const [files, setFiles] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { setFieldValue } = useFormikContext();

  const handleFile = async (e) => {
    setMessage("");
    const selectedFiles = e.target.files;
    const validImageTypes = [
      "image/gif",
      "image/jpeg",
      "image/png",
      "image/webp",
    ];
    const newFiles = [];

    for (let i = 0; i < selectedFiles.length; i++) {
      if (validImageTypes.includes(selectedFiles[i].type)) {
        newFiles.push(selectedFiles[i]);
      } else {
        setMessage("Only images are accepted");
      }
    }

    setFiles([...files, ...newFiles]);
  };

  const removeImage = (name) => {
    setFiles(files.filter((file) => file.name !== name));
  };

  const compressAndUploadImages = async () => {
    setLoading(true);
    try {
      const compressed = await Promise.all(
        files.map((file) => {
          return new Promise((resolve) => {
            new Compressor(file, {
              quality: 0.6,
              success: (result) => {
                resolve(result);
              },
              error: (err) => {
                console.error(err.message);
                resolve(file); // fallback to the original file if compression fails
              },
            });
          });
        })
      );

      // Upload compressed images to Cloudinary
      const cloudinaryUrls = await Promise.all(
        compressed.map(async (file) => {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("upload_preset", "dripnseak_preset_");

          const response = await axios.post(
            "https://api.cloudinary.com/v1_1/drinpsneak/image/upload",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );

          return response.data.secure_url;
        })
      );
      setFieldValue("img", cloudinaryUrls);
      showSuccessToast("Images uploaded successfully");
    } catch (error) {
      console.error("Error uploading images:", error);
      showErrorToast("Error uploading images");
    } finally {
      setLoading(false);
      setFiles([]);
    }
  };

  return (
    <>
      <div id="images" className="flex justify-center w-full items-center">
        <div className="rounded-lg shadow-xl md:w-full w-[360px] bg-scorpion-50">
          <div className="m-4">
            <span className="flex justify-center items-center text-sm mb-1 text-totem-pole-500">
              {message}
            </span>
            <div className="flex flex-col items-center justify-center w-full">
              <label className="flex cursor-pointer flex-col w-full h-32 border-2 rounded-md border-dashed hover:bg-rhino-100 hover:border-scorpion-300">
                <div className="flex flex-col items-center justify-center pt-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12 text-scorpion-400 group-hover:text-scorpion-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="pt-1 text-sm tracking-wider text-scorpion-800 group-hover:text-scorpion-600">
                    Select images
                  </p>
                </div>
                <input
                  type="file"
                  onChange={handleFile}
                  className="opacity-0"
                  multiple
                  name="files"
                />
              </label>
              <div className="flex flex-wrap gap-2 mt-2">
                {files.map((file, key) => {
                  return (
                    <div key={key} className="overflow-hidden relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        onClick={() => {
                          removeImage(file.name);
                        }}
                        className="w-5 h-5 absolute right-1 text-totem-pole-500 hover:text-rhino-50 cursor-pointer"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>

                      <img
                        className="h-20 w-20 rounded-md object-cover"
                        src={URL.createObjectURL(file)}
                        alt={`Image ${key}`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={compressAndUploadImages}
        className="mt-4 bg-rhino-500 text-rhino-50 rounded-md py-2 px-4 hover:bg-rhino-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rhino-500"
      >
        {loading ? "uploading..." : "Upload Images"}
      </button>
    </>
  );
};

export default ImageDropDown;
