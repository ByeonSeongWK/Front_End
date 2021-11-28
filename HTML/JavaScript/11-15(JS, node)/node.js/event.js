/**********************[ 이벤트 루프 ]*************************/
const events = require("events"); // <-- 이것도 하나의 '모듈'이다.

// [시스템 이벤트]
// process 객체는 노드에서 항상 사용할 수 있는 객체
// on()과 emit() 메소드는 객체를 생성하거나 모듈을 가져오지 않아도 바로 사용할 수 있습니다.
// on() 메소드를 호출하면서 이벤트 이름을 exit로 지정하면 내부적으로 프로세스가 끝날 때를 알 수 있습니다.

// 이벤트 관련 메소드를 사용할 수 있는 EventEmitter 객체를 만든다.
const eventEmitter = new events.EventEmitter();

const connectHandler = function connected() {
  // 3.
  console.log("연결 성공!");
  eventEmitter.emit("data_received");
};

// connection 이벤트와 connectHandler 핸들러와 연결
eventEmitter.on("connection", connectHandler); // 2.

// 4.
// data_receive 이벤트와 익명함수와 연결
eventEmitter.on("data_received", () => {
  console.log("데이터 수신!");
});

eventEmitter.emit("connection"); // 1.
console.log("프로그램을 종료합니다."); // 5.
