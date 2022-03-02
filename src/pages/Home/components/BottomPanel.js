import React from "react";


const BottomPanel = () => {
  const stickyFooter = {
    position: "absolute",
    bottom: "0",
  };
  return (
    <div className="mt-1 border-round bg-bluegray-900 text-gray-100 p-3 flex justify-content-between lg:justify-content-center align-items-center flex-wrap">
      <div className="font-bold mr-4">🔥</div>
      <div className="align-items-center hidden lg:flex">
        <span className="line-height-3">
          Developed by Mohamed Amine Ben Ammar, Software engineer student
        </span>
      </div>   
      <div className="font-bold ml-4">🔥</div>
    </div>
  );
};

export default BottomPanel;
