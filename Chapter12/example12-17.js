//콜백 함수

// 어떤 일을 반복 수행하는 repeat함수

// n 만큼 어떤 일을 반복
function repeat1(n){
    // i를 출력
    for(var i = 0; i < n ; i++) console.log(i);
}
repeat(5);// 0 1 2 3 4 

// n만큼 어떤 일을 반복
function repeat2(n){
    for(var i =0; i < n; i++){
        // i가 홀수 일때만 출력
        if(i%2) console.log(i)
    }
}

repeat(5); // 1 3

//////////////////////

// 함수를 합성
// 함수의 변하지 않는 공통 로직은 미리 정의
// 경우에 따라 변경되는 로직은 추상화해서
// 함수 외부에서 함수 내부로 전달

// 외부에서 전달 받은 f를 n만큼 반복 호출
// 자바스크립트의 함수는 일급 객체이므로 함수의 매개변수를 통해 함수를 전달 받을 수 있다
function repeat(n,f){
    for(var i=0; i<n; i++){
        f(i); // i를 전달하면서 f를 호출
    }
}

var logAll = function(i){
    console.log(i);
}

// 반복 호출할 함수를 인수로 전달
repeat(5, logAll); // 0 1 2 3 4 

var logOdds = function(i){
    if(i%2) console.log(i);
};

// 반복 호출할 함수를 인수로 전달
repeat(5, logOdds); // 1 3 


/*

함수의 매개변수를 통해 
다른 함수의 내부로 전달되는 함수를
콜백함수
callback function

매개 변수를 통해
함수의 외부에서 콜백 함수를 전달받은 함수
고차 함수
higher-order function

*/


/*

고차 함수는 콜백 함수를 자신의 일부분으로 합성

고차함수는
매개변수를 통해
전달 받은 콜백함수의
호출 시점을 결정해서 호출

콜백함수는
고차함수에 의해 호출
이때
고차 함수는 
필요에 따라
콜백 함수에
인수를 전달 할 수 있다

*/

// 익명 함수 리터럴을 
// 콜백 함수로 고차 함수에 전달
// 익명 함수 리터럴은
// repeat 함수를 호출 할 때마다
// 평가되어 함수 객체를 생성
repeat(5, function(i){
    if(i%2)console.log(i);
}) // 1 3

// 콜백 함수를 전달 받은 함수가
// 자주 호출된다면 함수 외부에서
// 콜백함수를 정의한 후 함수 참조를
// 고차함수에 정달하는 편이 효율적

// logOdds 함수는 단 한번만 생성
var logOdds = function(i){
    if(i%2) console.log(i);
}
// 고차 함수에 함수 참조를 전달
repeat(5, logOdds);











