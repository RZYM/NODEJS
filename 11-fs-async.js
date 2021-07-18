const { readFileSync, writeFileSync, readFile, writeFile } = require("fs");
console.log("start read file");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-sync.txt",
      `Here is the result ${first} , ${second}`,
      { flag: "a" },
      (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log("done with this task");
      }
    );
  });
});
console.log("starting with next task");
