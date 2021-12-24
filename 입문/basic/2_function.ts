// 함수 파라미터의 타입 정의
function sum(a: number, b: number) {
  return a + b;
}

// 함수 반환값의 타입 정의
function sum2(a, b): number {
  return a + b;
}

// 함수의 타입 정의
function add(a: number, b: number): number {
  return a + b;
}

add(10, 20);
// add(10, 20, 30)
// => 에러 JS에서는 에러 안 남.

// 함수의 옵셔널 파라미터
// 필요에 따라 인자를 넘길 수도 있고 안 넘길 수도 있음
function log(a: string, b?: string) {}
log("hello world");
log("hello world", "Hi");
