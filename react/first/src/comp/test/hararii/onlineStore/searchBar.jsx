import React from "react";

const SearchBar = (props) => {
    const { text, inStockOnly } = props.fillters
    const textChange = (e) => {
        props.updatefilter(e.target.name, e.target.value)

    }
    const checkChange = (e) => { 
        props.updatefilter(e.target.name, e.target.checked)
    }
    return (
        <form>
            <input placeholder="search...." name={"text"} value={text} onChange={textChange} />
            <div>
                <input type="checkbox" id="stock" checked={inStockOnly} name={"inStockOnly"} onChange={checkChange} />
                <label htmlFor="stock">재고확인</label>
            </div>
        </form>)
}

export default SearchBar