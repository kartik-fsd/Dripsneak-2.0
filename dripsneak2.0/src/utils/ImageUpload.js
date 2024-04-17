import axios from "axios";
import Compressor from "compressorjs";
import { useFormikContext } from "formik";
import { showErrorToast, showSuccessToast } from "../Components/Toast";

const useImageUploader = (files, setFiles, setLoading, toastMsg, ErrorMsg) => {
  const { setFieldValue } = useFormikContext();

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
      showSuccessToast(toastMsg);
    } catch (error) {
      showErrorToast(ErrorMsg);
    } finally {
      setLoading(false);
      setFiles([]);
    }
  };

  return { compressAndUploadImages };
};

export default useImageUploader;
