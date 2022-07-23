import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Main from "./routes/Main";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/All" element={<h1>전체 상품 보여주는 페이지</h1>} />
        <Route path="/women" element={<h1>여성 상품</h1>} />
        <Route path="/men" element={<h1>남성 상품</h1>} />
        <Route path="/event" element={<h1>EVENT</h1>} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
