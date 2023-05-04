import age from "./data.js";

//부모 컴포넌트 -> 자식 컴포넌트 데이터 전달 : props 사용!
//역방향 전송 불가능!

export default function Cart() {
  let 장바구니 = ["Tomatoes", "Pasta"];
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem food={장바구니[0]} />
      <CartItem food={장바구니[1]} />
    </div>
  );
}

function CartItem(props) {
  return (
    <div className="cart-item">
      <p>{props.food}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
