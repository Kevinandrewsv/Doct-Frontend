import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';

const MyProfile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(null);

  const { token, backendUrl, userData, setUserData, loadUserProfileData } = useContext(AppContext);

  const updateUserProfileData = async () => {
    try {
      const formData = new FormData();
      formData.append('name', userData.name);
      formData.append('phone', userData.phone);
      formData.append('address', JSON.stringify(userData.address));
      formData.append('gender', userData.gender);
      formData.append('dob', userData.dob);
      if (image) formData.append('image', image);

      const { data } = await axios.post(`${backendUrl}/api/user/update-profile`, formData, {
        headers: { token },
      });

      if (data.success) {
        toast.success(data.message);
        await loadUserProfileData();
        setIsEdit(false);
        setImage(null);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong.');
    }
  };

  if (!userData) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-white via-slate-100 to-white px-4 py-10">
      <div className="w-full max-w-3xl bg-white/60 backdrop-blur-md rounded-3xl shadow-2xl p-8">
        <div className="flex flex-col items-center mb-6">
          {isEdit ? (
            <label htmlFor="image" className="relative group cursor-pointer">
              <img
                src={image ? URL.createObjectURL(image) : userData.image}
                alt="Profile"
                className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-md group-hover:scale-105 transition-transform"
              />
              <img
                src={image ? '' : assets.upload_icon}
                alt="Upload"
                className="w-10 absolute bottom-0 right-0 bg-white p-1 rounded-full opacity-80 group-hover:opacity-100 transition"
              />
              <input type="file" id="image" hidden onChange={(e) => setImage(e.target.files[0])} />
            </label>
          ) : (
            <img
              src={userData.image}
              alt="Profile"
              className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-md"
            />
          )}

          {isEdit ? (
            <input
              type="text"
              value={userData.name}
              onChange={(e) => setUserData({ ...userData, name: e.target.value })}
              className="mt-4 px-4 py-2 text-center text-xl rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400 w-full max-w-xs"
            />
          ) : (
            <h2 className="mt-4 text-2xl font-semibold text-gray-800">{userData.name}</h2>
          )}
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* Email */}
          <div>
            <label className="text-gray-600 text-sm font-medium">Email</label>
            <p className="text-blue-600 mt-1 break-all">{userData.email}</p>
          </div>

          {/* Phone */}
          <div>
            <label className="text-gray-600 text-sm font-medium">Phone</label>
            {isEdit ? (
              <input
                type="text"
                value={userData.phone}
                onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                className="mt-1 w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            ) : (
              <p className="mt-1 text-gray-700">{userData.phone}</p>
            )}
          </div>

          {/* Address */}
          <div className="sm:col-span-2">
            <label className="text-gray-600 text-sm font-medium">Address</label>
            {isEdit ? (
              <div className="space-y-2 mt-1">
                <input
                  type="text"
                  placeholder="Line 1"
                  value={userData.address.line1}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      address: { ...userData.address, line1: e.target.value },
                    })
                  }
                  className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="text"
                  placeholder="Line 2"
                  value={userData.address.line2}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      address: { ...userData.address, line2: e.target.value },
                    })
                  }
                  className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            ) : (
              <p className="mt-1 text-gray-700 whitespace-pre-line">
                {userData.address.line1}
                {userData.address.line2 && `\n${userData.address.line2}`}
              </p>
            )}
          </div>

          {/* Gender */}
          <div>
            <label className="text-gray-600 text-sm font-medium">Gender</label>
            {isEdit ? (
              <select
                value={userData.gender}
                onChange={(e) => setUserData({ ...userData, gender: e.target.value })}
                className="mt-1 w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="Not Selected">Not Selected</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <p className="mt-1 text-gray-700">{userData.gender}</p>
            )}
          </div>

          {/* Birthday */}
          <div>
            <label className="text-gray-600 text-sm font-medium">Birthday</label>
            {isEdit ? (
              <input
                type="date"
                value={userData.dob}
                onChange={(e) => setUserData({ ...userData, dob: e.target.value })}
                className="mt-1 w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            ) : (
              <p className="mt-1 text-gray-700">{userData.dob}</p>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          {isEdit ? (
            <button
              onClick={updateUserProfileData}
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all shadow-md"
            >
              Save Changes
            </button>
          ) : (
            <button
              onClick={() => setIsEdit(true)}
              className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary-dark transition-all shadow-md"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
