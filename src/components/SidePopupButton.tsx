import React from "react";
import { GiDeliveryDrone } from "react-icons/gi"; // Example icon

interface SidePopupButtonProps {
  text: string;
  postion: string;
}

const SidePopupButton = ({ text, postion }: SidePopupButtonProps) => {
  return (
    <a
      href="#"
      target=""
      rel="noopener noreferrer"
      aria-label={text}
      style={{ top: postion, zIndex: 50 }}
      className={`group fixed right-4 transform -translate-y-1/2 flex items-center 
                 bg-red-600 text-white w-12 h-12 rounded-full justify-center transition-all 
                 duration-300 group-hover:duration-300 
                 hover:w-48 hover:rounded-l-full hover:px-1 hover:bg-red`}
    >
      {/* Icon - Visible when not hovered, fades out when hovered */}
      <GiDeliveryDrone
        className="absolute text-xl transition-opacity duration-200 ease-in-out
                   group-hover:opacity-0"
      />

      {/* Text - Hidden initially, fades in when hovered, disappears BEFORE the button shrinks */}
      <span
        className="absolute opacity-0 translate-x-5 scale-95 text-sm text-white
                   transition-all duration-300 ease-in-out group-hover:delay-100
                   group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100
                   group-hover:transition-opacity"
      >
        {text}
      </span>
    </a>
  );
};

export default SidePopupButton;
