import React from "react";
import { NavLink } from "react-router-dom";
import BreadCumbs from "../../BreadCumbs";

const Hitesh = () => {
  return (
    <div>
      <BreadCumbs />
      <div>
        Hitesh Yz Ahe
        <button>
          <NavLink to="/hitesh/kopal">chad kopal vr</NavLink>
        </button>
        <button>
          <NavLink to="/hitesh/yz">No response back</NavLink>
        </button>
      </div>
    </div>
  );
};

export default Hitesh;
