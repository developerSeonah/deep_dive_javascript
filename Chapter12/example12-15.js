// 재귀 함수

/*
함수가 자기 자신을 호출하는 것을 재귀 호출
recursive call

재귀함수는 자기 자신을 호출하는 행위 
즉 재귀 호출을 수행하는 함수
*/

function countdown(n){
    for(var i = n; n >=0; i --) console.log(i);
}

countdown(10);

// 재귀 함수
function countdown(n){
    if(n<0)return;
    console.log(n);
    countdown(n-1); //재귀 호출
}
countdown(10);

///////////////////////

function factorial(n){
    if(n<=1) return 1;
    retrun n * factorial(n-1);
}

console.log(factorial(0)); // 0!= 1
console.log(factorial(1)); // 1!= 1
console.log(factorial(2)); // 2!= 2*!= 2
console.log(factorial(3)); // 3!= 3*2*1 = 6
console.log(factorial(4)); // 4!= 4*3*2*1* = 24
console.log(factorial(5)); // 5!= 5*4*3*2*1 = 120


////////////////////////

var factorial = function foo(n){
    // 탈출 조건 :  n이 1이히 일 때 재귀 호출을 멈춘다
    if(n<=1) return 1;
    // 함수를 가리키는 식별자로 자기 자신을 재귀호출
    return n* factorial(n-1);

    // 함수 이름으로 자기 자신을 재귀 호출할 수도 있다
    // console.log(factorial == foo )//true
    // return n * foo (n-1)
}

console.log(factorial(5));

///////////////////////

function factorial(n){
    if(n<=1) return 1;

    var res = n;
    while(--n) res *= n;
    return res;
}

console.log(factorial(0)); // 0!= 1
console.log(factorial(1)); // 1!= 1
console.log(factorial(2)); // 2!= 2*!= 2
console.log(factorial(3)); // 3!= 3*2*1 = 6
console.log(factorial(4)); // 4!= 4*3*2*1* = 24
console.log(factorial(5)); // 5!= 5*4*3*2*1 = 120















