import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../assets/css/header.css";
function Header() {
  let cartData = useSelector((state) => state.stock);

  useEffect(() => {
    console.log(cartData.length);
  });

  return (
    <header>
      <h1>
        <Link to="/">SHOP</Link>
      </h1>
      <Link to="/cart">
        <div className="cart">
          <span>Cart</span>

          <span className="cart-num">{cartData.length}</span>
        </div>
      </Link>
      <style jsx="true">{`
        header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .cart {
          display: flex;
          align-items: center;
        }

        .cart-num {
          margin-left: 8px;
          color: #f76707;
          font-size: 13px;
        }
      `}</style>
    </header>
  );
}

export default Header;
