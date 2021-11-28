const express = require("express");
const bodyParser = require("body-parser"); // body-parser : post방식으로 데이터를 전달 받기 위해 사용

const app = express();
const port = 3000;

// body-parser를 이용해 application/x-www-form-urlencoded 파싱
// localhost : 3000
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res) => {
  const userid = req.body.userid;
  const userpw = req.body.userpw;
  console.log(`paramId : ${userid}, paramPw : ${userpw}`);

  res.writeHead(200, { "content-type": "text/html;charset=utf8" });
  res.write("<h2>익스프레스 서버에서 응답한 메세지입니다.</h2>");
  res.write(`<p>아이디 : ${userid}</p>`);
  res.write(`<p>비밀번호 : ${userpw}</p>`);
  res.end();
});

app.listen(port, () => {
  console.log(`${port} 포트로 서버 실행중...`);
});
