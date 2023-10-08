import React from "react";

function SideBar({ isOpen }) {
  return (
    <div className="h-screen position-absolute z-10 bg-gray-700 border ">
      {isOpen && (
        <p className="text-white position-relative border">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          pariatur dolorum ex esse obcaecati repudiandae iusto unde quae autem,
          corrupti voluptatem illum adipisci voluptas nihil fugiat numquam
          labore vero similique!
        </p>
      )}
    </div>
  );
}

export default SideBar;
