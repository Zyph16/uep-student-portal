'use client'
import { useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import Header from "@/components/DefaultLayout/Header";
import useStorage from "@/utils/useStorage";
import { toast } from "@/utils/toast";
import { apiUsers } from "@/utils/api";
import { tokenValue } from "@/utils/utility";
import { useAuth } from "@/utils/AuthContext";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [schoolyear, setSchoolYear] = useState('');
  const [semester, setSemester] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [birthdate, setbirthdate] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = async () => {
    if (username && birthdate) {
      const token = await tokenValue();
      try {
        
        const response = await apiUsers(token).post('/api/users/login', {
          username: username,
          password: birthdate // Send the birthdate as the password
        });
  
        if (response.data.token) {
          // Store the JWT token
          localStorage.setItem('authToken', response.data.token);
          toast("Login successful!", "", "success");
        } else {
          toast("Invalid login credentials", "", "warning");
        }
      } catch (error) {
        console.error("Login error", error);
        toast("Error during login", "", "error");
      }
    } else {
      toast("Please provide both username and password!", "", "warning");
    }
  };
  
  

  return (
    <div className="relative min-h-screen bg-gray-100">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="h-screen max-h-[calc(100vh-80px)] flex justify-center items-start bg-gray-100 overflow-hidden">
        <div className="w-[500px] h-[550px] mt-10 xl:mt-40 border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark rounded-lg">
          <div className="w-full p-4 sm:p-12.5 xl:p-10">
            <div className="flex justify-center text-[22px] font-bold text-black dark:text-white sm:text-title-xl2">
              <Image
                src="/images/logo/UEP-Logo.png"
                alt="Description of the image"
                width={150}
                height={120}
              />
            </div>

            <div>
              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                  Username
                </label>
                <div className="relative">
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    placeholder="Student ID"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                  Password
                </label>
                <div className="relative">
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
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
                  Don’t have an account?{" "}
                  <Link href="/Signup" className="text-primary">
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
