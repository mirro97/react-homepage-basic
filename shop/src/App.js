import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Main from "./routes/Main";
import Detail from "./routes/Detail";
import Event from "./routes/Event";
import NotFoundPage from "./routes/404";
import Cart from "./routes/Cart";

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
        <Route path="/event" element={<Event />}>
          <Route path="current" element={<div>현재 진행중인 이벤트</div>} />
        </Route>
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
