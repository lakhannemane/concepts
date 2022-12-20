import React from "react";

const BasicFilter = ({ filter, setFilter }) => {
  return (
    <span>
      serch : {""}
      <input
        type="text"
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </span>
  );
};

export default BasicFilter;
