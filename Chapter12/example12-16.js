// 중첩 함수

/*

중첩 함수 또는 내부 함수
nested function / inner function
    함수 내부에 정의된 함수

외부 함수
outer function
    중첩 함수를 포함하는 함수는 외부 함수

중첩 함수는 외부 함수 내부에서만 호출
일반적으로 중첩 함수는 자신을 포함하는 외부 함수를 돕는 헬퍼 함수 역할
*/

function outer(){
    var x = 1;

    // 중첩 함수
    function inner(){
        var y = 2;
        console.log(x + y); //3
    }
    
    inner();
}

outer();