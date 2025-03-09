import React from "react";
import PropTypes from "prop-types";

const LargeCard = ({ text, amount, percent }) => {
  return (
    <div className="bg-white overflow-hidden w-full flex-grow min-w-[200px] min-h-[100px] flex-col justify-around shadow-lg rounded-xl p-4">
      {/* Card Title */}
      <h1 className="text-sm font-bold text-gray-800">{text}</h1>
      {/* Amount and Percent Section */}
      <div className="flex justify-between items-baseline">
        <span className="text-2xl font-bold text-gray-900">{amount}</span>
        <span
          className={`${
            percent < 3 ? "bg-red-300 text-red-800" : "bg-green-300 text-green-800"
          } text-xs w-12 flex items-center justify-center py-1 px-2 rounded-lg`}
        >
          {percent > 0 ? `+${percent}%` : `${percent}%`}
        </span>
      </div>
    </div>
  );
};

LargeCard.propTypes = {
  text: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
};

export default LargeCard;
