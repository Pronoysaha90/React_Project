import "./App.css";
import Navber from "./components/Navber";
import MyText from "./components/textForm";
import About from "./components/About";


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

      <div className="container">
        <About />
      </div>

    </>
  );
}

export default App;
