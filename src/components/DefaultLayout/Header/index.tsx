import React from 'react'

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  return (
    <header className="sticky left-0 top-0 bg-blue-800 shadow-lg drop-shadow-lg h-20 text-[22px]   xl:text-[40px] ">
        <div className="w-full h-full flex items-center justify-center">
            <h1 className='text-white  '>University Of Eastern Philippines</h1>
        </div>
    </header>
  )
}

export default Header
