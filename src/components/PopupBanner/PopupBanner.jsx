import React from "react";

const PopupBanner = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 w-full max-w-2xl rounded-lg relative shadow-lg text-center animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-center h-7 w-7 text-2xl"
        >
          &times;
        </button>
        <img
          src="https://github.com/user-attachments/assets/22e4af37-8cd6-43a2-9ca1-be0d4073ebe9"
          alt="Android Logo"
          width={200}
          className="rounded-lg m-auto"
        />
        <div className="flex flex-col items-center gap-2">
          <img
            src="https://github.com/user-attachments/assets/0409e140-f66d-4787-9fcf-fe75770f40f2"
            alt="Community"
            className="rounded-lg w-2/3 m-auto"
          />
          <div className="text-black w-[80%]">
            <span className="font-bold text-[#34a853]">Register </span>in our
            next event and be a part of{" "}
            <span className="font-bold text-[#34a853]">VIT Bhopal&apos;s </span>
            largest
            <span className="font-bold text-[#34a853]"> tech community.</span>
          </div>
          <div>
            <button
              onClick={() => (window.location.href = "/registrations")}
              className="px-12 py-2 bg-[#34a853] hover:bg-[#216834] text-white rounded cursor-pointer"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupBanner;
