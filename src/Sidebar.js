import React from "react";
import { FaPlus, FaFire, FaPoo } from "react-icons/fa";
import { BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { Gi3DGlasses } from "react-icons/gi";
export default function Sidebar() {
  return (
    <div className="fixed top-0 left-0 flex flex-col h-screen w-16 m-0 bg-gray-900 text-white shadow-lg">
      <SidebarIcon icon={<Gi3DGlasses size="28" />} />
      <SidebarIcon icon={<BsGearFill size="28" />} />
      <SidebarIcon icon={<FaPlus size="28" />} />
      <SidebarIcon icon={<FaPoo size="28" />} />
    </div>
  );
}

const SidebarIcon = ({ icon, text = "tooltip ⚡️" }) => {
  return (
    <div className="sidebar-icon group">
      {icon}
      <span className="tooltip group-hover:scale-100">{text}</span>
    </div>
  );
};
