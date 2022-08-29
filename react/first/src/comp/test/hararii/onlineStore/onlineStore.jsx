import React, { useState } from "react";
import "./onlineStore.css"
import StoreBoard from "./storeBoard";
import SearchBar from "./searchBar";
import CouponBanner from "./couponBanner.";
import CouponBar from "./couponbar";



const OnlineStore = () => {
    // NOTE 오타 수정 fillters -> filter
    // ~s 를 붙이는건 배열의 경우에 한함
    // NOTE Text -> text lowerCamelCase 유지
    const [filter, setFilter] = useState({ text: "", inStockOnly: false })
    // NOTE updatefilter -> updateFilter lowerCamelCase 유지
    const updateFilter = (key, value) => {
        setFilter({
            ...filter,
            [key]: value
        });
    }

    // NOTE SetDiscount -> setDiscount lowerCamelCase 유지
    const [discount, setDiscount] = useState("");
    const discountUse = (value) => {setDiscount(value)};

    const dataList = [
        { category: "Sporting Goods", price: 49.99, stock:3, stocked: true, names: "Football" },
        { category: "Sporting Goods", price: 9.99, stock:4, stocked: true, names: "baseball" },
        { category: "Sporting Goods", price: 29.99, stock:0,stocked: false, names: "basketball" },
        { category: "Electronics", price: 99.99, stock:10, stocked: true, names: "iPod Touch" },
        { category: "Electronics", price: 399.99, stock:0, stocked: false, names: " iPhone 5" },
        { category: "Electronics", price: 199.99,  stock:5, stocked: true, names: "Nexus 7" },
    ];

    return (<div>
        <CouponBanner />
        {/* NOTE fillters -> filter */}
        <StoreBoard filter={filter} discount={discount} products={dataList} />
        <SearchBar filter={filter} updatefilter={updateFilter} />
        <CouponBar discountUse={discountUse} />
    </div>)
}
export default OnlineStore