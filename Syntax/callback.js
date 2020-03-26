// function a(){
//     console.log('A');
// }
var a = function(){//익명함수
    console.log('A');
}

function slowfunc(callback){
    
    callback();
    console.log('C');
}
console.log('B');
slowfunc(a);
console.log('D');