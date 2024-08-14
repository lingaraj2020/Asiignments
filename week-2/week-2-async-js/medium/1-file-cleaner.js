const fs=require("fs");

function clean(filepath){
        fs.readFile(filepath,"utf-8",function(err,data){
            if(err){
                console.log(err);
            }
            data=data.replace(/\s+/g," ").trim();
            fs.writeFile(filepath,data,function(err){
                if(err){
                    console.log(err);
                }
            })
            console.log("cleaned file");
        })
        console.log("show me first!");
}

clean("a.txt");