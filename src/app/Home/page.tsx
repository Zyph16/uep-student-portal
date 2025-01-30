"use client"

import React from "react";
import DefaultLayout from '@/components/DefaultLayout/DefaultLayout'
import PageTransition from '@/components/PageTransition'
const page = () => {
  
  return (
    <>
     <PageTransition>
        <DefaultLayout>
        <div className=" z-1 flex flex-col gap-10">
      <table className="min-w-full table-auto bg-white p-10 shadow-lg">
        <thead className="text-bold">
          <tr>
            <th className="border px-4 py-2">Subject Code</th>
            <th className="border px-4 py-2">Subject Name</th>
            <th className="border px-4 py-2">Schedule Time</th>
            <th className="border px-4 py-2">Grade</th>
            <th className="border px-4 py-2">Year</th>
            <th className="border px-4 py-2">Semester</th>
          </tr>
        </thead>
        <tbody>
          
            <tr >
              <td className="border px-4 py-2">221033</td>
              <td className="border px-4 py-2">Math</td>
              <td className="border px-4 py-2">7:00am-8:00am</td>
              <td className="border px-4 py-2">1.25</td>
              <td className="border px-4 py-2">1st Year</td>
              <td className="border px-4 py-2">1st Semester</td>
            </tr>

            <tr >
              <td className="border px-4 py-2">234533</td>
              <td className="border px-4 py-2">Ethics</td>
              <td className="border px-4 py-2">10:00am-1:00pm</td>
              <td className="border px-4 py-2">1.50</td>
              <td className="border px-4 py-2">1st Year</td>
              <td className="border px-4 py-2">1st Semester</td>
            </tr>

            <tr >
              <td className="border px-4 py-2">224455</td>
              <td className="border px-4 py-2">Web</td>
              <td className="border px-4 py-2">8:00am-9:00am</td>
              <td className="border px-4 py-2">1.25</td>
              <td className="border px-4 py-2">1st Year</td>
              <td className="border px-4 py-2">1st Semester</td>
            </tr>

            <tr >
              <td className="border px-4 py-2">221453</td>
              <td className="border px-4 py-2">Capstone</td>
              <td className="border px-4 py-2">2:00pm-4:00pm</td>
              <td className="border px-4 py-2">1.50</td>
              <td className="border px-4 py-2">1st Year</td>
              <td className="border px-4 py-2">1st Semester</td>
            </tr>

            <tr >
              <td className="border px-4 py-2">227033</td>
              <td className="border px-4 py-2">Object Oriented Programming</td>
              <td className="border px-4 py-2">7:00am-8:00am</td>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">1st Year</td>
              <td className="border px-4 py-2">1st Semester</td>
            </tr>

            <tr >
              <td className="border px-4 py-2">221033</td>
              <td className="border px-4 py-2">Math</td>
              <td className="border px-4 py-2">7:00am-8:00am</td>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">1st Year</td>
              <td className="border px-4 py-2">1st Semester</td>
            </tr>

            <tr >
              <td className="border px-4 py-2">221033</td>
              <td className="border px-4 py-2">PATHFit 1</td>
              <td className="border px-4 py-2">6:00am-7:00am</td>
              <td className="border px-4 py-2">1.50</td>
              <td className="border px-4 py-2">1st Year</td>
              <td className="border px-4 py-2">1st Semester</td>
            </tr>
    
        </tbody>
      </table>

      <table className="min-w-full table-auto bg-white shadow-lg">
        <thead className="text-bold">
          <tr>
            <th className="border px-4 py-2">Subject Code</th>
            <th className="border px-4 py-2">Subject Name</th>
            <th className="border px-4 py-2">Schedule Time</th>
            <th className="border px-4 py-2">Grade</th>
            <th className="border px-4 py-2">Year</th>
            <th className="border px-4 py-2">Semester</th>
          </tr>
        </thead>
        <tbody>
          
            <tr >
              <td className="border px-4 py-2">330133</td>
              <td className="border px-4 py-2">Rizal</td>
              <td className="border px-4 py-2">7:00am-8:00am</td>
              <td className="border px-4 py-2">1.25</td>
              <td className="border px-4 py-2">1st Year</td>
              <td className="border px-4 py-2">2nd Semester</td>
            </tr>

            <tr >
              <td className="border px-4 py-2">334511</td>
              <td className="border px-4 py-2">System Integrative Programming</td>
              <td className="border px-4 py-2">7:30am-10:00am</td>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">1st Year</td>
              <td className="border px-4 py-2">2nd Semester</td>
            </tr>

            <tr >
              <td className="border px-4 py-2">331003</td>
              <td className="border px-4 py-2">Networking</td>
              <td className="border px-4 py-2">11:00am-1:00pm</td>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">1st Year</td>
              <td className="border px-4 py-2">2nd Semester</td>
            </tr>

            <tr >
              <td className="border px-4 py-2">221033</td>
              <td className="border px-4 py-2">Math</td>
              <td className="border px-4 py-2">7:00am-8:00am</td>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">1st Year</td>
              <td className="border px-4 py-2">1st Semester</td>
            </tr>

            <tr >
              <td className="border px-4 py-2">221033</td>
              <td className="border px-4 py-2">Math</td>
              <td className="border px-4 py-2">7:00am-8:00am</td>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">1st Year</td>
              <td className="border px-4 py-2">1st Semester</td>
            </tr>

            <tr >
              <td className="border px-4 py-2">221033</td>
              <td className="border px-4 py-2">Math</td>
              <td className="border px-4 py-2">7:00am-8:00am</td>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">1st Year</td>
              <td className="border px-4 py-2">1st Semester</td>
            </tr>

            <tr >
              <td className="border px-4 py-2">221033</td>
              <td className="border px-4 py-2">Math</td>
              <td className="border px-4 py-2">7:00am-8:00am</td>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">1st Year</td>
              <td className="border px-4 py-2">1st Semester</td>
            </tr>
    
        </tbody>
      </table>



      
    </div>
        </DefaultLayout>
     </PageTransition>
    </>
  )
}

export default page
