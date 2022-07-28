import React, { useState } from "react";
import Cards from "./cards";
import BusinessCard from "./businessCard";

const BusinessBord = () => {
    const [cardList, setcardList] = useState([...Cards]);
    const [raffleList, setraffleList] = useState([]);
    const [randomCard, setrandomCard] = useState([]);
    const raffle = () => {
        const raffleNum = Math.floor(Math.random() * cardList.length);
        if (raffleList.length === 3) { window.alert(`당첨자는 ${raffleList}입니다`) };
        setrandomCard([...randomCard, cardList[raffleNum]]);
        setraffleList([...raffleList, cardList[raffleNum].name]);
        setcardList(cardList.filter((e) => e.name !== cardList[raffleNum].name));
    
    }

    return (
        <div>
            <button onClick={raffle}>추첨!!!!</button>
            {/* 1. 한장씩 보고 싶을때 */}
            {/* {raffleList.length > 0 && <BusinessCard {...randomCard[randomCard.length-1]} />} */}
            {/* {2.당첨된 모든 명함을 보고 싶을때} */}
            {randomCard.length > 0 && randomCard.map(random => <BusinessCard info={random} />)}
        </div>)
}
export default BusinessBord