import React from "react";

const SearchBar = (props) => {
    const { text, inStockOnly } = props.filter;

    // NOTE 일반적으로 onXXX 처럼 element의 이벤트를 사용하는 경우
    // on~~를 붙여서 주로 사용함
    // NOTE textChange -> onTextChange
    const onTextChange = (e) => {
        props.updatefilter(e.target.name, e.target.value)
    }

    // NOTE checkChange -> onCheckChange
    const onCheckChange = (e) => {
        props.updatefilter(e.target.name, e.target.checked)
    }
    return (
        <form>
            <input placeholder="search...." name={"text"} value={text} onChange={onTextChange} />
            <div>
                <input type="checkbox" id="stock" checked={inStockOnly} name={"inStockOnly"} onChange={onCheckChange} />
                <label htmlFor="stock">재고확인</label>
            </div>
        </form>)
}

export default SearchBar