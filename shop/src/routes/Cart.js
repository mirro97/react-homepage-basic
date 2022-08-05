import { useDispatch, useSelector } from "react-redux";
import Button from "../components/styled/Button";
import { removeItem } from "../store";

export default function Cart() {
  let cartData = useSelector((state) => state.stock);

  // dispatch 는 store.js 로 요청을 보내주는 함수이다.
  let dispatch = useDispatch();

  return (
    <div>
      <h1>쇼핑 카트</h1>
      <section>
        <div className="t-header">
          <div>
            <input type="checkbox" />
          </div>
          <div>상품 정보</div>
          <div>수량</div>
          <div>주문금액</div>
          <div>배송비</div>
        </div>
        <div className="t-body">
          {cartData.map((item, index) => {
            return (
              <div className="t-row">
                <div>
                  <input type="checkbox" />
                </div>
                <div>
                  <img className="brand-img" src={item.img} alt="상품 이미지" />
                  <span>{item.brand}</span>
                </div>
                <div>{item.num}</div>
                <div>{item.cost}</div>
                <div>
                  <span>{item.deliveryFee}</span>
                  {item.deliveryTip
                    ? item.deliveryTip.map((tip) => {
                        <span>{tip}</span>;
                      })
                    : ""}
                </div>
              </div>
            );
          })}
        </div>
        <Button
          variants="grayblue"
          children="삭제"
          onClick={() => {
            dispatch(removeItem());
          }}
        />
      </section>
      <style jsx="true">
        {`
          .t-header {
            display: flex;
            width: 100%;
          }

          .t-header > div,
          .t-body > div {
            padding: 10px 13px;
            width: 100%;
          }

          .t-body {
            width: 100%;
            display: flex;
            flex-direction: column;
          }

          .t-body .t-row {
            display: flex;
            width: 100%;
          }

          .t-row > div {
            width: 100%;
          }

          .t-body > .brand-img {
            width: 100px;
          }
        `}
      </style>
    </div>
  );
}
