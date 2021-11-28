const http = require("http");
// node.js에서 가장 기본적이고 중요한 서버 모듈
// HTTP 웹 서버르 생성하는 것과 관련된 모든 기능을 담당

const hostname = "127.0.0.1"; // 기본서버주소
const port = 3000; // 서버에서 인터넷에 접속하는 라인 또는 길

const server = http.createServer((req, res) => {
  // http 모듈의 createServer() 메소드를 사용하여 server 객체를 생성한다.
  // req -> request 객체 클라이언트가 서버에게 전달하는 메세지(정보)를 담는 객체.
  // res -> response 객체 서버에서 클라이언트로 응답 메세지를 전송시켜주는 객체.

  res.statusCode = 200; // 서버 접속이 성공일때
  res.setHeader("Content-Type", "text/plain"); // writeHead() : 응답 헤더를 작성
  /********** MIME 형식 ***********
   * text/plain : 일반적인 text파일
   * text/html  : html 형식 파일
   * text/css   : css 형식 파일
   * text/xml   : xml 형식 파일
   * image/jpeg : jpeg 이미지 파일
   * image/png  : png 이미지 파일
   * video/mepg : mpeg 동영상 파일
   * audio/mp3  :  mp3 음악 파일
   *******************************/

  res.end("Hello World"); // end() :  응답 본문을 작성
});

server.listen(port, hostname, () => {
  // listen() : 서버를 실행하고 클라이언트를 기다림.
  console.log(`Server running at http://${hostname}:${port}/`);
}); // close() : 형식을 종료
