// 함수 표현식
var add = function(x, y){
    return x + y;
}

console.log(add(2,5));

// 기명 함수 표현식
var add2 = function foo (x, y) {
    return x + y;
}

// 함수 객체를 가리키는 식별자로 호출
console.log(add2(2, 5));

//함수 이름으로 호출하면 ReferenceError가 발생한다.
// 함수 이름은 함수 몸체 내부에서만 유효한 식별자다.
conosole.log(foo(2,5)); // ReferenceError : foo is not defined



