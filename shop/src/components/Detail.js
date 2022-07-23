import { useState } from "react";

import "../assets/css/detail.css";

export default function Detail() {
  let [item, setItem] = useState({
    p_id: 1,
    brand: "diptyque",
    brandImg:
      "https://www.trndf.com/news/data/20190729/p1065571185271202_891_thum.jpg",
    brandInfo:
      "파리의 생 제르망 34번가 거리의 부티크였던 이름을 딴 브랜드로 '두 패널로 만들어진 예술품' 이라는 뜻을 가진 그리스어 입니다.",
    type: "best",
    title: "diptyque paris Do Son Eau de Parfum",
    price: "165,000",
    src: "https://user-images.githubusercontent.com/45249021/180386117-b1c3a275-66be-4fd0-af29-51384f4fa4ee.png",
    description:
      "파리의 생 제르망 34번가 거리의 부티크였던 이름을 딴 브랜드로 '두 패널로 만들어진 예술품' 이라는 뜻을 가진 그리스어 입니다.",
    detail: "",
    detailImage:
      "https://perfumegraphy.com/web/upload/NNEditor/20210908/b3617d260142e35e179b9e258ed12ea7.jpg",
    reviewCount: "513",
    grade: 4.8,

    deliveryFee: [
      "3,000원",
      "(제주도를 포함한 도서/산간지역은 추가 배송비 5,000원)",
    ],
    deliveryTip: "해당 브랜드 제품으로만 90,000 원 이상 구매시 무료배송",
    volume: ["75ml"],
  });

  return (
    <div className="page-section">
      <div className="brand-wrap">
        <div className="brand-img">
          <img src={item.brandImg} />
        </div>
        <div className="brand-info">
          <h2>{item.brand}</h2>
          <span>{item.brandInfo}</span>
        </div>
      </div>
      <div className="detail-top">
        <div className="main-img">
          <img src={item.src} />
        </div>

        <div className="detail-info">
          <h2>{item.title}</h2>
          <div className="review">
            <img
              className="star"
              src="https://user-images.githubusercontent.com/45249021/180614434-a5bd49e2-a35e-4d3a-9c36-ac72965448ee.png"
            />
            <span className="grade">{item.grade}</span>
            <span className="count"> &#40;{item.reviewCount}&#41; </span>
          </div>

          <span className="price">
            <b>{item.price}</b> &#8361;
          </span>

          <div className="delivery">
            <div className="fee">
              <span className="title">배송비</span>
              <div>
                {item["deliveryFee"].map((content, index) => {
                  return (
                    <span className="description" key={index}>
                      {content}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="tip">
              <span className="title">무료 배송 조건</span>
              <span className="description">{item.deliveryTip}</span>
            </div>
          </div>
          <p className="about">{item.description}</p>
        </div>
      </div>
      <div className="detail-body">
        <img src={item.detailImage} />
      </div>
    </div>
  );
}

function Des() {
  return <span>설명</span>;
}
