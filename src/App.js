// import NewComponent from "./components/NewComponent";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ElementData from "./Route/Route";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <button>
                {" "}
                <Link to="/hitesh"> go to hitesh</Link>
              </button>
            }
          />
          {ElementData?.map((ele) => (
            <Route path={ele.path} element={ele.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
