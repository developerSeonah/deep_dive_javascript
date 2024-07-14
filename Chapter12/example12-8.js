//  Function 생성자 함수로 생성 하는 방식

var add = new Function('x','y','return x + y');

console.log(add(2,5)); // 7

 //////////////////////


 var add1 = (function(){
    var a = 10;
    return function(x, y){
        return x+y+a;
    };
 }());

 console.log(add1(1,2)); //13

 var add2 = (function(){
    var a= 10;
    return new Function('x', 'y', 'return x + y + a');
 }());

 console.log(add2(1,2)); 
 // ReferendceError : a is not defined


// 함수 표현식으로 생성한 함수와 
// Function 생성자 함수로 생서안 함수는
// 동일하게 동작하지 않는다.


