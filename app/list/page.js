"use client";
import Image from "next/image";
import { useState } from "react";
// import tomato from "/public/tomato.png";

export default function List() {
  let 상품 = ["Tomatoes", "Pasta", "Coconut"];
  let [수량, 수량변경] = useState([0, 0, 0]);

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
            <span> {수량[i]} </span>
            <button
              onClick={() => {
                let copy = [...수량];
                copy[i]++;
                수량변경(copy);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                let copy = [...수량];
                copy[i]--;
                수량변경(copy);
              }}
            >
              -
            </button>
          </div>
        );
      })}
    </div>
  );
}
