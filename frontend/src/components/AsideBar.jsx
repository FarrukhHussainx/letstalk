import React from "react";
import Users from "./Users";
import styles from "./scrollbar.module.css";

const AsideBar = () => {
  return (
    <div className="w-11/12 mx-auto p-2">
      <div className="w-full max-w-md mx-auto">
        <label className="relative block">
          <span className="sr-only">Search</span>
          <input
            type="text"
            placeholder="Search"
            className="block w-full border-b-2 border-gray-300 pl-3 pr-10 py-2 placeholder-gray-500 focus:border-[#117c11] rounded-md focus:outline-none focus:ring-0 sm:text-sm"
          />
          <span className="absolute inset-y-0 right-0 flex items-center pr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-5 w-5 text-gray-400"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </label>
      </div>

      <div className={`overflow-y-scroll h-96 mt-2 ${styles.customScrollbar}`}>
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
      </div>
    </div>
  );
};

export default AsideBar;
