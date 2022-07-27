import React, { useState } from "react";
import Cards from "./Cards";
import BusinessCard from "./BusinessCard";

const BusinessBord = () => {
    const [Cardlist, setCardlist] = useState([...Cards]);
    const [RaffleList, setRaffleList] = useState([]);
    const [randomcard, setrandomcard] = useState([]);
    const Raffle = () => {
        const RaffleNum = Math.floor(Math.random() * Cardlist.length);
        if (RaffleList.length === 3) { window.alert(`당첨자는 ${RaffleList[0]} , ${RaffleList[1]} , ${RaffleList[2]} 입니다`) };
        setrandomcard(Cardlist[RaffleNum]);
        setRaffleList([...RaffleList, Cardlist[RaffleNum].name]);
        setCardlist(Cardlist.filter((e) => e.name !== Cardlist[RaffleNum].name));
    }

    return (
        <div>
            <button onClick={Raffle}>추첨!!!!</button>
            {RaffleList.length > 0 && <BusinessCard {...randomcard} />}
        </div>)
}
export default BusinessBord