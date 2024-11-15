import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const MyProfile = () => {

    const [isEdit, setIsEdit] = useState(false)
    const [image, setImage] = useState(null) // Ensure the default state is null
    const { token, backendUrl, userData, setUserData, loadUserProfileData } = useContext(AppContext)

    // Function to update user profile data using API
    const updateUserProfileData = async () => {
        try {
            const formData = new FormData();
            formData.append('name', userData.name)
            formData.append('phone', userData.phone)
            formData.append('address', JSON.stringify(userData.address))
            formData.append('gender', userData.gender)
            formData.append('dob', userData.dob)

            // Append the image to the FormData only if it's defined
            if (image) {
                formData.append('image', image)
            }

            const { data } = await axios.post(backendUrl + '/api/user/update-profile', formData, { headers: { token } })

            if (data.success) {
                toast.success(data.message)
                await loadUserProfileData()
                setIsEdit(false)
                setImage(null) // Reset image after successful upload
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    return userData ? (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-white via-gray-100 to-white bg-fixed bg-center bg-cover">
            <div className="max-w-lg w-full bg-white p-8 rounded-xl shadow-xl">
                <div className="flex flex-col items-center">
                    {isEdit
                        ? <label htmlFor='image'>
                            <div className="relative cursor-pointer group">
                                {/* Ensure image is shown correctly */}
                                <img className="w-36 h-36 rounded-full transition-transform duration-300 transform group-hover:scale-105" 
                                     src={image ? URL.createObjectURL(image) : userData.image} alt="Profile" />
                                <img className="w-10 absolute bottom-12 right-12 opacity-70 group-hover:opacity-100 transition-opacity duration-300" 
                                     src={image ? '' : assets.upload_icon} alt="Upload" />
                            </div>
                            <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden />
                        </label>
                        : <img className="w-36 h-36 rounded-full shadow-lg" src={userData.image} alt="Profile" />
                    }

                    {isEdit
                        ? <input className="mt-4 bg-gray-100 text-2xl font-medium px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-400" 
                                 type="text" onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))} value={userData.name} />
                        : <p className="text-3xl font-semibold text-[#262626] mt-4">{userData.name}</p>
                    }
                </div>

                <hr className='bg-[#ADADAD] h-[1px] my-6' />

                <div>
                    <p className="text-[#464646] text-lg font-medium underline">CONTACT INFORMATION</p>
                    <div className="space-y-4 mt-3 text-[#363636]">
                        <div className="flex justify-between">
                            <p className="font-medium">Email id:</p>
                            <p className="text-blue-500">{userData.email}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="font-medium">Phone:</p>
                            {isEdit
                                ? <input className="bg-gray-100 px-4 py-2 rounded-md w-48 focus:outline-none focus:ring-2 focus:ring-indigo-400" 
                                         type="text" onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))} value={userData.phone} />
                                : <p className="text-blue-500">{userData.phone}</p>
                            }
                        </div>
                        <div className="flex justify-between">
                            <p className="font-medium">Address:</p>
                            {isEdit
                                ? <div>
                                    <input className="bg-gray-100 px-4 py-2 rounded-md mb-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400" 
                                           type="text" onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} 
                                           value={userData.address.line1} />
                                    <input className="bg-gray-100 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-400" 
                                           type="text" onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} 
                                           value={userData.address.line2} />
                                </div>
                                : <p className="text-gray-500">{userData.address.line1} <br /> {userData.address.line2}</p>
                            }
                        </div>
                    </div>
                </div>

                <div>
                    <p className="text-[#797979] text-lg font-medium underline mt-6">BASIC INFORMATION</p>
                    <div className="space-y-4 mt-3 text-[#363636]">
                        <div className="flex justify-between">
                            <p className="font-medium">Gender:</p>
                            {isEdit
                                ? <select className="bg-gray-100 px-4 py-2 rounded-md w-32 focus:outline-none focus:ring-2 focus:ring-indigo-400" 
                                          onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender}>
                                    <option value="Not Selected">Not Selected</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                                : <p className="text-gray-500">{userData.gender}</p>
                            }
                        </div>
                        <div className="flex justify-between">
                            <p className="font-medium">Birthday:</p>
                            {isEdit
                                ? <input className="bg-gray-100 px-4 py-2 rounded-md w-32 focus:outline-none focus:ring-2 focus:ring-indigo-400" 
                                         type="date" onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} value={userData.dob} />
                                : <p className="text-gray-500">{userData.dob}</p>
                            }
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex justify-center">
                    {isEdit
                        ? <button onClick={updateUserProfileData} className="px-8 py-3 rounded-full bg-primary text-white text-lg hover:bg-opacity-90 transition-all duration-300 shadow-md">Save Information</button>
                        : <button onClick={() => setIsEdit(true)} className="px-8 py-3 rounded-full bg-primary text-white text-lg hover:bg-opacity-90 transition-all duration-300 shadow-md">Edit Profile</button>
                    }
                </div>
            </div>
        </div>
    ) : null
}

export default MyProfile;
