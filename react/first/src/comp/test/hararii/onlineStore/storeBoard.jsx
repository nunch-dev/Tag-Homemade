import React from "react";
import "./onlineStore.css";
import ProductsTable from "./productTable";

const StoreBoard = (props) => {

    const { products, fillters, discount } = props;
    const targetproducts = products.filter(p => p.names === fillters.text);
    //원래 있었던 products에서 필터로 가져온 text값으로 필터를 돌린다. 그리고 
    //fillters의 값은 계속 변한다. 
    const filtetproducts = targetproducts.length > 0 ? targetproducts : products;

    // const SportingGoods=products.filter(v => v.category==="Sporting Goods")
    // const Electronics=products.filter(v => v.category==="Electronics")
    //필터를 통해 카테고리로 나눈다. 그러나 이건 제대로된 지속 가능한 컨포넌트가 아니다.
    //만약 우리가 들어올 카테고리를 모른다면 어떻게 만들 것인가? 그것이 문제다. 확장성이 떨어짐

    const result = filtetproducts.reduce((acc, cur) => {
        // reduce 빈 요소를 제외하고 배열 내에 존재하는 각 요소에 대해 callback 함수를 한 번씩 실행
        if (acc.hasOwnProperty(cur.category)) {
            //acc는 누산기 산술 논리연산을 위한 임시 기억 장소
            //hasOwnProperty 객체 안에 특정 프로퍼티가 있는지를 블리언값으로 나타냄.
            //key(category)를 가지고 있는 케이스, 배열에 추가 해주기만 하면 된다. 
            return {
                ...acc,
                [cur.category]: [...acc[cur.category], cur]
            }
        } else {
            //새로운 category로 키가 없다. key를 설정해 줘야한다.
            return {
                ...acc,
                [cur.category]: [cur]
            }
        }
    }, {})


    const keys = Object.keys(result)
    //객체의 속성 이름(key)들을 일반적인 반복문과 동일한 순서로 순회되는 열거하여 배열로 반환

    return (<table className="base">
        <thead></thead>
        <tbody>
            <tr>
                <td>상품명</td>
                <td>가격</td>
                <td>재고수량</td>
            </tr>
            {keys.map((key, idx) =>
                <ProductsTable
                    category={key}
                    item={result[key]}
                    //result[key]에서 key는 배열의 인덱스와 같다.인덱스는 숫자일 필요가 없으며
                    // "Sporting Goods"여도 상관없다. 위의 Object.keys(result)로 같은 key 값끼리 모아줬으니까.
                    //인덱스는 "Sporting Goods"와 Electronics로 되어있다. 
                    key={idx}
                    inStockOnly={fillters.inStockOnly}
                    discount={discount} />)}
        </tbody>
    </table>)
}

export default StoreBoard