import React from 'react'

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  return (
    <header className="sticky top0 bg-white-600 shadow-lg drop-shadow-lg h-20 ">
        <div className="w-full h-full flex items-center justify-center xl:text-[40px] sm:text-[15px]">
            <h1 className=''>University Of Eastern Philippines</h1>
        </div>
    </header>
  )
}

export default Header
