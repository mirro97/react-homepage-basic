import { useParams } from "react-router-dom";
import "../assets/css/detail.css";

import itemListAll from "../assets/ItemListAll.js";
import BasicButton from "../components/styled/Button";

export default function Detail() {
  let item = itemListAll;
  let param = useParams();

  let detail = item[param.id];

  const onClick = () => {
    console.log("!확인");
  };

  return (
    <div className="page-section">
      <div className="brand-wrap">
        <div className="brand-img">
          <img src={detail.brandImg} alt={`${detail.brand}`} />
        </div>
        <div className="brand-info">
          <h2>{detail.brand}</h2>
          <span>{detail.brandInfo}</span>
        </div>
      </div>
      <div className="detail-top">
        <div className="main-img">
          <img src={detail.src} />
        </div>

        <div className="detail-info">
          <h2>{detail.title}</h2>
          <div className="review">
            <img
              className="star"
              src="https://user-images.githubusercontent.com/45249021/180614434-a5bd49e2-a35e-4d3a-9c36-ac72965448ee.png"
            />
            <span className="grade">{detail.grade}</span>
            <span className="count"> &#40;{detail.reviewCount}&#41; </span>
          </div>

          <span className="price">
            <b>{detail.price}</b> &#8361;
          </span>

          <div className="delivery">
            <div className="fee">
              <span className="title">배송비</span>
              <div>
                {detail["deliveryFee"].map((content, index) => {
                  return (
                    <span className="description" key={index}>
                      {content}
                    </span>
                  );
                })}
              </div>
            </div>
            {detail.deliveryTip !== "" ? (
              <div className="tip">
                <span className="title">무료 배송 조건</span>
                <span className="description">{detail.deliveryTip}</span>
              </div>
            ) : null}

            <div className="btn-wrap">
              {/* <BasicButton variants="white" children="장바구니 담기" /> */}
              <BasicButton
                variants="grayblue"
                children="구매하기"
                onClick={onClick}
              />
            </div>
          </div>
          <p className="about">{detail.description}</p>
        </div>
      </div>
      <div className="detail-body">
        <img src={detail.detailImage} />
      </div>
    </div>
  );
}

function Des() {
  return <span>설명</span>;
}
