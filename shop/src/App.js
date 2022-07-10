import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import BestProduct from "./components/BestProduct";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Banner />
      <BestProduct />
    </div>
  );
}

export default App;
