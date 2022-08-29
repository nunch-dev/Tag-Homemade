import React from "react";

const ProductsTable = (props) => {
    // NOTE discount는 여기서 쿠폰을 가리키니 discount 라는 네이밍보다 coupon으로 쓰는게 더 좋아보임
    // NOTE + 아래의 discounts 함수와도 중복되지 않게 사용
    const { category, item, inStockOnly, discount } = props;

    const stockFilter = inStockOnly ? item.filter(item => item.stocked) : item;
    // NOTE discounts -> discountPrice
    const discountPrice = (price) => {
        if (discount === "CoponCopon") {
            return (price - price / 4).toFixed(2)
        } else {
            return price
        }
    }
    return (<> 
            <tr>
                <td >
                    {category}
                </td>
            </tr>
            {stockFilter.map((item, idx) => {
                return <tr key={idx}>
                    <td>{item.names}</td>
                    <td>{discountPrice(item.price)}</td>
                    <td>{item.stock}</td>
                </tr>
            })}
        </>
    )
}

export default ProductsTable