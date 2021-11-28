const fs = require("fs"); // 파일을 참조
const data = "Hello Node.js !!!!!";

// 파일을 비동기적으로 쓴다.
fs.writeFile("text3.txt", data, "utf-8", (err) => {
  // 비동기식 함수 호출
  if (err) {
    console.log("에러 발생");
  } else {
    console.log("저장완료/비동기");
  }
});

// 파일을 동기적으로 쓴다.
// 동기식으로 함수 호출
const text = fs.writeFileSync("text4.txt", "utf-8");
console.log("저장완료/동기");
