const http = require("http");
const { title } = require("process");
// 화살표 함수  : ↓ - function(req, res) 대신 아래처럼 표현
http //           ↓
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(
      '<!DOCTYPE html><html lang = "en"><head><meta charset = "UTF-8"><title>http 모듈 테스트</title></head><body></body></html>'
    );
  })
  .listen(3000, () => {
    console.log("서버 실행중...");
  });
