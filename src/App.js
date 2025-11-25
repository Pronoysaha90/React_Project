import "./App.css";
import Navber from "./components/navber";
import Info from './components/info';

function App() {
  return (
    <>
     <Navber/ >
     <Info name = "Pronoy" age = "24" />
     <Info name = "Anik" age = "27" />
     <Info name = "Abir" age = "28" />
     
    </>
  );
}

export default App;
