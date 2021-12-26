/*
 * 객체의 타입을 정의할 때에는 object라고 선언해도 됨.
 * 만약 User 객체의 안에 name, age라는 속성이 있다고 가정하자
 * 이때 User.name에 접근하려면 object라는 타입을 선언해도 에러가 남 => User라는 object안에 name이라는 속성이 있는지 보장할 수 없기 때문
 * 에러를 해결하기 위해서는 { name: string; age: number; }의 식으로 모든 속성의 타입을 선언해 주어야 한다.
 * 그러나 속성이 2개가 아닌 5개 이상이라면? 더 많다면? 보기도 불편하고 중복이 된다는 문제도 있다.
 * 따라서 interface 아니면 type 둘 중 하나를 선언하여 중복성을 없앤다.
 */

interface User {
    name: string;
    age: number;
}

// 인터페이스 활용 - 변수
var mimi: User = {
    name: 'mimi',
    age: 30
}


// 인터페이스 활용 - 함수(인자)
function getUser(user: User) {
    return user;
}


// 인터페이스 활용 - 함수(구조)
interface SumFunction {
    (a: number, b: number): number;
}

let sum: SumFunction;
sum = function(a, b){
    return a + b;
}


// 인터페이스 활용 - 인덱싱
interface StringArray {
    [index: number]: string;
}
let arr: StringArray = ['a', 'b', 'c']
// arr[0] = 10 => error!


// 인터페이스 활용 - 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp;
}

let obj: StringRegexDictionary = {
    // sth: /abc/
    num : /[0-9]/,
    NaN : /[^0-9]/
}

Object.keys(obj).forEach(function(value){})


// 인터페이스 확장(상속)
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    language: string;
}

let kiki: Developer = {
    name: 'kiki',
    age: 25,
    language: 'TypeScript'
}