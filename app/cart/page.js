import age from "./data.js";

export default function Cart() {
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem />
      <CartItem />
    </div>
  );
}

//Component 만드는ㄴ 법
//1. function(){}
//2. return(축약할 긴 HTML)
//3. <CartItem/> 사용

//component 종류
//1. server component : 아무곳에나 쓰면 서버 컴포넌트
// -> html안에 js사용 불가 (useState, usetEffect 사용 불가능)
// -> 로딩속도 빠름, 검색엔진 노출 유리

//2. client component : 'use client' 사용
// -> js 사용 가능 (useState, useEffect 사용 가능!)
// -> 로딩 느림(javascript, hydration필요!)

//hydration : html유저에게 보낸 후에 자바스크립트로 html 다시 읽고 분석하는 일!

function CartItem() {
  return (
    <div className="cart-item">
      <p>상품명</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
