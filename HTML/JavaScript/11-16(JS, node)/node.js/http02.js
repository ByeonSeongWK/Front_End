const http = require("http");
const fs = require("fs");

// 화살표 함수  : ↓ - function(req, res) 대신 아래처럼 표현
http //           ↓
  .createServer((req, res) => {
    // [response 객체]
    // 서버에서 클라이언트로 응답 메세지를 전송시켜주는 객체이다.
    // writeHead() : 응답 헤더를 작성
    // end() : 응답 본문을 작성
    fs.readFile("test.html", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(data);
      }
    });
  })
  .listen(3000, () => {
    console.log("서버 실행중...");
  });
