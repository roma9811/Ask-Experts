"use strict"
/*work1*/
const season1 =(spring) => {
    if(spring > 10 && spring < 24){
        return "Spring temperature: " + spring;
    }
}
const season2 =(summer) => {
    if(summer > 20 && summer < 40){
        return "Summer temperature: " + summer;
    }
}
const season3 =(autumn) => {
    if(autumn > 5 && autumn < 16){
        return "Autumn temperature: " + autumn;
    }
}
const season4 =(winter) => {
    if(winter > -5 && winter < 10){
        return "Winter temperature: " + winter;
    }
}
const callSeason=(season,temperature) =>{
    switch(season){
        case "spring":
        return season1(temperature);
        break;
        case "summer":
        return season2(temperature);
        break;
        case "autumn":
        return season3(temperature);
        break;
        case "winter":
        return season4(temperature);
        break;
        default:
        return "Invalid season";
    }   
}
console.log(callSeason("spring",20));
console.log(callSeason("summer",30));
console.log(callSeason("autumn",10));
console.log(callSeason("winter",9));

/*work2*/
for (let i = -5; i < 40; i++){
    if(i > 10 && i < 24){
        console.log("Spring",i);
    }else if(i > 20 && i < 40){
        console.log("Summer",i);
    }else if (i > 5 && i < 16){
        console.log("Autumn",i);
    }else if(i > -5 && i < 10){
        console.log("winter",i);
    }else{
        console.log("invalid season");
    }
}