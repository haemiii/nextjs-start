// page만드는 법!!
// 폴더 생성후 파일 생성
// list폴더 생성 후 page.js 파일 생성
// /list 접속시 page.js의 html 전송됨!

export default function List() {
  return (
    <div>
      <h4 className="title">상품목록</h4>
      <div className="food">
        <h4>상품1 $40</h4>
      </div>
      <div className="food">
        <h4>상품2 $40</h4>
      </div>
    </div>
  );
}
