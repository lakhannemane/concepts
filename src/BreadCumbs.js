import React from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import ElementData from "./Route/Route";

function BreadCumbs() {
  const currentPathName = useLocation().pathname;

  const navigate = useNavigate();

  const currentPathname2 = currentPathName.split("/").filter((x) => x);
  console.log(currentPathname2, "jndjkf");
  const goes = (name) => {
    navigate(`${name}`);
  };

  return (
    <div>
      <Link to="/">Home</Link>
      {currentPathname2.length > 0 ? (
        <Link onClick={() => navigate("/")}>Home /</Link>
      ) : (
        <span>home/</span>
      )}
      {currentPathname2.map((ele, index) => {
        const routeTo = `/${currentPathname2.slice(0, index + 1).join("/")}`;

        const IsLast = index === currentPathname2.length - 1;

        console.log("==================== ", index);
        console.log(routeTo, "routeTo");
        console.log(IsLast, "islast");
        console.log("=============");
        return IsLast ? (
          <span>{ele}</span>
        ) : (
          <Link to={`${routeTo}`}>{ele}/</Link>
        );
      })}
    </div>
  );
}

export default BreadCumbs;
