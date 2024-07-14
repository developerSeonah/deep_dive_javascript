// 반환문

function multiply(x,y){
    return x*y; // 반환문
    // return 키워드
}

// 함수 호출은 반환값으로 평가된다
// 함수 호출은 표현식이다.
// 함수 호출 표현식은 reuturn 키워드가 반환한 표현식의 평가 결과, 즉 반환값으로 평가
var result = multiply(3,5);
console.log(result); // 15

function multiply(x,y){
    return x*y;
    // 반환문 이후에 다른 무이 존재하면 그 문은 실행되지 않고 무시된다.
    console.log("실행되지 않는다");
}
console.log(multiply(3,5)); // 15

function foo(){
    return;
}

console.log(foo());// undefined
// 반환값으로 사용할 표현식을 명시적으로 지정하지 않으면 암묵적으로 undefined 반환

function foo(){

}
console.log(foo());
