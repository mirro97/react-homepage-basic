import { useState } from "react";

import "../assets/css/bestproduct.css";
import bestItemList from "../assets/BestItemdata.js";

function BestProduct() {
  // eslint-disable-next-line
  let [bestItem, setBestItem] = useState(bestItemList);

  return (
    <section className="best-item-section">
      <h2>BEST ITEM</h2>
      <ul className="best-item-wrap">
        {bestItem.map(function (data, index) {
          return <BestCard key={index} item={data} />;
        })}
      </ul>
    </section>
  );
}

function BestCard(props) {
  return (
    <li className="best-item-box">
      <div className="best-product">
        <img src={props.item.src} alt="베스트 상품"></img>
      </div>
      <div className="description">
        <span className="bold">BEST</span>
        <span className="title">{props.item.title}</span>
        <span className="price">{props.item.price} &#8361;</span>
      </div>
    </li>
  );
}

export default BestProduct;
