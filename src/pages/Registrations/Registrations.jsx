import React, { useState } from "react";
import { useFirestore } from "../../context/firestoreContext";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { firestore } from "../../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Registrations = ({ eventsData }) => {
  const { user } = useFirestore();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    regNo: "",
    upiTransactionId: "",
    query: "",
    paymentImg: null,
  });
  const [imgPreview, setImgPreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showForm, setShowForm] = useState(false);

  const upcomingEvent = eventsData.find((event) => !event.completion);


const extractRegNoFromEmail = (email) => {
  const vitBhopalDomain = "@vitbhopal.ac.in";
  if (email.endsWith(vitBhopalDomain)) {
    const prefix = email.split("@")[0];
    const regNo = prefix.split(".")[1]; 
    return regNo || "";
  }
  return "";
};

const handleInputChange = (e) => {
  const { name, value } = e.target;

  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));

  if (name === "email") {
    const regNo = extractRegNoFromEmail(value);
    if (regNo) {
      setFormData((prevData) => ({
        ...prevData,
        regNo,
      }));
    }
  }
};


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, paymentImg: file });
    setImgPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.paymentImg) {
      toast.error("Please upload the payment proof.");
      return;
    }
    setIsSubmitting(true);

    try {
      const storage = getStorage();
      const storageRef = ref(
        storage,
        `EventPayments/${upcomingEvent.id}/${formData.email}`
      );
      await uploadBytes(storageRef, formData.paymentImg);
      const paymentImgURL = await getDownloadURL(storageRef);

      const eventDocRef = doc(firestore, "events", upcomingEvent.id);
      await updateDoc(eventDocRef, {
        "Registered Emails": arrayUnion(formData.email),
        "Registered Users": arrayUnion({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          regNo: formData.regNo,
          upiTransactionId: formData.upiTransactionId,
          query: formData.query,
          paymentImgURL,
          paymentVerified: "N",
        }),
      });

      setIsSubmitting(false);
      toast.success("Registration Successful!");
    } catch (error) {
      console.error("Error during registration: ", error);
      setIsSubmitting(false);
      toast.error("Registration failed, please try again.");
    }
  };

  return (
    <div className="min-h-screen w-full relative pt-16 flex justify-center text-black">
      <ToastContainer />
      {!showForm ? (
        <div className="z-30 mt-16 w-[80%] min-h-screen rounded-xl shadow-lg overflow-hidden bg-white flex flex-col md:flex-row ">
          <div className="md:w-[70%] w-full">
            <div className="h-auto overflow-hidden">
              <img
                src="/Registration.png"
                alt="Registrations"
                className="object-cover object-center min-h-96 h-full w-full"
              />
            </div>
            <div className="px-4 md:px-12 py-8 text-left">
              <div className="font-bold text-xl text-gray-800">Description</div>
              <div>
                <div className="text-gray-500">
                  Date: {upcomingEvent ? upcomingEvent.date : ""}
                </div>
                <div className="text-gray-500">
                  Time: {upcomingEvent ? upcomingEvent.time : ""}
                </div>
                <div className="text-gray-800">
                  {upcomingEvent ? upcomingEvent.description : ""}
                </div>
                <div className="text-gray-800 font-bold flex gap-2">
                  Venue:{" "}
                  <div className="text-gray-500 font-normal">
                    {upcomingEvent ? upcomingEvent.location : ""}
                  </div>
                </div>
                <div className="text-gray-800 font-bold flex gap-2">
                  Registration Fee: Rs.{" "}
                  <div className="text-gray-500 font-medium">
                    {upcomingEvent ? upcomingEvent.price : ""}
                  </div>
                </div>

                <div className="text-gray-500">- Android Club VIT Bhopal</div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 md:w-[30%] w-full h-full">
            <img
              src={upcomingEvent ? upcomingEvent.bannerURL : ""}
              alt="Registrations"
              className="object-cover w-full"
            />
            <div className="p-4">
              <button
                className="bg-[#34A853] w-full px-3 py-2 rounded-lg text-white text-lg hover:bg-[#26783c]"
                onClick={() => setShowForm(true)}
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full my-20 max-w-6xl flex mx-4 md:mx-16 z-30 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex w-1/2 flex-col border-r-[1px] border-gray-200">
            <div className="relative">
              <img
                src={upcomingEvent?.bannerURL || "/default-event-banner.jpg"}
                alt="Event Banner"
                className="object-cover w-full h-64"
              />
              <div className="absolute bottom-4 right-4 bg-white p-2 rounded-lg">
                <img
                  src="https://github.com/user-attachments/assets/2dfa18bc-9687-43ad-afbc-1b4c1b5bdee0"
                  alt="QR Code"
                  className="w-24 h-24 object-cover"
                />
              </div>
            </div>
            <div className=" p-8">
              <h2 className="text-3xl my-4 font-semibold text-[#254336] mb-6">
                Register for {upcomingEvent?.name || "Event"}
              </h2>
              <h2 className="text-sm my-4 font-normal text-[#254336] mb-6">
                (Fill up your details below and submit the form to register for{" "}
                {upcomingEvent?.name || "Event"})
              </h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <div>
                  <label className="block text-gray-600">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 mt-2 border border-gray-300 bg-white rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-gray-600">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 mt-2 border border-gray-300 bg-white rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-gray-600">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-2 mt-2 border border-gray-300 bg-white rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-gray-600">
                    Registration Number
                  </label>
                  <input
                    type="text"
                    name="regNo"
                    value={formData.regNo}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 mt-2 border border-gray-300 bg-white rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-gray-600">
                    UPI Transaction ID/ Ref. No.
                  </label>
                  <input
                    type="text"
                    name="upiTransactionId"
                    value={formData.upiTransactionId}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 mt-2 border border-gray-300 bg-white rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-gray-600 my-4">
                    Upload Payment Proof
                  </label>
                  <label
                    htmlFor="image-input"
                    className="px-12 py-2 hover:bg-[#254336] bg-[#3c7059] text-white rounded cursor-pointer"
                  >
                    Upload
                  </label>
                  <input
                    type="file"
                    id="image-input"
                    name="paymentImg"
                    accept="image/png, image/jpeg"
                    onChange={handleFileChange}
                    required
                    className="hidden"
                  />
                </div>

                {imgPreview && (
                  <div className="mt-4">
                    <label className="block text-gray-600">
                      Payment Proof Preview
                    </label>
                    <img
                      src={imgPreview}
                      alt="Payment Preview"
                      className="w-32 h-32 object-cover mt-2 rounded-md border"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-gray-600 my-2">
                    Query (Attach G-Drive link if applicable)
                  </label>
                  <input
                    type="text"
                    name="query"
                    value={formData.query}
                    onChange={handleInputChange}
                    className="w-full p-2 mt-2 border border-gray-300 bg-white rounded-md"
                  />
                </div>

                {errorMessage && (
                  <div className="text-red-500 text-sm my-2">
                    {errorMessage}
                  </div>
                )}

                <div className="flex gap-2 mt-10 justify-around">
                  <button
                    className="px-12 py-2 border-[#254336] hover:text-white hover:bg-[#254336] border-2 bg-white text-[#254336] rounded cursor-pointer"
                    onClick={() => setShowForm(false)}
                  >
                    Go Back
                  </button>
                  <div>
                    <button
                      type="submit"
                      className={`${
                        isSubmitting ? "bg-gray-400" : "bg-[#254336]"
                      } px-12 py-2 hover:bg-[#254336] text-white bg-[#3c7059] rounded cursor-pointer`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-1/2">
            <div className="bg-[#254336] text-white text-4xl font-normal h-44 w-full flex flex-col justify-center p-8">
              <h3 className="text-3xl font-semibold">Instructions</h3>
            </div>
            <div className="px-10 text-left text-base">
              <p className="mt-4 font-bold">
                For payment, you need to bank transfer the registration amount
                to Android Club. The details are as follows:
              </p>
              <p className="mt-2">
                <b>Bank Name</b> - Indian Bank, VIT Bhopal University, Kothri
                kalan
              </p>
              <p className="mt-2">
                <b>Account Number</b> - 6565521552
              </p>
              <p className="mt-2">
                <b>IFSC</b> - IDIB000V143
              </p>
              <p className="mt-2">
                <b>Name on Bank</b> - Android Club
              </p>
              <p className="mt-2">
                1. Please enter the UPI Transaction ID/ Ref. No. used for the
                fee payment.
              </p>
              <p className="mt-2">
                2. Upload the Payment Confirmation Slip. Alternatively, you can
                attach the G-Drive link of the Payment Slip to the query
                question below.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Registrations;
