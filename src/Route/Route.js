import Hitesh from "../Component/Hitesh/Hitesh";
import Kopal from "../Component/Hitesh/Kopal";
import RandomPage from "../Component/Hitesh/RandomPage";
import Yz from "../Component/Hitesh/Yz";

const ElementData = [
  {
    path: "home",
    element: "home",
  },
  {
    path: "Dashboard",
    element: "Dashboard",
  },
  {
    path: "Contact",
    element: "contact",
  },

  {
    path: "ok",
    element: "ok",
  },
  {
    path: "ok/newOk",
    element: "NewOk",
  },

  {
    path: "ok/newOk/Okk",
    element: "okkk",
  },
  {
    path: "sn",
    element: "sn",
  },
  {
    path: "sn/snk",
    element: "snk",
  },
  {
    path: "prakash",
    element: "prakash",
  },

  {
    path: "prakash/bhakti",
    element: "Bhakti",
  },
  {
    path: "hitesh",
    element: <Hitesh />,
  },

  {
    path: "hitesh/:yz",
    element: <Yz />,
  },
  {
    path: "hitesh/yz/:random",
    element: <RandomPage />,
  },
  {
    path: "pache",
    element: "pache",
  },
  {
    path: "pache/priya",
    element: "priya jamdade",
  },
];

export default ElementData;
