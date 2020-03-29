var members = ['leejunyoung','kookminji','kdkdkdkd']
console.log(members[1]);

var i= 0;
while(i < members.length){
    console.log('array loop', members[i]);
    i = i + 1;
}
var roles = {
    'programmer':'leejunyoung',
    'designer':'kookminji',
    'manager':'kdkdkdkd'
} 
console.log(roles.designer);

for(var name in roles){//딕셔너리의 key 와 value
    console.log('object => ',name, 'value => ', roles[name]);
}