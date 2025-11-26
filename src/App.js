import "./App.css";
import Navber from "./components/navber";
import Info from "./components/info";
import MyText from "./components/textForm";

function App() {
  return (
    <>
      <div className="container">
        <Navber />
      </div>

      {/* <Info name = "Pronoy" age = "24" />
     <Info name = "Anik" age = "27" />
     <Info name = "Abir" age = "28" /> */}

      <div className="container">
        <MyText massage = "Massage" />
      </div>
    </>
  );
}

export default App;
