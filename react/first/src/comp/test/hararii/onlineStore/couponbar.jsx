import React, {useState} from "react";

const CoponBar = (props) => {
    const {discountUse} = props
    const [couponbar, setCouponbar] =useState("")

    const couponUses = (e) => {
        e.preventDefault()
        discountUse(couponbar)
    }
    const couponSearch=(e) =>{
        setCouponbar(e.target.value)

    }

    return (<form onSubmit={couponUses}>
        <input placeholder="coupon을 입력해주세요."  onChange={couponSearch} />
             <input type="submit" value="쿠폰 입력"/> 
    </form>)
}

export default CoponBar