// 다양한 함수의 형태

// 즉시 실행 함수
(function(){
    var a = 3;
    var b = 5;
    return a*b;
}());
// 즉시 실행 함수는 단 한 번만 호출되면 다시 호출할수 없다
// 익명 함수를 사용하는 것이 일반적

(function foo(){
    var a = 3;
    var b = 5;
    return a * b;
}())

foo()
// ReferenceError: foo is not defined
// 즉시 실행 함수를 다시 호출 할 수 없다

// 즉시 실행 함수는 반드시 () 그룹 연사자로 감싸야한다.
function () {

}(); //SyntaxError:Function statements require a function name

function foo(){

}();// SytaxError:unexpted tookem')'

console.log(typeof(function f(){})); // function
console.log(typeof(function(){})); // function

////////////////////

(function(){

}());

(function(){

})();

!function(){

}();

+function(){

}();

////////////////////

// 즉시 실행 함수도 일반 함수 처럼 값을 반환할 있다

var res = (function(){
    var a = 3;
    var b = 5;
    return a * b;
}());

console.log(res); // 15


// 즉시 실행 함수에도 일반 함수 처럼 인수를 전달할 수 있다

res = (function(a,b){
    return a * b;
}(3,5));

console.log(res);









