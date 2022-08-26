import React, { useState } from "react";
import "./onlineStore.css"
import StoreBoard from "./storeBoard";
import SearchBar from "./searchBar";
import CouponBanner from "./couponBanner.";
import CoponBar from "./couponbar";



const OnlineStore = () => {
    const [fillters, setFillters] = useState({ Text: "", inStockOnly: false })
    const updatefilter = (key, value) => {

        setFillters({
            ...fillters,
            [key]: value
        })
    }
    const [discount, SetDiscount] = useState("");
    const discountUse = (value) => {SetDiscount(value)};

    const dataList = [
        { category: "Sporting Goods", price: 49.99, stock:3, stocked: true, names: "Football" },
        { category: "Sporting Goods", price: 9.99, stock:4, stocked: true, names: "baseball" },
        { category: "Sporting Goods", price: 29.99, stock:0,stocked: false, names: "basketball" },
        { category: "Electronics", price: 99.99, stock:10, stocked: true, names: "iPod Touch" },
        { category: "Electronics", price: 399.99, stock:0, stocked: false, names: " iPhone 5" },
        { category: "Electronics", price: 199.99,  stock:5, stocked: true, names: "Nexus 7" },
    ]


    return (<div>
        <CouponBanner />
        <StoreBoard fillters={fillters} discount={discount} products={dataList} />
        <SearchBar fillters={fillters} updatefilter={updatefilter} />
        <CoponBar discountUse={discountUse} />
    </div>)
}
export default OnlineStore