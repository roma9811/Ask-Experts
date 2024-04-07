  "use strict"

for(let sum = 1; sum <= 5; sum++){
    console.log(sum);
}
let test = 1;
do{
    console.log(test);
    test++;
}while(test <= 5);

let num = 0;
while(num < 3){
    console.log(`Number:${num}`);
    num++;
} 
for(let i =1;i<=5;i++){
    if(i==3){
        continue
    }console.log(i); 
}
function checkAge(age){
    if(age>=18){
        return true;
    }
    }
let age=prompt("How old are you?");
if(checkAge(age)){
    alert("Welcome")
}else{
    alert("You can't access the site")
}