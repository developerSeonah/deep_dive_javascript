function add(x,y) { 
    return x + y ;
}

//함수 참조
//consoel.dir은 console.log와는 달리
// 함수 객체의 프로퍼티까지 출력한다.
// 단, Node.js 환경에서는 console.log와 같은 결과가 출력된다

console.dir(add);
//  f add(x, y)

console.log(add(2,5));
// 7