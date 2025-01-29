'use client'
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/DefaultLayout/Header";
import useStorage from "@/utils/useStorage"
import { toast } from "@/utils/toast"
import { apiUsers } from "@/utils/api"
import { tokenValue,  userImage } from "@/utils/utility"
import { useAuth } from "@/utils/AuthContext";
import { FaRegEye,FaRegEyeSlash  } from "react-icons/fa";



export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [schoolyear, setschoolyear] = useState('');
  const [semester, setsemester] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
  
    const togglePasswordVisibility = () => {
      setShowPassword((prevState) => !prevState);
    };


  const handleSubmit = async () => {
  try {
    const token = await tokenValue();

    // Make the API call
    const response = await apiUsers(token).post(
      `/api/Employees/login`,
      JSON.stringify({ username, password })
    );

    // Log the entire response for debugging
    console.log("API Response:", response);

    // Check if the response was successful
    if (response?.data) {
      const mockApiResponse = {
        token: "InitialToken",
      };
      login(
        response.data.user.id,
        response.data.user.empid,
        mockApiResponse.token,
        schoolyear,
        semester
      );

      toast("You have successfully logged in", "", "success");
      window.location.href = "/HR/PersonalInformation";
    } else {
      // If response data is invalid
      toast("You have entered the wrong username or password", "", "warning");
    }
  } catch (error) {
    // Handle network or API errors
    console.error("Error during login:", error);
    toast("You have entered the wrong username or password", "", "warning");
  }
};

  return (
    <div className="">
      {/* Pass the required props to Header */}
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      

      <div className="h-screen max-h-[calc(100vh-80px)] flex  justify-center items-start bg-gray-100 overflow-hidden   ">
      <div className="w-[500px] h-[450px] mt-10 xl:mt-40 border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark rounded-sm">

    <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
      <h2 className="mb-9 text-[22px] font-bold text-black dark:text-white sm:text-title-xl2">
        Sign in to Human Resource System
      </h2>

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
              placeholder="Enter your lastname.firstname"
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
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              placeholder="YYYYMMDD"
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
            Login
          </button>
        </div>

        <div className="mt-6 text-center">
          <p>
            Don’t have any account?{" "}
            <Link href="/HR/Signup" className="text-primary">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

      
    </div>
  );
}
