const express = require("express");
const bodyParser = require("body-parser"); // body-parser : post방식으로 데이터를 전달 받기 위해 사용
const { Router } = require("express");

const app = express();
const port = 3000;

const router = express.Router();

// body-parser를 이용해 application/x-www-form-unlencoded 파싱
// http://localhost:3000/?userid=apple&userpw=1111 (전송방식이 get이 아니기 때문에 데이터를 받을 수 없음)
app.use(bodyParser.urlencoded({ extended: false }));

// http://localhost:3000/member/login -> post
router.route("/member/login").post((req, res) => {
  console.log("/member/login 호출!");
});
// http://localhost:3000/member/regist -> post
router.route("/member/regist").post((req, res) => {
  console.log("/member/regist 호출!");
});
// http://localhost:3000/member/about -> get
router.route("/member/about").get((req, res) => {
  console.log("/member/about 호출!");
});

app.use("/", router);

// 에러가 발생했을때
app.all("*", (req, res) => {
  res.status(404).send("<h2>페이지를 찾을 수 없습니다.</h2>");
});

app.listen(port, () => {
  console.log(`${port} 포트로 서버 실행중...`);
});
