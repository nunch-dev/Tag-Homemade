import React from "react";

const ProductsTable = (props) => {
    const { category, item, inStockOnly, discount } = props;

    const stockFilter = inStockOnly ? item.filter(item => item.stocked) : item;
    const dicounts = (price) => {
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
                    <td>{dicounts(item.price)}</td>
                    <td>{item.stock}</td>
                </tr>
            })}
        </>
    )
}

export default ProductsTable