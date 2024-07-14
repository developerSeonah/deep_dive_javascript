// 화살표 함수

const add = (x, y) => x+y;
 
console.log(add(2,5)); //7

// 화살표 함수는 항상 익명함수로 정의

////////////////

// 함수 선언문
function add(x,y){
    return x+y;
}

// 함수 호출
// 인수 1과 2가 매개변수 x와 y에 순서대로 할당되고 함수 몸체의 문들이 실행된다
var result = add(1,2);

/*
함수가 호출되면 함수 몸체내에서
암묵적으로 매개변수가 생성되고 일반 변수와 마찬가지로 
****undefined 로 초기화된 이후 인수가 
순서대로 할당된다.
*/

function add(x,y){
    console.log(x,y); //2, 5
    return x + y;
}

add(2, 5);

console.log(x,y); //ReferenceError: x is not defined
// add 함수의 매개변수 x,y는 함수 몸체 내부에서만 참조할 수 있다

/////////////

function  add(x,y){
    return x + y ;
} 
console.log(add(2,5)); //NaN

////////////

function add(x,y){
    return x + y;
}
console.log(add(2,5,10)); // 7
// 초과된 인수가 그냥 버려지는 것 아니다
// 모든 인수는 암묵저긍로 arguments 객체의 프로퍼티오 보관.

function add(x,y){
    console.log(arguments);
    // Arguments(3)[2,5,1,callee:f,Symbol(Symbol.iteratro): f]
    return x+ y;
}
add(2, 5, 10);
