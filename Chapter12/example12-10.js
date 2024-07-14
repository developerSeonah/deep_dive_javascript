// 인수 확인

function add(x,y){
    return x + y ;
}
console.log(add(2)); //NaN
console.log(add('a','b')); //'ab'

/*
1. 자바스크립트 함수는 매개변수와 인수 개수가 일치하는지 확인하지 않는다.

2. 자바스크립트는 동적 타입 언어이다
따라서 자바스크립트 함수는 매개변수의 타입을 사전에 지정할 수 없다.

*/


function add (x,y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new TypeError('인수는 모두 숫자 값이어야 합니다.')
    }
    return x+ y;
}
console.log(add(2));
// TypeError: 인수는 모두 숫자 값이어야 합니다.
console.log(add('a','b'));
// TypeError: 인수는 모두 숫자 값이어야 합니다.


////////////////////////////////

function add(a,b,c){
    a = a || 0;
    b = b || 0;
    c = c || 0;
    return a + b + c;
}

console.log(add(1,2,3)); //6
console.log(add(1,2)); //3
console.log(add(1)); //1
console.log(add()); //0

////////////////////////////

// 인수 체크 및 초기화를 간소화
function add(a=0,b=0,c=0){
    return a + b + c;
}

console.log(add(1,2,3)); //6
console.log(add(1,2)); //3
console.log(add(1)); //1
console.log(add()); //0
















