var f = function add(x, y){
    return x + y;
}

function add(x,y){
    return x + y ;
}

var add = function(x,y){
    return x + y;
}

var add  = new Function('x','y' , 'return x + y');

var add = (x,y) => x+y;