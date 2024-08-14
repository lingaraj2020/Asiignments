let counter=0;

function count(){
    console.log(counter);
    counter++;
    setTimeout(count,1000);
}
count();