import { useSelector } from "react-redux";

export default function Cart() {
  let cartData = useSelector((state) => state.stock);

  //   {
  //     p_id: 6,
  //     brand: "영리영리",
  //     title: "Foi ring, AMBER (YLCSSARI13AB)",
  //     option: "S 12-14호",
  //     num: 1,
  //     cost: "39,000",
  //     deliveryFee: "3000",
  //     deliveryTip: [
  //       "영리영리",
  //       "제품으로만 50,000원 이상 구매시 무료배송 됩니다.",
  //       "제주도를 포함한 도서/산간지역은 추가배송비 3,000",
  //     ],
  //     img: "https://img.29cm.co.kr/next-product/2021/12/13/65ea4509357d439a96e95b8a89be06d8_20211213172345.jpg?width=700",
  //   },

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
        <div className="t-body"></div>
      </section>
    </div>
  );
}
