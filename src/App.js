// import NewComponent from "./components/NewComponent";
import Button from "./Button/index";
import Card from "./Card/index";

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
      <h3>New Beginning ❤️‍🔥 React</h3>
      <p>React is javascript library for making UI.</p>
      {/* <NewComponent /> */}
      <Button text="First" buttonStyle=" global-btn primary-btn" /> <br />{" "}
      &nbsp;<span></span> <br />
      <Button text="second" buttonStyle="global-btn secondary-btn" /> <br />
      &nbsp;<span></span> <br />
      <Button text="tertary" buttonStyle="global-btn tertary-btn" />
      <Button text="tertary" buttonStyle="global-btn decent-btn" />
      <br />
      &nbsp;<span></span> <br />
      <Card content="content" datecard="Cardstyledate" />
    </div>
  );
}

export default App;
