// import NewComponent from "./components/NewComponent";
import Button from "./Button/index";
import Card from "./Card/index";
import BasicTable from "./Component/BasicTable";
import Filtering from "./Component/Filtering";
import SortingTable from "./Component/SortingTable";

function App() {
  const menuList = [
    { name: "Dashboard", icon: "" },
    { name: "Farm", icon: "" },
    { name: "Alerts", icon: "" },
  ];
  const menuList2 = [
    { name: "Automate", icon: "" },
    { name: "Settings", icon: "" },
    { name: "Profile", icon: "" },
    { name: "Logout", icon: "" },
  ];
  return (
    <div className="App">
      <Filtering />
    </div>
  );
}

export default App;
