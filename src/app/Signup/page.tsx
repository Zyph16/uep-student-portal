'use client'
import { useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import Header from "@/components/DefaultLayout/Header";
import PageTransition from "@/components/PageTransition";
import { toast } from "@/utils/toast"
import {  ArrowDropDown } from "@mui/icons-material";
import { apiUsers } from "@/utils/api"
import { tokenValue} from "@/utils/utility"

import { FaRegEye,FaRegEyeSlash  } from "react-icons/fa";
import axios from "axios";



  
interface Signup{
    user_id: string;
    birthdate: string;
    username: string;
    password: string;
}
  
export default function Signup() {

  
  const [birthdate, setbirthdate] = useState('');
  const [username, setusername] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [homeCollege, setHomeCollege] = useState('');
  const [homeDepartment, setHomeDepartment] = useState('');
  const trimmedDate = birthdate.replace(/-/g, '');

  
    const togglePasswordVisibility = () => {
      setShowPassword((prevState) => !prevState);
    };

    const itemsHomeCollege= [
        { label: 'College Of Agriculture, Fisheries and Natural Resources' },
        { label: 'College Of Arts and Communication' },
        { label: 'College Of Business Administration' },
        { label: 'College Of Criminal Justice' },
        { label: 'College Of Education' },
        { label: 'College Of Engineering' },
        { label: 'College Of Law' },
        { label: 'College Of Nursing and Allied Health Sciences' },
        { label: 'College Of Science' },
        { label: 'College Of Veterinary Medicine' },
      ];
  
      let itemsHomeDepartment: { label: string }[] = [];
        if (homeCollege === 'College Of Agriculture, Fisheries and Natural Resources') {
          itemsHomeDepartment = [
            { label: 'Agribusiness and Agricultural Economics' },
            { label: 'Agricultural Education' },
            { label: 'Animal Science' },
            { label: 'Crop and Soil Science' },
            { label: 'Fisheries' },
            { label: 'Forestry' },
            { label: 'Plant Protection' },
          ];
        } else if (homeCollege === 'College Of Arts and Communication') {
          itemsHomeDepartment = [
            { label: 'Languages and Communication' },
            { label: 'Physical Education' },
            { label: 'Social Science' },
          ];
        } else if (homeCollege === 'College Of Business Administration') {
          itemsHomeDepartment = [
            { label: 'Cooperative' },
            { label: 'Accountancy' },
            { label: 'Entrepreneurship' },
            { label: 'Hospitality Management' },
            { label: 'Human Resource Management' },
            { label: 'Business Economics' },
            { label: 'Marketing Management' },
            { label: 'Cooperative Management' },
          ];
        } else if (homeCollege === 'College Of Criminal Justice') {
          itemsHomeDepartment = [
            { label: 'Criminology' },
          ];
        } else if (homeCollege === 'College Of Education') {
          itemsHomeDepartment = [
            { label: 'Elementary Teacher Education' },
            { label: 'Laboratory Elementary School' },
            { label: 'Laboratory High School' },
            { label: 'Physical Education' },
            { label: 'Secondary Teacher Education' },
            { label: 'Technology and Livelihood' },
            { label: 'Technology and Livelihood Education' },
          ];
        } else if (homeCollege === 'College Of Engineering') {
          itemsHomeDepartment = [
            { label: 'Electrical Engineering' },
            { label: 'Mechanical Engineering' },
            { label: 'Engineering Technology' },
            { label: 'Civil Engineering' },
            { label: 'Agricultural And Biosystems Engineering' },
          ];
        } else if (homeCollege === 'College Of Law') {
          itemsHomeDepartment = [
            { label: 'Law' },
          ];
        } else if (homeCollege === 'College Of Nursing and Allied Health Sciences') {
          itemsHomeDepartment = [
            { label: 'Nursing' },
            { label: 'Radiologic Technology' },
          ];
        } else if (homeCollege === 'College Of Science') {
          itemsHomeDepartment = [
            { label: 'Biological Science' },
            { label: 'Environmental Science' },
            { label: 'Information Technology' },
            { label: 'Mathematics' },
            { label: 'Physical Science' },
          ];
        } else if (homeCollege === 'College Of Veterinary Medicine') {
          itemsHomeDepartment = [
            { label: 'Basic Veterinary Medicine' },
            { label: 'Basic Veterinary Medicine / Meat Technology' },
            { label: 'Basic Veterinary Sciences' },
            { label: 'Clinical Sciences' },
            { label: 'Meat Technology' },
            { label: 'Paraclinical and Clinical Sciences' },
          ];
        }
        
        const handleSubmit = async () => {
          if (username && birthdate) {
            const AddUser = {
              username,
              birthdate,
              password: trimmedDate, // Using birthdate as password
            };
        
            try {
              const token = await tokenValue();
        
              // Base URL from .env
              const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
        
              if (!API_BASE_URL) {
                console.error("API base URL is missing. Check your .env file.");
                return;
              }
        
              // Check if username already exists
              let isDuplicateUsername = false;
        
              try {
                const response = await apiUsers(token).get(`${API_BASE_URL}/api/users/${username}`);
                if (response.data.exists) {
                  isDuplicateUsername = true;
                }
              } catch (error) {
                console.error("Error checking username:", error);
              }
        
              if (isDuplicateUsername) {
                toast("Account already exists. Please see the administrator.", "", "warning");
                return;
              }
        
              // Register the user
              await apiUsers(token).post(`${API_BASE_URL}/api/users/register`, AddUser);
        
              toast("Successfully Saved!", "", "success");
            } catch (error) {
              if (axios.isAxiosError(error)) {
                toast(`${error.response?.data?.message || "Error"}`, "", "error");
              } else if (error instanceof Error) {
                toast(`Error: ${error.message}`, "", "error");
              } else {
                toast("An unexpected error occurred", "", "error");
              }
              console.error("Error:", error);
            }
          } else {
            toast("Please fill all required fields!", "", "warning");
          }
        };
        
 
  return (
   <>
        <PageTransition>
        <div   className="relative min-h-screen bg-gray-100">
       {/* <div className="absolute inset-0 z-[-1]">
        <img
          src="/images/background/background.jpg" 
          alt="Background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",  
          }}
        />
      </div> */}
     
      <Header  />
      

      <div className="h-screen  max-h-[calc(100vh-80px)] flex  justify-center items-start bg-gray-100 overflow-auto  ">

     
      <div className="w-[500px] h-[700px]   xl:mt-15 border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark rounded-lg">
        

    <div className="w-full p-4 sm:p-12.5 xl:p-10">
    <div className="flex justify-center text-[22px] font-bold text-black dark:text-white sm:text-title-xl2">
    <Image
  src="/images/logo/UEP-Logo.png"
  width={100} // Change based on actual dimensions
  height={100} // Adjust accordingly
  style={{ width: "auto", height: "auto" }}
  alt="UEP Logo"
>

        </Image>

      </div>

      <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                      Home College
                  </label>
                  <div className="relative">
                    <label className="w-full block">
                      <select
                        value={homeCollege}
                        onChange={(e) => setHomeCollege(e.target.value)}
                        className="w-full appearance-none rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-6 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      >
                        <option value="">Select Home College</option>
                        {itemsHomeCollege.map((item, index) => (
                          <option key={index} value={item.label}>
                            {item.label}
                          </option>
                        ))}
                      </select>
                      <span className="absolute right-4 top-4 pointer-events-none">
                        <ArrowDropDown className="text-[23px] text-stone-600" />
                      </span>
                    </label>
                    </div>
</div>

<div className="mb-4">
    <label className="mb-2.5 block font-medium text-black dark:text-white">
        Home Department
    </label>
    <label className="w-full block">
    <div className="relative">
        <select
            value={homeDepartment}
            onChange={(e) => setHomeDepartment(e.target.value)} 
            className="w-full appearance-none rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-6 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
        >
            <option value="">Select Home Department</option>
            {itemsHomeDepartment.map((item, index) => (
                <option key={index} value={item.label}>
                    {item.label}
                </option>
            ))}
        </select>
        <span className="absolute right-4 top-4 pointer-events-none">
            <ArrowDropDown className="text-[23px] text-stone-600" />
        </span>
    </div>
    </label>
</div>

      <div>
        <div className="mb-4">
          <label className="mb-2.5 block font-medium text-black dark:text-white">
            Username
          </label>
          <div className="relative">
            <input
              value={username}
              onChange={(e) => setusername(e.target.value)}
              type="text"
              placeholder="Student ID"
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
            <span className="absolute right-4 top-4">
              <svg
                className="fill-current"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.5">
                  <path
                    d="M19.2516 3.30005H2.75156C1.58281 3.30005 0.585938 4.26255 0.585938 5.46567V16.6032C0.585938 17.7719 1.54844 18.7688 2.75156 18.7688H19.2516C20.4203 18.7688 21.4172 17.8063 21.4172 16.6032V5.4313C21.4172 4.26255 20.4203 3.30005 19.2516 3.30005ZM19.2516 4.84692C19.2859 4.84692 19.3203 4.84692 19.3547 4.84692L11.0016 10.2094L2.64844 4.84692C2.68281 4.84692 2.71719 4.84692 2.75156 4.84692H19.2516ZM19.2516 17.1532H2.75156C2.40781 17.1532 2.13281 16.8782 2.13281 16.5344V6.35942L10.1766 11.5157C10.4172 11.6875 10.6922 11.7563 10.9672 11.7563C11.2422 11.7563 11.5172 11.6875 11.7578 11.5157L19.8016 6.35942V16.5688C19.8703 16.9125 19.5953 17.1532 19.2516 17.1532Z"
                    fill=""
                  />
                </g>
              </svg>
            </span>
          </div>
        </div>

        <div className="mb-6">
          <label className="mb-2.5 block font-medium text-black dark:text-white">
            Password
          </label>
          <div className="relative">
            <input
              value={birthdate}
              onChange={(e) => setbirthdate(e.target.value)}
              type="date"
              placeholder="Birthday (YYYY-MM-DD)"
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
            <span
              className="absolute right-4 top-4 cursor-pointer text-gray-100"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <FaRegEye className="text-gray-100 opacity-55" size={20} />
              ) : (
                <FaRegEyeSlash className="text-gray-50 opacity-55" size={20} />
              )}
            </span>
          </div>
        </div>

        <div className="mb-5 flex items-center justify-center">
          <button
            onClick={() => handleSubmit()}
            type="submit"
            className="inline-flex items-center w-22 h-10 justify-center rounded-md bg-blue-600 px-10 py-4 text-center font-medium text-white hover:bg-opacity-90"
          >
            Register
          </button>
        </div>

        <div className="mt-6 text-center">
                <p>
                  Already have an account?{" "}
                  <Link href="/Signin" className="text-primary">
                    Sign In
                  </Link>
                </p>
          </div>

       
      </div>
    </div>
  </div>
</div>

      
    </div>

        </PageTransition>
   </>
  );
}
