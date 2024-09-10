import React, { useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { updateDoc, doc } from "firebase/firestore";
import { firestore } from "../../firebase";
const ProfilePopup = ({ user, closePopup }) => {
  const [profilePic, setProfilePic] = useState(user.profilePic || null);
  const [uploading, setUploading] = useState(false);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);

    const storage = getStorage();
    const storageRef = ref(storage, `users/${user.uid}`);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);

    await updateDoc(doc(firestore, "users", user.uid), {
      profilePic: downloadURL,
    });

    setProfilePic(downloadURL);
    setUploading(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 h-screen">
      <div className="bg-white relative p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-black">User Profile</h2>
        <div className="mb-4 flex flex-col justify-center items-center">
          <label htmlFor="file-input">
            <img
              src={
                profilePic ||
                "https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png"
              }
              alt="Profile Pic"
              className="w-24 h-24 rounded-full mb-2 cursor-pointer"
            />
          </label>
          <div>
            {uploading && <p className="text-sm text-gray-500">Uploading...</p>}
          </div>
        </div>

        <input
          id="file-input"
          type="file"
          onChange={handleImageUpload}
          className="mb-4 hidden"
          accept="image/*"
        />
        <p className="mb-2 text-black">
          <strong>Name:</strong> {user.name}
        </p>
        <p className="mb-4 text-black">
          <strong>Email:</strong> {user.email}
        </p>
        <button
          onClick={closePopup}
          className="px-4 py-2 bg-[#254336] text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProfilePopup;
