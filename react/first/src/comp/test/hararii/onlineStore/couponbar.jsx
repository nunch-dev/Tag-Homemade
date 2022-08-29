import React, {useState} from "react";

// NOTE 오타 CoponBar -> CouponBar
const CouponBar = (props) => {
    const {discountUse} = props
    // NOTE couponbar ->couponBar lowerCamelCase 유지
    const [couponBar, setCouponBar] = useState("")

    // NOTE 일반적으로 form의 submit 함수는 onSubmit으로 네이밍을 짓는 경우가 많음
    const couponUses = (e) => {
        e.preventDefault();
        discountUse(couponBar);
    }

    // NOTE couponSearch -> onCouponSearch
    const onCouponSearch = (e) => {
        setCouponBar(e.target.value);
    }

    return (
      <form onSubmit={couponUses}>
          <input placeholder="coupon을 입력해주세요." onChange={onCouponSearch} />
          <input type="submit" value="쿠폰 입력"/>
      </form>)
}

export default CouponBar