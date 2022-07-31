import { configureStore, createSlice } from "@reduxjs/toolkit";

// useState 와 비슷한 역할
// createSlice({
//     name: 'state이름',
//     initialState:'값'
// })

let user = createSlice({
  name: "user",
  initialState: "kim",
});

let stock = createSlice({
  name: "user",
  initialState: [
    {
      p_id: 5,
      brand: "드롭드롭드롭",
      title: "소프트쉬폰 커튼 SAILING TO THE FOREST",
      option: "",
      num: 2,
      cost: "84,000",
      deliveryFee: "3000",
      deliveryTip: [
        "드롭드롭드롭",
        "제품으로만 100,000원 이상 구매시 무료배송 됩니다.",
      ],
      img: "https://img.29cm.co.kr/next-product/2022/04/19/a5c046a2373542888b69914f8b19ad56_20220419163911.jpg?width=700",
    },
    {
      p_id: 6,
      brand: "영리영리",
      title: "Foi ring, AMBER (YLCSSARI13AB)",
      option: "S 12-14호",
      num: 1,
      cost: "39,000",
      deliveryFee: "3000",
      deliveryTip: [
        "영리영리",
        "제품으로만 50,000원 이상 구매시 무료배송 됩니다.",
        "제주도를 포함한 도서/산간지역은 추가배송비 3,000",
      ],
      img: "https://img.29cm.co.kr/next-product/2021/12/13/65ea4509357d439a96e95b8a89be06d8_20211213172345.jpg?width=700",
    },
    {
      p_id: 7,
      brand: "ONE THING",
      title: "비건 병풀 추출물 300ml (대용량)",
      option: "",
      num: 1,
      cost: "16,000",
      deliveryFee: "무료배송",
      deliveryTip: [],
      img: "https://img.29cm.co.kr/next-product/2021/09/06/6bc2c12cdea34e8e80c85cd13d0042cb_20210906112043.jpg?width=700",
    },
  ],
});

export default configureStore({
  // state 등록
  reducer: {
    // 작명: user.reducer
    user: user.reducer,
    stock: stock.reducer,
  },
});
