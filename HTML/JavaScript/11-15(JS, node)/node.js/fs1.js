const fs = require("fs"); // 파일을 참조

// 파일을 비동기적으로 읽는다.
fs.readFile("text1.txt", "utf-8", (err, data) => {
  // 비동기식 함수 호출
  if (err) {
    console.log(err);
  } else {
    console.log(`비동기식으로 읽음 : ${data}`);
  }
});

// 동기식으로 함수 호출
const text = fs.readFileSync("text2.txt", "utf-8");
console.log(`동기식으로 읽음 : ${text}`);
