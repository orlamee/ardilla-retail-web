import React from "react";

interface FloatingLabelInputProps {
  id: string;
  label: string;
  type: string;
}

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
  id,
  label,
  type,
}) => {
  return (
    <div className="mb-4 relative">
      <input
        type={type}
        id={id}
        className="border outline-none border-[#F3F4F6] text-[#D1D5DB] text-[12px] rounded-[4px] px-3 pb-3 pt-6 w-full bg-[#fff] dark:bg-gray-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#240552] peer"
        placeholder=" "
      />
      <label
        htmlFor={id}
        className="absolute text-[13px] text-[#D1D5DB] duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-3 peer-focus:text-[#D1D5DB] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingLabelInput;
