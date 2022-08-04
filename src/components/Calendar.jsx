import React from 'react';
import DashNavbar from './DashNavbar';

const Calendar = () => {
  return (
    <div className="flex h-screen w-full bg-gradient-to-br from-[#A9A9A9] to-[#3860A4] ">
      <DashNavbar dashboard="font-bold" />
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold text-[#ffffff] pb-2 mb-4 border-b">
          Calendar
        </h1>
        <div className="p-1 bg-[#ffffff3a]"></div>
      </div>
    </div>
  );
};

export default Calendar;
