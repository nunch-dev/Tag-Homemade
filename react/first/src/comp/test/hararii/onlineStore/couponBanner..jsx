import React, { useState } from "react";
import "./onlineStore.css"

const CouponBanner = () => {
  const coponGet = () => {
    alert("축하해요! 25% 할인 쿠폰을 받았습니다! 쿠폰 입력창에 CoponCopon 을 입력하세요.");
  }
  const closeBanner = (e) => {
   e.stopPropagation();
   //이벤트가 캡처링/버블링 단계에서 더 이상 전파되지 않도록 방지
    setViesble(false);
  }
  const [viesble, setViesble] = useState(true);
  //조건부 처리를 위해서 useState를 가져옴 true일때만 랜더링 

  return viesble ? (<div className="banner" onClick={coponGet}> 여기를 클릭해서 쿠폰을 받아가세요! 25% 할인 찬스!!
    <button onClick={closeBanner}>닫기</button>
  </div>) : null;
}

export default CouponBanner