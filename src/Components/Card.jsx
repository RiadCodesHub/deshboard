import React from "react";
import PropTypes from "prop-types";

const Card = ({ icon, listIcon, title, text }) => {
  return (
    <div className="bg-white w-full overflow-hidden sm:max-w-[200px] min-h-[150px] flex flex-col justify-between shadow-lg rounded-xl p-6">
      {/* Top Row: Icon and Options */}
      <div className="flex justify-between items-center">
        <span className="text-gray-600">{icon || <span>🔳</span>}</span>
        <span className="text-gray-400">{listIcon || <span>⋮</span>}</span>
      </div>
      {/* Title */}
      <h1 className="text-lg font-bold text-gray-900 truncate">{title}</h1>
      {/* Text */}
      <p className="text-sm text-gray-600">{text}</p>
    </div>
  );
};

Card.propTypes = {
  icon: PropTypes.element,
  listIcon: PropTypes.element,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

Card.defaultProps = {
  icon: null,
  listIcon: null,
};

export default Card;
