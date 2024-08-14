const fs=require("fs");

function write(){
    let content="hello i am overriding your file";
    fs.writeFile("a.txt",content,function(err){
        if(err){
            console.log(err);
        }
        console.log("file has been written succussfully");
    })
    console.log("operation started");
    let ans = 0;
    for (let i = 0; i < 2000000000; i++) {
      ans += i;
    }
    console.log("done operation " + ans);
    console.log("excute immediatly");
}

write();