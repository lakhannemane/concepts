import React from "react";
import { Link } from "react-router-dom";
import BreadCumbs from "../../BreadCumbs";

const Yz = () => {
  return (
    <div>
      <BreadCumbs />
      <button>
        go to random page <Link to="/hitesh/yz/random">random Page</Link>
      </button>
    </div>
  );
};

export default Yz;
