let current=new Date();
let hours=current.getHours();
let minutes=current.getMinutes();
let seconds=current.getSeconds();

console.log(`${hours}:${minutes}:${seconds}`);

function setformate(hours,minutes,seconds){
    let period="AM";
    if(hours>=12){
        period="PM";
    }

    if(hours>12){
        hours-=12;
    }

    if(hours==12){
        hours=0;
    }
    return(`${hours}:${minutes}:${seconds} ${period}`);
}

console.log(setformate(hours,minutes,seconds));