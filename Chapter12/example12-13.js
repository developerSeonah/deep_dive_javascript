// 참조에 의한 전달과 외부 상태의 변경

// pass by value
// 원시값에 의한 전달

//pass by reference
// 객체는 참조에 의한 전달

// 매개변수 또한 타입에 따라 값에 의한 전달
// 참조에 의한 전달 방식을 그대로 따름

function chageVal(primitive, obj){
    primitive += 100;
    obj.name = 'kim';
}

// 외부 상태
var num = 100;
var person = {name : 'Lee'};

console.log(num); // 100
console.log(person); //{name: "Lee"}

/*
** 원시값은 값 자체가 복사되어 전달되고 객체는 참조 값이 복사되어 전달
*/
changeVal(num,person);

// 원시 값은 원본이 훼손되지 않는다
console.log(num); // 100

// 객체는 원본이 훼손된다
console.log(person) // {name:"Kim"}


/*

해결방법
객체를 불변 객체로 만들어 사용하는 것
객체의 복사본을 새롭게 생성하는 비용은 들지만 객체를 마치 원시 값처럼 변경 불가능한 값으로 동작하게 만드는 것

****이를 통해 객체의 상태 변경을 원천봉쇄하고 객체의 상태 변경이 필요한 경우에는 객체의 방어적 복사를 통해 원본 객체를 완전히 복제,

**즉 깊은 복사를 통해 

새로운 객체를 생성하고 재할당을 통해 교체

*/