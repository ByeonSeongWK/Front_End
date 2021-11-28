const express = require("express");
const app = express();
const port = 3000;

// localhost : 3000
app.use((req, res) => {
  console.log("첫 번째 미들웨어 실행");
  res.redirect("http://www.naver.com");
});

app.listen(port, () => {
  console.log(`${port} 포트로 서버 실행중...`);
});