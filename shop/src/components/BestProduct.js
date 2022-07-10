import { useState } from "react";
import perfum from "../assets/images/향수.png";
import alcohol from "../assets/images/술.png";
import dress from "../assets/images/무지개옷.png";
import "../assets/css/bestproduct.css";

function BestProduct() {
  // eslint-disable-next-line
  let [bestItem, setBestItem] = useState([
    {
      type: "best",
      title: "diptyque paris Do Son Eau de Parfum",
      price: "165,000",
      src: perfum,
    },
    {
      type: "best",
      title: "Liefmans Cuvee Brut",
      price: "84,000",
      src: alcohol,
    },
    {
      type: "best",
      title: "RAINBOW DRESS",
      price: "265,000",
      src: dress,
    },
  ]);

  return (
    <section className="best-item-section">
      <h2>BEST ITEM</h2>
      <ul className="best-item-wrap">
        {bestItem.map(function (data, index) {
          return (
            <li className="best-item-box">
              <div className="best-product">
                <img src={data.src} alt="베스트 상품"></img>
              </div>
              <div className="description">
                <span className="bold">BEST</span>
                <span className="title">{data.title}</span>
                <span className="price">{data.price} &#8361;</span>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default BestProduct;
