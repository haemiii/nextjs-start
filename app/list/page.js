// page만드는 법!!
// 폴더 생성후 파일 생성
// list폴더 생성 후 page.js 파일 생성
// /list 접속시 page.js의 html 전송됨!

import Image from "next/image";
// import tomato from "/public/tomato.png";

export default function List() {
  let 상품 = ["Tomatoes", "Pasta", "Coconut"];
  let array = [2, 3, 4];

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {상품.map((a, i) => {
        return (
          //return이 없으면 그냥 코드를 읽고 지나감!
          <div className="food" key={i}>
            <img src={`food${i}.png`} className="food-img"></img>
            {/* <Image src={tomato} className="food-img" /> */}
            <h4>{상품[i]} $40</h4>
          </div>
        );
      })}
    </div>
  );
}
