const fs = require("fs");

function read() {
  fs.readFile("a.txt", "utf-8", function (err, data) {
    if (err) {
      console.log(err);
    }
    console.log(data);
  });
  console.log("operation started");
    let ans = 0;
    for (let i = 0; i < 2000000000; i++) {
      ans += i;
    }
    console.log("done operation " + ans);
  console.log("excute immediatly");
}

read();
